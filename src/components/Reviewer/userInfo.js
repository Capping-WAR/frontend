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
              <Paper className={classes.paper}>
                <Typography variant="display1" className={classes.title}>
                Rank
                </Typography>
                <br />
                <div className={classes.root} style = {{paddingTop:"15px"}}>
                  <LinearProgress color="secondary" variant="determinate" value={completed} />
                  <p>732 points</p>
                </div>
              </Paper>
            </div>
        </Grid>
    )
}

export default UserInfo;