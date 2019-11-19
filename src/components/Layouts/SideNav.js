import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import { from } from 'rxjs';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { theme } from '../../containers/App';

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
      width: theme.spacing(6),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(14),
      },
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
      height: 240,
    },
  }));

const SideNav = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
      <div className={
        classes.root}>
      <Fragment>
          <CssBaseline />
          <AppBar position="absolute" className={clsx(classes.appBar, !open && classes.appBarShift)}>
              <Toolbar className={classes.toolbar}>
              <IconButton
                  edge="start"
                  aria-label="open drawer"
                  onClick={handleDrawerClose}
                  className={clsx(classes.menuButton, !open && classes.menuButtonHidden)}
              >
                  <MenuIcon />
              </IconButton>
              <Typography component="h1" variant="h6"  noWrap className={classes.title}>
                  Writing Advisor Review Tool
              </Typography>
              </Toolbar>
          </AppBar>


          <Drawer
              variant="permanent"
              classes={{
              paper: clsx(classes.drawerPaper, open && classes.drawerPaperClose),
              }}
              open={open}
          >
          <div className={classes.toolbarIcon}>
              <IconButton onClick={handleDrawerOpen}>
                  <ChevronLeftIcon />
              </IconButton>
          </div>
          <Divider />
              <div >
                  <div >
                      <Link to="/">
                          <ListItem button>
                              <ListItemIcon>
                                  <DashboardIcon />
                              </ListItemIcon>
                              <ListItemText style = {{color: "white", textDecoration: "none"}} primary="Dashboard" />
                          </ListItem>
                      </Link>
                      <Link to="/about">
                          <ListItem button>
                              <ListItemIcon>
                                  <LayersIcon />
                              </ListItemIcon>
                              <ListItemText style = {{color: "white", textDecoration: "none"}} primary="About" />
                          </ListItem>
                      </Link>
                      <Link to="/ai">
                          <ListItem button>
                              <ListItemIcon>
                                  <BarChartIcon />
                              </ListItemIcon>
                              <ListItemText style = {{color: "white", textDecoration: "none"}} primary="AI" />
                          </ListItem>
                      </Link>
                  </div>
                  <Divider />
                  <div>
                        <ListItem button onClick={() => window.location.replace('logout')}>
                            <ListItemIcon>
                                <AssignmentIcon />
                            </ListItemIcon>
                            <ListItemText style = {{color: "white", textDecoration: "none"}} primary="Log Out" />
                        </ListItem>
                      
                      <Link to="/faq">
                          <ListItem button>
                              <ListItemIcon>
                                  <PeopleIcon />
                              </ListItemIcon>
                              <ListItemText style = {{color: "white", textDecoration: "none"}} primary="Help" />
                          </ListItem>
                      </Link>
                  </div>
                  <Divider />
                  <div>
                      <Link to="/admin">
                        <ListItem button>
                            <ListItemIcon>
                                <PeopleIcon />
                            </ListItemIcon>
                            <ListItemText style = {{color: "white", textDecoration: "none"}} primary="Admin" />
                        </ListItem>
                    </Link>
                </div>
              </div>
          </Drawer>
      </Fragment>
   </div>
  )
}

export default SideNav;