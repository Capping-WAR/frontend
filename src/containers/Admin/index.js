import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Store from '../../redux/store';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Statistics from '../../components/Statistics';
import { SideNav } from '../../components/Layouts';
import { useDispatch, useSelector } from 'react-redux';
import { theme } from '../App';

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
}));

const Admin = () => {
  const classes = useStyles();
  const state = useSelector(state => state);

  return (
      <MuiThemeProvider theme={theme}>
        <Provider store={Store}>
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
      </Provider>
    </MuiThemeProvider> 
  );
}

export default Admin;