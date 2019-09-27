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
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
  ExpansionPanel: {
    backgroundColor: "#444B58",
  },
  card: {
    backgroundColor: "#444B58",
    textAlign: 'center',
  },
  rulesDropdown: {
    textAlign: 'left',
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
        <Grid item xs={6}>
          <div className={`${classes.root} ${classes.GridItem}`}>
          <Card className={classes.card}>
            <CardContent className={classes.card}>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Sentence
              </Typography>
              <Typography variant="h5" component="h2" style={{textAlign:"left"}}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna al
              </Typography>
            </CardContent>
            <CardActions className={classes.buttons}>
              <Button variant="contained" size="medium" color="secondary" className={classes.buttons.correct}>Correct</Button>
              <PopupState variant="popover" popupId="demo-popup-popover">
                    {popupState => (
                      <div>
                        <Button variant="contained" className={classes.buttons.incorrect} {...bindTrigger(popupState)}>
                          Incorrect
                        </Button>
                        <Popover
                          {...bindPopover(popupState)}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                          }}
                        >
                          <Typography className={classes.typography} style = {{background:"#444b58"}}>
                          <form style ={{width:"300px", padding:"20px"}}>
                          <h3>What rule(s) does this violate?</h3>
                          <table style ={{color:"white"}}>
                            <tr><td>
                              <input
                                type="checkbox"
                                name="rule"
                                value="1"
                              />Rule 1
                            </td></tr>
                            <tr><td>
                              <input
                                type="checkbox"
                                name="rule"
                                value="2"
                              />Rule 2
                            </td></tr>
                            <tr><td>
                              <input
                                type="checkbox"
                                name="rule"
                                value="3"
                              />Rule 3
                            </td></tr>
                            <tr><td>
                              <input
                                type="checkbox"
                                name="rule"
                                value="4"
                              />Rule 4
                            </td></tr>
                            <tr><td>
                              <input
                                type="checkbox"
                                name="rule"
                                value="5"
                              />Rule 5
                            </td></tr>
                            <tr><td>
                              <input type="submit" value="Submit" style = {{padding:"3px", background:"#6D8F9A", color:"white", border: "none", width: "100px"}}/>
                            </td></tr></table>
                            </form>
                          </Typography>
                        </Popover>
                      </div>
                    )}
                  </PopupState>
            </CardActions>
          </Card>
          </div>
        </Grid>
        <Grid item xs>
          <div className={`${classes.root} ${classes.GridItem} ${classes.SideCol}`}>
            <Paper className={classes.paper}>Rules
              <ExpansionPanel style={{backgroundColor: "#438397", color:"white"}}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>Rule 1</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography style={{textAlign:"left"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel  style={{backgroundColor: "#438397", color:"white"}}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>Rule 2</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography style={{textAlign:"left"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel  style={{backgroundColor: "#438397", color:"white"}}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>Rule 3</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography style={{textAlign:"left"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel  style={{backgroundColor: "#438397", color:"white"}}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>Rule 4</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography style={{textAlign:"left"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel  style={{backgroundColor: "#438397", color:"white"}}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>Rule 5</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography style={{textAlign:"left"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}