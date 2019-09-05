import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; // add
import RaisedButton from 'material-ui/RaisedButton'; // add

import Container from '@material-ui/core/Container';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (

      <MuiThemeProvider>

      <div className="App">
        <Container maxWidth="sm">
          <h2>Welcome to React</h2>
        </Container>
        {/* <div className="App-header">
         
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <RaisedButton label="Material UI" /> */}

      </div>

      </MuiThemeProvider>

    );
  }
}

export default App;