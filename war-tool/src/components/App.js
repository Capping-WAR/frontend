import React, { Component, Fragment } from 'react';
import {createMuiTheme} from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Header, Footer} from './Layouts';
import Reviewer from './Reviewer'
import Backdrop from '@material-ui/core/Backdrop';
import { Paper } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
      type: 'dark',
      primary: {
        main: '#1c1e24',
        dark: '#002884',
      },
      secondary: {
          main: '#33bfff',
          dark: '#1c1e24',
      },
      // primary: {
      //   light: '#757ce8',
      //   main: '#3f50b5',
      //   dark: '#002884',
      //   contrastText: '#fff',
      // },
      // secondary: {
      //   light: '#ff7961',
      //   main: '#f44336',
      //   dark: '#ba000d',
      //   contrastText: '#000',
      // },
  },
  bg: {
    backgroundColor: '#1c1e24',
    color: '#fffff'
  }
});

// The state will reside in this component
class App extends Component {
  render(){
    // Fragment: gives you an outer wrapper for elements, 
    // wont include extra markup
    return <MuiThemeProvider theme={theme}>
      <Fragment>
        <Header />
        <Reviewer />
        <Footer />
      </Fragment>
    </MuiThemeProvider>
    
  }
}
export default App;



// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; // add
// import RaisedButton from 'material-ui/RaisedButton'; // add

// import { AppBar } from 'material-ui';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import { MenuIcon } from 'material-ui';

// import Container from '@material-ui/core/Container';
// import logo from './logo.svg';
// import './App.css';


// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// buttonAppBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }


// class App extends Component {

//   render() {
//     return (

//       <MuiThemeProvider>

//       <div className="App">
//         <Container maxWidth="sm">
//           <h2>Welcome to React</h2>
//         </Container>
//         {/* <div className="App-header">
         
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>

//         <RaisedButton label="Material UI" /> */}

//       </div>

//       </MuiThemeProvider>

//     );
//   }
// }

