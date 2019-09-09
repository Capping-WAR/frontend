import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Divider from '@material-ui/core/Divider';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
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
  buttons: {
    margin: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    correct: {
      backgroundColor: theme.palette.text.secondary
    },
    incorrect: {

    },
  },
  card: {
    textAlign: 'center',
  }
}));

export default function AutoGrid() {
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
    <div className={classes.root}>  
      <Grid container spacing={3}>
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
                      color="primary"
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
                        color="primary"
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
                        color="primary"
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
                <div className={classes.root}>
                  <LinearProgress color="secondary" variant="determinate" value={completed} />
                </div>
              </Paper>
            </div>
        </Grid>
        <Grid item xs={6}>
          <div className={`${classes.root} ${classes.GridItem}`}>
          <Card className={classes.card}>
            <CardContent className={classes.card}>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Sentence
              </Typography>
              <Typography variant="h5" component="h2">
                This is an example sentence, is this valid english?
              </Typography>
            </CardContent>
            <CardActions className={classes.buttons}>
              <Button variant="contained" size="small" color="secondary" className={classes.buttons.correct}>Correct</Button>
              <Button variant="contained" size="small" color="error" className={classes.buttons.incorrect}>Incorrect</Button>
            </CardActions>
          </Card>
          </div>
        </Grid>
        <Grid item xs>
          <div className={`${classes.root} ${classes.GridItem} ${classes.SideCol}`}>
            <Paper className={classes.paper}>Rules
            </Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}