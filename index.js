/* eslint-disable no-undef */
const path = require('path');
var cas = require('connect-cas');
const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
var url = require('url');


cas.configure({ 'host': 'login.marist.edu' });
const app = express();


app.use(cookieParser('this should be random and secure'));
app.use(cookieSession({
      name: 'NSESSIONID',
      secret: 'Hello I am a long long long secret',
    }));



// Handles any requests
app.get('/', (req, res) => {
    if (req.session.cas && req.session.cas.user) {
      return res.sendFile(path.join(__dirname+'/build/index.html'));
    } else {
      return res.redirect('/login');
    }
});

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


const http_port = 3000;
app.listen(http_port);

console.log(`App is listening on port ${http_port}`);