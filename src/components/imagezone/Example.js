import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import HDcontent from '../../images/H&D-content.jpg';
import HDstyle from '../../images/H&D-style1.jpg';
import HDresult from '../../images/H&D-result1.PNG';
import { Paper, Grid } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AddIcon from '@material-ui/icons/Add';
 
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 20,
  },
  media: {
    height: 345,
  },
  paper: {
    width: '90%',
  },
  arrow: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
});

export default function Example() {
    const classes = useStyles();

    return (
      <Grid container justify="center">
        <Paper elevation={2} className={classes.paper}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item sm={3}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={HDstyle}
                    title="Style picture"
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item sm={1}>
              <AddIcon fontSize="large" />
            </Grid>
            <Grid item sm={3}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={HDcontent}
                    title="Content picture"
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item sm={1}>
              <ArrowForwardIcon fontSize="large" />
            </Grid>
            <Grid item sm={3}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={HDresult}
                    title="Result picture"
                  />
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
  );
}