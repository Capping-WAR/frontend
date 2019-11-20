import React, { useContext, Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Store from '../../redux/store';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Reviewer from '../../components/Reviewer';
import { SideNav } from '../../components/Layouts';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { theme } from '../App';
import { UAContext, UserAgent } from '@quentin-sommer/react-useragent'
import {  updateLoginStats, updateUserStats } from '../../redux/actions/statisticsActions';

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

const UsingContextHook = () => {
    const { uaResults, parser } = useContext(UAContext)
    let user_info = {
        os: "",
        platform: ""
    }

    const os = parser.getOS().name.toLowerCase();
    if (os.includes('mac')) {
        user_info.os = 'Mac';
    } else if (os.includes('windows')) {
        user_info.os = 'Windows';
    } else {
        user_info.os = 'Other';
    }

    const device = parser.getDevice().type
    if (device === 'mobile') {
        user_info.platform = 'isMobile';
    } else {
        // it will be undefined...maybe desktop so just use else
        user_info.platform = 'isDesktop';
    }

    return user_info;
}

const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const [firstLoad, setFirstLoad] = useState(true);
  const { reviewer, isFetchingReviewer } = state.reviewerReducer;

  if (reviewer === undefined && !isFetchingReviewer) {
    return <Redirect to={{ pathname: '/signup' }} />;
  }

  if (firstLoad){
    setFirstLoad(false);
    dispatch(updateLoginStats());
    dispatch(updateUserStats(UsingContextHook()));
  } 
  
  
  return (
    <Fragment>
        <div className={classes.root}>
            <SideNav />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Reviewer />
                </Container>
            </main>
        </div>
    </Fragment>
  );
}

export default Dashboard;