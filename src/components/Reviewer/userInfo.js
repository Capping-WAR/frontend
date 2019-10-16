import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import LinearProgress from '@material-ui/core/LinearProgress';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { fetchReviewers, doneFetchingReviewers } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      backgroundColor: "#444B58",
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    item: {
      padding: theme.spacing(2),
    },
    GridItem: {
      paddingTop: 40
    },
    SideCol: {
      paddingLeft: 20,
      paddingRight: 20
    },
    card: {
      backgroundColor: "#444B58",
      textAlign: 'center',
    },
  }));


const UserInfo = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const { isFetchingReviewer } = state;

    useEffect(() => {
        new Promise((resolve, reject) => {
            dispatch(fetchReviewers());
            resolve();
        })
        .then(() => {
            dispatch(doneFetchingReviewers());
            console.log("DONE");
        })
        .catch((err) => {
            dispatch(doneFetchingReviewers());
        });
    }, []);

    const spinner = isFetchingReviewer
        ? <CircularProgress color="secondary"/>
        : null;

    const { reviewers } = state;
    console.log(state)
    const [completed, setCompleted] = React.useState(0);

  React.useEffect(() => {
    function progress() {
      setCompleted(oldCompleted => {
        return 50;
        // if (oldCompleted === 100) {
        //   return 0;
        // }
        // const diff = Math.random() * 10;
        // return Math.min(oldCompleted + diff, 100);
      });
    }

    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

    return (
      <Grid item xs>
        <div className={`${classes.root} ${classes.GridItem} ${classes.SideCol}`}>
          <Paper className={classes.paper}>
            <Typography variant="display1" className={classes.title}>
              Leaderboard
            </Typography>
            <List className={classes.root}>
              {spinner}
              {
                (reviewers === undefined
                  ? (
                    "No Data Available"
                  )
                  :(
                    reviewers.map((reviewer) => (
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <AccountCircleIcon
                              color="secondary"
                              fontSize="large"
                            />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={reviewer[2] + " " + reviewer[3]} secondary={reviewer[5]} />
                      </ListItem>
                    ))
                  )
                )
              }
            </List>
          </Paper>
        </div>
        <div className={classes.root} style={{ padding: 20 }} >
          <Paper className={classes.paper}>
            <Typography variant="display1" className={classes.title}>
              Rank
            </Typography>
            <br />
            <div className={classes.root} style = {{paddingTop:"15px"}}>
            {spinner}
             {
                (reviewers === undefined
                  ? (
                    "No Data Available"
                  )
                  :(
                    reviewers.map((reviewer) => (
                      <LinearProgress color="secondary" variant="determinate" value={reviewer[5]} />,
                      <p>reviewer[5] points</p>
                    ))
                  )
                )
              }
            </div>
          </Paper>
        </div>
      </Grid>
    )
}
export default UserInfo;
