import React, { useContext } from 'react';
import { AppContext } from '../../index';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { toggledisp } from '../../global/Reducer';

export default function ResultImg() {
    const app = useContext(AppContext);

  const handleClose = () => {
   app.dispatch(toggledisp());
  };

  return (
      <Dialog
        open={app.state.disp}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Resultant Image"}</DialogTitle>
        {
            app.state.resultimg ? 
            (
            <DialogContent>
                <img alt="NST result" src={app.state.resultimg} />
            </DialogContent>
            )
            :
            (
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    There is no image available, please read the instructions
                </DialogContentText>
            </DialogContent>
            )
        }
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
  );
}