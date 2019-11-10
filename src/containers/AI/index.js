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
import Reviewer from '../../components/Reviewer'
import {Header, Footer} from '../../components/Layouts';
import Grid from '@material-ui/core/Grid';
import { SideNav } from '../../components/Layouts';
import { theme } from '../App';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Store from '../../redux/store';

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
  cardContainer: {
    paddingTop: 20
  },
  card: {
    backgroundColor: "#444B58",
  }
}));

export default function AI() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const createData = (id, queued_by, location, progress) => {
    return {id, queued_by, location, progress};
  }
  
  const rows = [
    createData('1', 'pablo', '/dev/null', '%89'),
    createData('2', 'war-tool', '/dev/null', '%43'),
    createData('3', 'pablo', '/dev/null', '%4'),
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
              <Grid item spacing={12} className={classes.cardContainer}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Current Threads
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>ID</TableCell>
                          <TableCell align="right">Queued By</TableCell>
                          <TableCell align="right">Progress</TableCell>
                          <TableCell align="right">Location</TableCell>
                        </TableRow>
                      </TableHead>
                        <TableBody>
                          {rows.map(row => (
                            <TableRow key={row.name}>
                              <TableCell component="th" scope="row">
                                {row.id}
                              </TableCell>
                              <TableCell align="right">{row.queued_by}</TableCell>
                              <TableCell align="right">{row.location}</TableCell>
                              <TableCell align="right">{row.progress}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Typography>
                  </CardContent>
                  </CardActionArea>
                </Card>
                </Grid>
                <Grid item spacing={12} className={classes.cardContainer}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Hyper Param Search Space
                      </Typography>
                      <div>
                      <img alt=""  src={require("../../static/iu.gif")} />
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Container>
          </main>
    </div>
    </Fragment>
    </Provider>
  </MuiThemeProvider> 
  );
}
