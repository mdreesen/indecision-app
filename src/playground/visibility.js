class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility() {
        this.setState((preState) => {
            return {
                visibility: !preState.visibility
            };
        });
    }
    render() {
        return (
                <div>
                    <h1>Toggle Visibility</h1>
                    <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details': 'Show Details'}
                    </button>
                        {this.state.visibility && (
                            <div>
                                <p>Hey! These are some details you can now see!</p>
                            </div>
                        )}
                </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

/*
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
*/