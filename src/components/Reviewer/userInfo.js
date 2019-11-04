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
import Tooltip from '@material-ui/core/Tooltip';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
      ListStyleType: 'none'
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

const rankExplained = `
A users rank is the total number of points 
they have accumulated while reviewing. Each time 
the user's rank increaes by 100 there meter resets 
and there rank count is updated
`;

const UserInfo = () => {
  const classes = useStyles();
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const [rank, setRank] = useState(0);
  const [rankIsNotSet, setRankIsNotSet] = useState(true);

  let { reviewer } = state.reviewerReducer;
  if ((reviewer !== undefined) && (rankIsNotSet)) {
    reviewer = reviewer[0];
    setRank(reviewer[5])
    setRankIsNotSet(false);
  }
  useEffect(() => {
    const timer = setInterval(rank, 500);
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
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                <AccountCircleIcon
                  color="secondary"
                  fontSize="large"
                />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Daniel" secondary="1456 points" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <AccountCircleIcon
                    color="secondary"
                    fontSize="large"
                  />
                </Avatar>
                </ListItemAvatar>
              <ListItemText primary="Ali" secondary="1232 points" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <AccountCircleIcon
                    color="secondary"
                    fontSize="large"
                  />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Dayna" secondary="1045 points" />
            </ListItem>
          </List>
        </Paper>
        </div>
        <div className={classes.root} style={{ padding: 20 }} >
        <Tooltip title={rankExplained}>
          <Paper className={classes.paper}>
            <Typography variant="display1" className={classes.title}>
            Rank - {Math.floor(rank/100)}
            </Typography>
            <br />
            <div className={classes.root} style = {{paddingTop:"15px"}}>
              <LinearProgress color="secondary" variant="determinate" value={rank%100} />
              { 
                (reviewer !== undefined
                  ? (
                    <p>{rank%100} points</p>
                  )
                  :(
                    <p>Rank Unavailable</p>
                  ) 
                )
              }
            </div>
          </Paper>
        </Tooltip>  
      </div>
    </Grid>
  )
}

export default UserInfo;