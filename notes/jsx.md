SX - Javascript XML
Javascript syntax extension
var template = React.createElement(
    "p",
    null,
    "This should be used for REACT"
);

This is using Babel, may not need to use this
var template = /*#__PURE__*/React.createElement("h1", {
    id: "someId"
}, "Something New");var appRoot = document.getElementById('app');

ReactDOM takes two arguments
takes template
ReactDOM.render(template, appRoot)