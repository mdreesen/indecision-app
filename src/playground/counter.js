console.log('app.js is running');

let count = 0
const addOne = () => {
    count++;
    console.log('addOne', count)
    renderCounterApp();
}

const minusOne = () => {
    count--;
    console.log('minusOne')
    renderCounterApp();
}

const resetBtn = () => {
    console.log('reset')
    count = 0;
    renderCounterApp();
}

const appRoot = document.getElementById('app')

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={resetBtn}>Reset</button>
        </div>
        );

    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();
