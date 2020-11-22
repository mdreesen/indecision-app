console.log('app is running');

let visibility = false

const toggleVisibility = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const jsx = (
        <div>
            <h1>Toggle Visibility</h1>
            <div>
                <button onClick={toggleVisibility}>{
                    visibility ? 'Hide details': 'Show Details'
                }</button>
                {visibility && (
                    <div>
                        <p>Hey! These are some details you can now see!</p>
                    </div>
                )}
            </div>
        </div>
    )
    ReactDOM.render(jsx, document.getElementById('app'));
}

render();