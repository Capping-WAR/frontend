import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { Typography, Grid, Paper, Button } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Store from '../../redux/store';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Statistics from '../../components/Statistics';
import { SideNav } from '../../components/Layouts';
import { useDispatch, useSelector } from 'react-redux';
import { theme } from '../App';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: "#282C34",
    color: "white",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    background: "#282C34",
    color: "white",
  },
  paper: {
    backgroundColor: "#444B58",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Admin = () => {
  const classes = useStyles();
  const state = useSelector(state => state);
  const { reviewer } = state.reviewerReducer;

  return (
    (reviewer !== undefined) 
    ? (
      (reviewer.isAdmin) 
      ? (
        <Fragment>
          <div className={classes.root}>
            <SideNav />
            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <Container maxWidth="lg" className={classes.container}>
                <Statistics />
              </Container>
            </main>
          </div>
        </Fragment>
      ):
      (
        <Fragment>
          <div className={classes.root}>
            <SideNav />
            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <Container maxWidth="lg" className={classes.container}>
                <Grid item container spacing={12} justify="center" style={{ paddingTop: '10vh' }}>
                  <Paper className={classes.paper}>
                    <Typography style={{textAlign:"center"}} variant="h3">Access Denied.</Typography>
                    <Typography style={{textAlign:"center"}} variant="h3">To get access contact the Site Administator.</Typography>
                  </Paper>
                </Grid>
              </Container>
            </main>
          </div>
        </Fragment>
      )
    ) :
    (
      <Fragment>
        <div className={classes.root}>
          <SideNav />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <Grid item container spacing={12} justify="center" style={{ paddingTop: '10vh' }}>
                <Paper className={classes.paper}>
                  <Typography style={{textAlign:"center"}} variant="h3">Wait...Who are You?</Typography>
                  <Typography style={{textAlign:"center"}} variant="h3">Your not logged in, click below to login!</Typography>
                  <Grid item container spacing={12} justify="center" style={{ paddingTop: '5vh' }}>
                    <Button variant="outlined"  justify="center" size="large" href="/" color="inherit" className={classes.button}>
                      Login
                    </Button>
                  </Grid>
                </Paper>
              </Grid>
            </Container>
          </main>
        </div>
      </Fragment>
    )
  );
}

export default Admin;