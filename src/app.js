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

var user = {
  name: 'Amen',
  age: 42,
  Location: 'District of Columbia'
}

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.Location}</p>
  </div>
);


var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo,  appRoot);
//ReactDOM.render(template,  appRoot);