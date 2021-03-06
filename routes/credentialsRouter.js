/* Phase 2 API */
'use strict'
const log = console.log
var bodyParser = require('body-parser')
const express = require('express')

const credentialsRouter = express.Router()
var session = require('express-session')

credentialsRouter.use(express.static(__dirname + '/pub'))
credentialsRouter.use(bodyParser.urlencoded({
    extended: true
}))


credentialsRouter.use(bodyParser.json())
credentialsRouter.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}))

const mongoose = require('../mongoose.js')
const { User } = require('./../models/user')
const { Message } = require('./../models/message')
const Bcrypt = require("bcryptjs")


credentialsRouter.get('/logout', function(req, res){
    req.session.destroy()
    res.status(200).send();
  });

credentialsRouter.get("/check-loggedin", (req, res) => {
    if (req.session.loggedin) {
        User.findById(req.session.user._id)
        .then((user) => {
            if (!user) {
                res.status(404).send()
                return
            }
            req.session.user = user
            Message.find({to: req.session.user.username}, function(err, messages) {
                req.session.messages = messages
                res.send({ currentUser: req.session.user, messages: req.session.messages})
            })

        })
        .catch(error => {
            res.status(500).send(error)
        })
    }
    else {
        res.status(401).send();
    }
});

credentialsRouter.post('/user-register', (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: Bcrypt.hashSync(req.body.password, 10),
        fisrtname: req.body.firstname,
        lastname: req.body.lastname,
        birthday: req.body.birthday,
        securityQuestions: req.body.securityQuestions

    })

	user.save().then((result) => {
		res.send(result)
	}, (error) => {
		res.status(400).send(error) // 400 for bad request
	})
})

credentialsRouter.post('/auth', (req, res) => {
    User.findOne({username: req.body.username}, function(err, user) {
        if (err) return console.error(err)
        
        if (user === null) {
            // res.send("The Username doesn't exist!")
            res.status(400).send("wrong username")
        }
        else if (!Bcrypt.compareSync(req.body.password, user.password)) {
            res.status(400).send("wrong passwordsss")
        }
        else {
            Message.find({to: req.body.username}, function(err, messages) {

                req.session.loggedin = true
                req.session.user = user
                req.session.messages = messages

                res.status(200).send("success")
            })
        }
    })
})


credentialsRouter.post('/reset', (req, res) => {
    User.findOne({username: req.body.username}, function(err, user) {
        if (err) return console.error(err)
        
        if (user === null) {
            // res.send("The Username doesn't exist!")
            res.status(404).send("wrong username")
        }
        // else if (!Bcrypt.compareSync(req.body.password, user.password)) {
        //     res.status(400).send("wrong passwordsss")
        // }
        else {
            if(user.securityQuestions[0].question == req.body.securityQuestions[0].question && user.securityQuestions[0].answer == req.body.securityQuestions[0].answer && user.securityQuestions[1].question == req.body.securityQuestions[1].question && user.securityQuestions[1].answer == req.body.securityQuestions[1].answer && user.securityQuestions[2].question == req.body.securityQuestions[2].question && user.securityQuestions[2].answer == req.body.securityQuestions[2].answer) {
                User.updateOne({_id: user._id}, { password: Bcrypt.hashSync(req.body.password, 10) }).then((result) => {
                    res.status(200).send()
                }), (error) => {
                    res.status(500).send(error)
                }
                res.status(200).send("success")
                // user.password = Bcrypt.hashSync(req.body.password, 10)
                // user.save().then((result) => {
                //     res.status(200).send()
                // }, (error) => {
                //     res.status(400).send(error) // 400 for bad request
                // })
            }
            else {
                res.status(404).send("security question answers wrong.")
            }
        }
    })
})

module.exports = credentialsRouter