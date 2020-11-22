console.log('app.js is running');

// if statements
// ternary operators
// logical and operator

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
    //options: []
}

// JSX - Javascript XML
// Javascript syntax extension
// Using two elements, it has to be wrapped in a container
// Don't have to use parenthesis, but for formatting we are going to use it

const template = (
<div>
    <h1>App</h1> 
    <h2>{app.title}</h2>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length > 0 ? 'Here are your options' : 'No options available'}
</div>
);

// can make a variable and place it into different tags
// could grab the variable from this user object
const user = {
     name: 'Michael',
    age: 18,
    location: 'Valparaiso'
};

// we can create a variable for each specific thing
let userName = 'Michael';
let userAge = 27;
// var userLocation = 'Valparaiso';

// if statements, using functions
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

// making javascript dynamic
// getting user data chaining - user.name
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'No Name Available'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);


const appRoot = document.getElementById('app')


ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot)