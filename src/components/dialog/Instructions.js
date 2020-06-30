import React, { useContext } from 'react';
import { AppContext } from '../../index';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { toggleinst } from '../../global/Reducer';
import instruction from '../../images/instruction.png';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Instructions() {
    const app = useContext(AppContext);

  const handleClose = () => {
    app.dispatch(toggleinst());
  };

  return (
      <Dialog
        open={app.state.instruct}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Instructions"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Enter the URL of a content image and a style image. The design of the style image will be transfered to the content image.
            <img alt="example of NST" src={instruction} width="100%" height="auto" />
            When the result image is produced you can see it by clicking the 'see image' button
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
  );
}