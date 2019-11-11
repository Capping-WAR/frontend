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
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchThreads, doneFetchingThreads } from '../../redux/actions/aiActions';

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

const transposeThreads = (threads) => {
    let ids = [];
    let rows = [];
    threads.map(thread => {
        ids.push(thread.id)
        let params = thread.parameters.split(',');
        params.map(param => {
            let param_data = param.split('<');
            let param_name = param_data[0].trim()
            let param_value = param_data[1].split('>')[0].trim()
            if (!rows[param_name]) {
                Object.assign(rows, {[param_name]:[]})
            }
            rows[param_name].push(param_value)
        })

        params.map(param => {
            let param_name = param.split('<')[0].trim();
            if (!rows[param_name]) {
                
                Object.assign(rows, {[param_name]:{}})
            }
        })
       
    })

    let rows_jsx = []
    Object.keys(rows).map(row => {
        console.log(String(row),)
        let vals = []

        rows[row].map(val => {
            vals.push(<TableCell align="center">{val}</TableCell>)
        })

        rows_jsx.push(
            <TableRow key={row}>
            <TableCell component="th" scope="row">
                {row}
            </TableCell>
                {vals}
            </TableRow>
        )
    })

    return {ids: ids, rows: rows_jsx}
}

const AI = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const [open, setOpen] = useState(true);
    const [table, setTable] = useState(undefined);
    const [tableIsSet, setTableIsSet] = useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


    const { threads } = state.aiReducer;

    if (threads !== undefined && table === undefined && !tableIsSet) {
        setTable(transposeThreads(threads.threads));
        setTableIsSet(true);
    }

    useEffect(() => {
        new Promise((resolve, reject) => {
            dispatch(fetchThreads());
            resolve();
        })
        .then(() => {
            dispatch(doneFetchingThreads());
        })
        .catch((err) => {
            dispatch(doneFetchingThreads());
            console.log(err)
        });
    }, []);

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
                <Container component="main" maxWidth="lg">
                <Grid container spacing={3}>
                        <Grid item xs={12} className={classes.cardContainer}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        Current Threads
                                        </Typography>
                                        {
                                            (table === undefined
                                                ? (
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    Threads Unavailable
                                                </Typography>
                                                )
                                                : (
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        <Table className={classes.table} aria-label="simple table">
                                                        <TableHead>
                                                            <TableRow>
                                                            <TableCell>Parameters</TableCell>
                                                            {table.ids.map(id => (
                                                                <TableCell align="center">{id}</TableCell>
                                                            ))}
                                                            </TableRow>
                                                        </TableHead>
                                                            <TableBody>
                                                                {table.rows}
                                                            </TableBody>
                                                        </Table>
                                                    </Typography>
                                                )
                                            )
                                        }
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs className={classes.cardContainer}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Hyper-Parameter Search Space
                                    </Typography>
                                    <div align="center">
                                        {
                                            (threads === undefined
                                                ? (
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        Image Unavailable
                                                    </Typography>  
                                                )
                                                : (
                                                    <img alt="" src={threads.imgurl} />
                                                )
                                            )
                                        }
                                    </div>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs className={classes.cardContainer}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Thread Status
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p"> 
                                            {
                                                (threads === undefined
                                                    ? (
                                                        <Typography className={classes.heading}>System Information Unavailable</Typography>
                                                    )
                                                    : (
                                                        <Table className={classes.table} aria-label="simple table">
                                                            <TableHead>
                                                                <TableRow>
                                                                    <TableCell align="center">ID</TableCell>
                                                                    <TableCell align="center">Status</TableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                {threads.threads.map(thread => (
                                                                    <TableRow key="thread_status">
                                                                        <TableCell align="center">{thread.id}</TableCell>
                                                                        <TableCell align="center">{thread.status}</TableCell>
                                                                    </TableRow>
                                                                ))}
                                                            </TableBody>
                                                        </Table>
                                                    )
                                                )
                                            }    
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                        
                    <Grid container spacing={3}>
                        <Grid item xs className={classes.cardContainer}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            System Information
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p"> 
                                            {
                                                (threads === undefined
                                                    ? (
                                                        <Typography className={classes.heading}>System Information Unavailable</Typography>
                                                    )
                                                    : (
                                                        <Table className={classes.table} aria-label="simple table">
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell align="center">CPU</TableCell>
                                                                <TableCell align="center">Disk</TableCell>
                                                                <TableCell align="center">Memory</TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>

                                                            <TableRow key="sys_info">
                                                                    <TableCell align="center">%{threads.system.cpu}</TableCell>
                                                                    <TableCell align="center">%{threads.system.dsk}</TableCell>
                                                                    <TableCell align="center">%{threads.system.mem}</TableCell>
                                                                </TableRow>
                                                        </TableBody>
                                                        </Table>
                                                    )
                                                )
                                            }    
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>                
            </main>
        </div>
        </Fragment>
        </Provider>
        </MuiThemeProvider> 
    );
};

export default AI;