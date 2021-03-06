import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const InputField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'white',
        },
        '& label': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: 'white',
        },
        '& 	.MuiInput-root': {
            color: 'white'
        }
        
    },
})(TextField);

const useStyles = makeStyles(theme => ({
    what: {
        width: "30%",
        wordBreak: "break-all",
        borderBottom: 'none'
    },
    when: {
        width: "10%",
        maxWidth: "50%",
        wordBreak: "break-all",
        paddingRight: "0",
        borderBottom: 'none'
    },
    buttonCell: {
        width: "10%" ,
        borderBottom: 'none'
    },
    whatInput: {
        width: "100%",
        wordBreak: "break-all",
    },
    whenInput: {
        wordBreak: "break-all",
        width: '80%'
    },
    input: {
        color: 'white'
    },
    button: {
        // float: "right",
        color: "white",
        border: "0.5px solid white",
        backgroundColor: 'rgba(52, 52, 52, 0.3)',
        width: '100%'
    }
}));

export default function TodoForm(props) {
    const classes = useStyles();
    const add = props.add
    const [what, setWhat] = useState("");
    const [when, setWhen] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log(when)
        let year = when.substr(0, when.indexOf('-')); 
        if(when == "") {
            alert("Please input a valid date")
            return
        }
        if(year.length > 4) {
            alert("Please input a year in range(1000, 9999)")
            return
        }
        let month = when.slice(5, 7)
        let day = when.slice(8, 10)
        let hour = parseInt(when.slice(11, 13))
        let minute = when.slice(14, 16)
        let formattedWhen = ""
        
        if (hour> 12) {
            console.log(hour)
            hour = hour - 12
            if(hour<10) {
                hour = "0" + hour
            }
            formattedWhen = year + "-" + month + "-" + day + " " + hour + ":" + minute + " PM"
        }
        else {
            formattedWhen = year + "-" + month + "-" + day + " " + hour + ":" + minute + " AM"
        }
        add(what, formattedWhen);
        setWhat("");
        setWhen("");
    }

    return (


        <TableRow>
            <TableCell className={classes.what} component="th" scope="row">
                <InputField
                    className={classes.whatInput}
                    label="What"
                    value={what}
                    onChange={e => setWhat(e.target.value)}
                    inputProps={{className: classes.input}}
                />
            </TableCell>
            <TableCell className={classes.when} component="th" scope="row">
                {/* <TextField
                    className = {classes.whenInput}
                    name="todoWhen"
                    label="When"
                    value={when}
                    onChange={e => setWhen(e.target.value)}
                /> */}
                {/* <TextField
                    id="datetime-local"
                    label="When"
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    className={classes.whenInput}
                    onChange={e => setWhen(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                        className: classes.floatingLabelFocusStyle,
                    }}
                    
                />             */}
                <InputField
                    id="datetime-local"
                    label="When"
                    type="datetime-local"
                    // defaultValue="2017-05-24T10:30"
                    className={classes.whenInput}
                    onChange={e => setWhen(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value = {when}
                    max="9999-12-31T23:59"
                />
            </TableCell>
            <TableCell className={classes.buttonCell} component="th" scope="row">
                <Button variant="outlined" onClick={handleSubmit} className={classes.button}>
                    Add
                </Button>
            </TableCell>
        </TableRow>
    )
}