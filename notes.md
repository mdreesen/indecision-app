Using babel:
yarn init
yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2 --watch


console.log('app.js is running');

JSX - Javascript XML
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