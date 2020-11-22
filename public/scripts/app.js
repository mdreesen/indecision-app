'use strict';

console.log('app is running');

var visibility = false;

var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    render();
};

var render = function render() {
    var jsx = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Toggle Visibility'
        ),
        React.createElement(
            'div',
            null,
            React.createElement(
                'button',
                { onClick: toggleVisibility },
                visibility ? 'Hide details' : 'Show Details'
            ),
            visibility && React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'Hey! These are some details you can now see!'
                )
            )
        )
    );
    ReactDOM.render(jsx, document.getElementById('app'));
};

render();
