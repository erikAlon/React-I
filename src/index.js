import React from 'react'; // every React file has this import
import { render } from 'react-dom';
import App from './App'; // my App component

const styles = {
    textAlign: 'center',
    Margin: 50 + 'px' + ' auto',
};

const randoFunc = () => (
    <div style={styles}>
        <App />
        <h1>Hello world from index.js </h1>
    </div>
);

render(<App />, document.getElementById('root'));
