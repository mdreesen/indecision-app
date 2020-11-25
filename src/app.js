// React components require one method to be defined, render

class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision'
        const subTitle = 'Put your life in the hands of a computer.'
        const options = ['thing one', 'thing two', 'thing four'];

        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action />
                <Options options={options}/>
                <Option />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handlePick')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What Should I do</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        console.log(this.props.options)
        //alert('Remove All Btn was clicked')
    }

    render() {
        return (
           <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>

               {
                   this.props.options.map((option) => <option key={option} optionText={option}></option>)
               }
           </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                option: {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if (option) {
            alert(option)
        }
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));