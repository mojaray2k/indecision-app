console.log('app.js is running');

// JSX - Javascript XML
var template = <h1>Indecision App</h1><p>This is some info</p>;
var appRoot = document.getElementById('app');

ReactDOM.render(template,  appRoot);