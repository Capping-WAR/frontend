import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Footer } from '../../components/Layouts';
import Dashboard from '../../containers/Dashboard';
import SignUp from '../SignUp';
import Store from '../../redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const theme = createMuiTheme({
  spacing: 4,
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
  },
});

// The state will reside in this component
const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={Store}>
        <Router>
          <Switch>
            {/* Each route is defined with Route */}
            <Route path="/signup" component={SignUp}/>
            <Route path="/" component={Dashboard}/>
          </Switch>
        </Router>
      </Provider>
    </MuiThemeProvider>
  )
}

export default App;

