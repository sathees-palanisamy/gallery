import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Route } from "react-router-dom"; 
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
        <Router>
            <Route component={App} />
        </Router>, 
    document.getElementById('root'));


serviceWorker.unregister();
