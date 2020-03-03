import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countdown: 0,
            disabled: false
        };
    }

   startTimer = event => {
        event.preventDefault();
        const btn =  document.querySelector("#start-timer-btn");

        const total = document.querySelector("#time-input").value * 60;
        console.log(total)
        for(let k = 1; k <= total; k++) {
            // console.log(this.state)
            setTimeout(() => {
                this.setState({countdown: total-k,
                                disabled: true});
                console.log(this.state.countdown);
                // console.log(this.state);
                if(k == total) {
                    console.log("finish");
                    this.setState({
                        countdown: 0,
                        disabled: false
                    })
                }
            }, k * 1000)
        }
        
    }

    styleTime = () => {
        return {
            min: Math.floor(this.state.countdown/60) < 10 ? ("0" + Math.floor(this.state.countdown/60)) 
                : Math.floor(this.state.countdown/60),
            sec: (this.state.countdown % 60) < 10 ? ("0" + this.state.countdown % 60)
                : this.state.countdown % 60
        }
    }

    render() {
        // const { minutes, seconds } = this.state
        return (
            <div style={{textAlign: 'center'}}>
            <h3 id="input-prompt"> How long do you want to study for?</h3>
                <div>
                    <TextField id="time-input" placeholder="minutes" type="number"/>
                    <Button id="start-timer-btn" variant="outlined" onClick={this.startTimer} disabled={this.state.disabled}>
                        START
                    </Button>
                </div>
                <br/>
                <div id="timer">
                    <h3>{this.styleTime().min} : {this.styleTime().sec} </h3>
                </div>
            </div>
        )
    }
}