/*
const otherFunction = function() {
    return x * x
};

function square(x) {
   return x * x
};

// using these functions, don't need returns
const squareArrow = (x) => {
    return x * x;
};
*/

// using these functions, don't need returns
// const squareArrow = (x) => x * x;

// console.log(squareArrow(9));
// console.log(squareArrow(4));

// challenge, arrow functions
// get firstName
// create regular arrow function
// create arrow functions using the short syntax

//const firstName = 'Michael Dreesen';

// const fullName = 'Michael Dreesen';
//let firstName;

// get firstName function
/*
const getFirstName = (fullName) => {
    return fullName.split(' ')[0]
};
*/
// get firstName function
const getFirstName = (fullName) => fullName.split(' ')[0]

console.log(getFirstName('Michael Dreesen'))