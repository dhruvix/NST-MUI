import React, { useContext,useState } from 'react';
import { AppContext } from '../../index';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { submit,onSuccess,unload } from '../../global/Reducer';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        width: '50%',
        margin: theme.spacing(3),
        padding: theme.spacing(3),
    },
    button: {
        width: '30%',
        margin: theme.spacing(2),
    },
    input: {
        width: '80%',
        margin: theme.spacing(1),
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      },
  }));
  
export default function TextFields() {

    const app = useContext(AppContext);
    const classes = useStyles();
    const [cont, setContent] = useState("");
    const [styl, setStyle] = useState("");

    function validateResponse(response) {
      if (!response.ok) {
          throw Error(response.statusText);
      }
      return response;
    }

    function validateRequest(request) {
      let a = request.includes('.jpg') || request.includes('.jpeg');
      let b = request.includes('http://') || request.includes('https://');
      return a && b;
    }

    const handleSubmit = () => {
      if(validateRequest(cont) && validateRequest(styl)){
        app.dispatch(submit(cont,styl));
        fetch(`https://nst-hadhru.herokuapp.com/pic?content=${cont}&style=${styl}`)
            .then(validateResponse)
            .then(response => response.blob())
            .then(blob => {
                app.dispatch(onSuccess(URL.createObjectURL(blob)));
            }).catch(err => {
              alert("something's not right: The server could be overloaded or the program might not have been able to take the input properly",err);
              app.dispatch(unload());
            });
      }
      else{
        alert("looks like the URLs you have entered are not valid JPG images!")
      }
    };

    const handleC = (event) =>{
      setContent(event.target.value);
    };

    const handleS = (event) =>{
      setStyle(event.target.value);
    };
  
    return (
    <Grid container justify="center">
      <Paper className={classes.paper} elevation={3}>
      <form noValidate autoComplete="off">
        <TextField className={classes.input} onChange={handleC} label="Content image URL" color="secondary"/>
        <TextField className={classes.input} onChange={handleS} label="Style image URL" color="secondary"/>
        <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            endIcon={<DoubleArrowIcon />}
            onClick={handleSubmit}
            >
            Transfer Style
        </Button>
      </form>
      <Backdrop className={classes.backdrop} open={app.state.loading} >
        <CircularProgress color="secondary" />
      </Backdrop>
    </Paper>
    </Grid>
    );
  }

