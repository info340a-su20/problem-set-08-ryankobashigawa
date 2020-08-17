import React from 'react';
import ReactDOM from 'react-dom';

//render the App component here!
import { App } from './App.js';
import Senators from './senators.json';

ReactDOM.render(<App senators={Senators}/>, document.getElementById('root'));