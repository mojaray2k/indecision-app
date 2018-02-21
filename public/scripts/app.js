'use strict';

console.log('app.js is running');

// JSX - Javascript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);
var appRoot = document.getElementById('app');

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Amen Ra'
  ),
  React.createElement(
    'p',
    null,
    'Age: 41'
  ),
  React.createElement(
    'p',
    null,
    'Location: Washington, DC'
  )
);
ReactDOM.render(templateTwo, appRoot);
//ReactDOM.render(template,  appRoot);
