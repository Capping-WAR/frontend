import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Store from '../../redux/store';
import SignUp from '../SignUp';
import AI from '../AI';
import Admin from '../Admin';
import Dashboard from '../Dashboard';
import About from '../../containers/About';
import FAQ from '../../containers/FAQ';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {UserAgentProvider} from '@quentin-sommer/react-useragent'

// Beware: Any changes made to the Theme here will cascade throughout the site!
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
    <UserAgentProvider ua={window.navigator.userAgent}>
        <MuiThemeProvider theme={theme}>
        <Provider store={Store}>
            <Router>
            <Switch>
                {/* Each route is defined with Route */}
                <Route path="/signup" component={SignUp}/>
                <Route path="/admin" component={Admin}/>
                <Route path="/about" component={About}/>
                <Route path="/ai" component={AI}/>
                <Route path="/faq" component={FAQ}/>
                <Route path="/" component={Dashboard}/>
            </Switch>
            </Router>
        </Provider>
        </MuiThemeProvider>
    </UserAgentProvider>
  )
}

export default App;

