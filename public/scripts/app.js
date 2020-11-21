console.log('app.js is running');

// JSX - Javascript XML
// Javascript syntax extension
// var template = <p>This should be used for REACT</p>


// This is using Babel, may not need to use this
var template = /*#__PURE__*/React.createElement("h1", {
    id: "someId"
  }, "Something New");var appRoot = document.getElementById('app');

// ReactDOM takes two arguments
// takes template
ReactDOM.render(template, appRoot);