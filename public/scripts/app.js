'use strict';

console.log('app.js is running');

var count = 0;
var addOne = function addOne() {
    count++;
    console.log('addOne', count);
    renderCounterApp();
};

var minusOne = function minusOne() {
    count--;
    console.log('minusOne');
    renderCounterApp();
};

var resetBtn = function resetBtn() {
    console.log('reset');
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: resetBtn },
            'Reset'
        )
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
