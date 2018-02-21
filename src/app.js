console.log('app.js is running');

// JSX - Javascript XML
var app = {
  title: 'Indecision App',
  subtitle: 'Put you life in the hands of a computer'
}
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: 'Amen',
  age: 42,
  location: 'District of Columbia'
};

function getLocation(location){
  if(location){
    return <p>Location: {location}</p>;
  }else{
    return undefined;
  }  
}

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>    
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo,  appRoot);