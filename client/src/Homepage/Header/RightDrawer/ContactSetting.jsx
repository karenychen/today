import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import {Middleware} from "../../../actions/middleware";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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
  url: {
    wordBreak: "break-all",
    borderBottom: 'none'
  },
  urlName: {
    wordBreak: "break-all",
    borderBottom: 'none'
  },
  input: {
    width: "100%",
    wordBreak: "break-all",
    clear: "both",
    border: theme.spacing(1)
  },
  paper: {
    position: 'absolute',
    width: '500px',
    height: 'auto',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    border: '0',
    borderRadius: '2%',
    // border: '2px solid #000',
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  root: {
  },
  title: {
    color: 'white',
    fontSize: "25px",
    margin: theme.spacing(2)
  },
  buttons: {    
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    width: "100%",
    height: "auto",
    flexWrap: 'wrap',
    justifyContent: 'flex-start',

  },
  button: {
    color: "white",
    border: "1.5px solid white",
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    width: "100%",
  },
  buttondiv: {
    padding: theme.spacing(1)
  },
  input: {
    display: "block",
    width: "100%",
  },
  delete: {
    padding: '0px',
    float: 'right',
    marginLeft: theme.spacing(1),
    color: 'white'
  },
  add: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(2)
  }
}));
const log = console.log;

export default function ContactSetting(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const contactSettingOpen = props.contactSettingOpen;
  const setContactSettingOpen = props.setContactSettingOpen;
  const handleClose = props.handleClose;

  const [comment, setComment] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // log the comment to our database
    log("comment")
    log(comment)
    Middleware.addFeedback(comment)
    handleClose();
  }

  return (

    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={contactSettingOpen}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title" className={classes.title}>Send us Feedback</h2>
          <div className={classes.buttons}>
            <div class={classes.input}>
              <InputField
                className={classes.input}
                fullWidth multiline={true}
                rows={10}
                onChange={e => setComment(e.target.value)}
                inputProps={{ className: classes.input }}
              />
              <div className={classes.add}>
              <Button variant="outlined" onClick={handleSubmit} className={classes.button}>
                SEND
              </Button>
              </div>
            </div>

          </div>
        </div>
      </Modal>
    </div>
  );
}
