/* eslint-disable no-undef */
const path = require('path');
var cas = require('connect-cas');
const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const Cookies = require('universal-cookie');

var url = require('url');


const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));
cas.configure({ 'host': 'login.marist.edu' });

// app.use(cookieParser('this should be random and secure'));
// app.use(cookieSession({
//       name: 'session',
//       secret: 'osnonsco'
//     }));


app.get('/login', cas.serviceValidate(), cas.authenticate(), (req, res) => {
  // Great, we logged in, now redirect back to the home page.
  return res.redirect('/');
});

app.get('/logout', (req, res) => {
  if (!req.session) {
    return res.redirect('/');
  }
  // Forget our own login session
  if (req.session.destroy) {
    req.session.destroy();
  } else {
    // Cookie-based sessions have no destroy()
    req.session = null;
  }
  // Send the user to the official campus-wide logout URL
  var options = cas.configure();
  options.pathname = options.paths.logout;
  return res.redirect(url.format(options));
});  

// Handles any requests
app.get('/', (req, res) => {
  console.log(req)
  console.log(req.session)
  const cookies = new Cookies(req.headers.cookie);
  if (req.session.cas && req.session.cas.user) {
    cookies.set('username', req.session.cas.user)
    // req.session.cookie.username = 
    console.log(req.session)
    res.sendFile(path.join(__dirname+'/build/index.html'));
  } else {
    return res.redirect('/login');
  }
});

const http_port = 3000;
app.listen(http_port);

console.log(`App is listening on port ${http_port}`);