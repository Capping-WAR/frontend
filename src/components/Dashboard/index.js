import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Reviewer from '../Reviewer';
import { SideNav } from '../Layouts';



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

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <SideNav />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Reviewer />
        </Container>
      </main>
    </div>
  );
}

export default Dashboard;