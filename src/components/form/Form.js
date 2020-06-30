import React, { useContext,useState } from 'react';
import { AppContext } from '../../App';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { submit,unload } from '../../global/Reducer';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        width: '50%',
        margin: theme.spacing(4),
        padding: theme.spacing(3),
    },
    button: {
        // background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        // boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
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

    const handleClose = () => {
        app.dispatch(unload());
    };

    const handleSubmit = () => {
      app.dispatch(submit(cont,styl));
      /*
      Fetch from API, set loading to false, disp to true and resultimg
      */
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
        <TextField className={classes.input} onChange={handleC} label="Content image URL" />
        <TextField className={classes.input} onChange={handleS} label="Style image URL" />
        <Button
            className={classes.button}
            variant="contained"
            color="primary"
            endIcon={<DoubleArrowIcon />}
            onClick={handleSubmit}
            >
            Transfer Style
        </Button>
      </form>
      <Backdrop className={classes.backdrop} open={app.state.loading} onClick={handleClose}>
        <CircularProgress color="secondary" />
      </Backdrop>
    </Paper>
    </Grid>
    );
  }

