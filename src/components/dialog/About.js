import React, { useContext } from 'react';
import { AppContext } from '../../index';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import GitHubIcon from '@material-ui/icons/GitHub';
import { about } from '../../global/Reducer';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function About() {
    const app = useContext(AppContext);

  const handleClose = () => {
    app.dispatch(about());
  };

  return (
      <Dialog
        open={app.state.about}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"About Neural Style Transfer"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description-1">
          NST  refers to a class of software algorithms that manipulate digital images, or videos, in order to adopt the appearance or visual style of another image. NST algorithms are characterized by their use of deep neural networks for the sake of image transformation. 
          An implementation of NST in tensorflow can be viewed <a style={{textDecoration:"underline",color:"inherit"}} href="https://www.tensorflow.org/tutorials/generative/style_transfer">here</a>.
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description-2">
          NST was first published in the paper "A Neural Algorithm of Artistic Style" by Gatys et al. in 2015. You can read the paper <a style={{textDecoration:"underline",color:"inherit"}} href="https://arxiv.org/abs/1508.06576">here</a>.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <IconButton onClick={()=>{window.location.href="https://github.com/dhruvix/NST-MUI"}} color="secondary">
			<GitHubIcon />
		  </IconButton>
          <Button onClick={handleClose} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
  );
}
