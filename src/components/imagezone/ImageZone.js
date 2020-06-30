import React, { useContext } from 'react';
import { AppContext } from '../../index';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        margin: theme.spacing(2),
      },
      title: {
        fontSize: 14,
      },
  }));
export default function ImageZone() {
    const classes = useStyles();
    const app = useContext(AppContext);
    
    return (
        <div>
            {
                app.state.showimgs ?
                (
                <Grid container justify="center">
                    <Grid item sm>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Content image
                                </Typography>
                                <img src={app.state.content} alt="invalid URL" width="40%" height="auto" />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Style image
                                </Typography>
                                <img src={app.state.style} alt="invalid URL" width="40%" height="auto" />
                            </CardContent>
                        </Card>
                    </Grid>   
                </Grid> 
                )
                    : null
            }
        </div>
    );
}

                
                        