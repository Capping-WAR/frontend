import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Store from '../../redux/store';
import SignUp from '../SignUp';
import AI from '../AI';
import Dashboard from '../Dashboard';
import About from '../../containers/About';
import FAQ from '../../containers/FAQ';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const theme = createMuiTheme({
  spacing: 4,
  palette: {
      type: 'dark',
      primary: {
        main: '#1c1e24',
        dark: '#131519',
      },
      secondary: {
        main: '#438397',
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
            <Route path="/about" component={About}/>
            <Route path="/ai" component={AI}/>
            <Route path="/faq" component={FAQ}/>
            <Route path="/" component={Dashboard}/>
          </Switch>
        </Router>
      </Provider>
    </MuiThemeProvider>
  )
}

export default App;

