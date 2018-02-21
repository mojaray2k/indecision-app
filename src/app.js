console.log('app.js is running');

// JSX - Javascript XML
var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);
var appRoot = document.getElementById('app');

var templateTwo = (
  <div>
    <h1>Amen Ra</h1>
    <p>Age: 41</p>
    <p>Location: Washington, DC</p>
  </div>
);
ReactDOM.render(templateTwo,  appRoot);
//ReactDOM.render(template,  appRoot);