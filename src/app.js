import './styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const root = document.getElementById('app-container');
ReactDOM.render(<App />, root);
// ReactDOM.render(React.createElement('p', null, 'Hello world'), root);
