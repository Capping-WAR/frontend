import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import { SideNav } from '../../components/Layouts';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import LoginData from '../../components/admin';
import TotalUsers from '../../components/admin';
import UsersByDevice from '../../components/admin';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  }
}));

const Admin = () => {
  const classes = useStyles();

  return (
    <Fragment>
        <div className={classes.root}>
            <SideNav />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={4} >
                        <Grid item lg={4} md={6} xl={3} xs={12} spacing={4}>
                            <TotalUsers />
                            <div style={{padding:"10px"}}></div>
                            {/* <UsersByDevice /> */}
                        </Grid>
                        <Grid item lg={8} md={12} xl={9} xs={12}>
                            {/* <LoginData /> */}
                        </Grid>
                    </Grid>
                </Container> 
            </main>
        </div>
    </Fragment>
  );
};

export default Admin;