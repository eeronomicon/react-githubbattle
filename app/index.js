var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js')

// Get your keys by signing up for Sentry at sentry.reactjsprogram.com
var sentryKey = 'af7d498b54164835bb72a72acc5694e6'
var sentryApp = 'react-githubbattle'
var sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp

var _APP_INFO = {
  name: 'Github Battle',
  branch: 'video4',
  version: '1.0'
}

Raven.config(sentryURL, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch,
  }
}).install()

ReactDOM.render(routes, document.getElementById('app'));
