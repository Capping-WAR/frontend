import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Footer } from './components/Layouts';
import Dashboard from './components/Dashboard';
import Store from './redux/store';

const theme = createMuiTheme({
  palette: {
      type: 'dark',
      primary: {
        main: '#1c1e24',
        dark: '#131519',
      },
      secondary: {
        main: '#33bfff',
        dark: '#2385b2',
      },
      error: {
        main: '#f50057'
      }
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
  
});

// The state will reside in this component
class App extends Component {
  render(){
    // Fragment: gives you an outer wrapper for elements, 
    // wont include extra markup
    return (
      <MuiThemeProvider theme={theme}>
         <Provider store={Store}>
          <Fragment>
            <Dashboard />
            {/* <Footer /> */}
          </Fragment>
        </Provider>
      </MuiThemeProvider>
    )
  }
}
export default App;