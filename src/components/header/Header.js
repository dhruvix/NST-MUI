import React, { useContext } from 'react';
import { AppContext } from '../../index';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import LayersIcon from '@material-ui/icons/Layers';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { toggleinst,toggledisp,toggleTheme } from '../../global/Reducer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const app = useContext(AppContext);
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={()=>{console.log("STATE:",app.state)}} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <LayersIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Neural Style Transfer
            </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<ContactSupportIcon />}
                    onClick={()=>{app.dispatch(toggleinst())}}
                    >
                    Instructions
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<PhotoLibraryIcon />}
                    onClick={()=>{app.dispatch(toggledisp())}}
                    >
                    See image
                </Button>
                {
                  app.state.darkMode ? 
                  (
                    <IconButton onClick={()=>{app.dispatch(toggleTheme())}} color="secondary">
									    <Brightness7Icon />
								    </IconButton>
                  )
                  :
                  (
                    <IconButton onClick={()=>{app.dispatch(toggleTheme())}} color="secondary">
									    <Brightness4Icon />
								    </IconButton>
                  )
                }
          </Toolbar>
        </AppBar>
      </div>
    );
}