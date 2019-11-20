import React, { Component, Fragment } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';

import { theme } from '../App';
import { SideNav } from '../../components/Layouts';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Store from '../../redux/store';
// import Icon from '@material-ui/core/Icon';
// import GitHubIcon from '@material-ui/icons/GitHub';``
// import LinkedInIcon from '@material-ui/icons/LinkedIn';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    background: "#1c1e24",
    color: "white",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    background: "#1c1e24",
    color: "white",
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,

    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    background: "#444B58",
    color: "white",
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    background: "#282C34",
    color: "white",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: "#282C34",
    color: "white",
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    background: "#444B58",
    color: "white",
  },
  fixedHeight: {
    height: 500,
  },
  bigAvatar: {
      margin: 20,
      width: 120,
      height: 120,
    },
}));

const AI = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const students = [
    {name:"Samantha DiMaio", major:"Information Systems", img:require("../../static/sam.jpg"), github:"", linkedin:""},
    {name:"Daniel Gisolfi", major:"Computer Science", img:require("../../static/dan.jpg"), github:"", linkedin:""},
    {name:"Alissa Sytsm", major:"Computer Science", img:require("../../static/ali.jpg"), github:"", linkedin:""},
    {name:"Dayna Eidle", major:"Computer Science", img:require("../../static/dayna.jpg"), github:"", linkedin:""},
    {name:"Lauren Urena-Clark", major:"Information Technology", img:require("../../static/lauren.jpeg"), github:"", linkedin:""}
  ];

  return (

    <MuiThemeProvider theme={theme}>
      <Provider store={Store}>
        <Fragment>
          <div className={classes.root}>
            <SideNav />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
            <div className={classes.root}>
              <Grid item container spacing={12}>
              <Paper className={classes.paper}>
                  <Typography style={{textAlign:"center"}}>
                    <h2 className="h1-responsive font-weight-bold my-5">
                      WAR Tool
                    </h2>
                    <p className="grey-text w-responsive mx-auto mb-5">
                      The WAR (Writing Advising Reviewing) Tool is a web application created for a Fall 2019 senior capping project at Marist College. The members of the team include Samantha DiMaio, Dayna Eidle, Ali Systma, Daniel Gisolfi, and Lauren Urena-Clark. Our team has engaged in a number of roles including setting up, designing, developing, integrating, managing, implementating, and training the system. The tool will be utilized by the Marist College Writing center as an efficient way to review essay sentences. One at a time, the rewiewer will review sentences that have been tagged by the system. It is up to their own critique to classify the sentence as incorrect or correct. If incorrect, the reviewer can choose which rule the sentence violates. The five rules available to select from inclue Spelling, Verbs, Introductory Phrases, Nouns, and Consiceness. The Reviewer also has oppotunity to earn reputation points through their sentence reviews.
                    </p>
                    </Typography>
                    <Typography style={{textAlign:"center"}}>

                        <h2 className="h1-responsive font-weight-bold my-5">
                          Our Team
                        </h2>
                        <p className="grey-text w-responsive mx-auto mb-5">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                          error amet numquam iure provident voluptate esse quasi, veritatis
                          totam voluptas nostrum quisquam eum porro a pariatur veniam.
                        </p>
                        <Grid container justify="center" alignItems="center">
                        <table>
                        <tr>
                          {students.map(student => (
                            <td>
                              <Avatar alt={student.name} src={student.img} className={classes.bigAvatar} />
                              <h5 className="font-weight-bold mt-4 mb-3">{student.name}</h5>
                              <p className="text-uppercase blue-text">{student.major}</p>
                              {/* <Icon icon={GitHubIcon} />
                              <Icon icon={LinkedInIcon} /> */}
                            </td>
                          ))}
                      </tr>
                    </table>
                  </Grid>
                </Typography> 
              </Paper>
            </Grid>
            </div>
          </Container>
          </main>
        </div>
      </Fragment>
    </Provider>
  </MuiThemeProvider> 
  );
}

export default AI;