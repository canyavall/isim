import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import {BrowserRouter as  Router, Route, Switch  } from 'react-router-dom';
import store from './service/store';

//Routes
import Home from './routes/Home';

//Main code
ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <Switch>
                <Route exact path="/" component={ Home } />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);


registerServiceWorker();
