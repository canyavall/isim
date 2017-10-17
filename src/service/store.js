//Main
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux'; // check we also require `applyMiddleware`
import thunk from 'redux-thunk'; // require the Middleware

//Reducers
import currentuser from './reducers/currentuser';
import clients from './reducers/clients';
import requests from  './reducers/requests';

const combinedRed = combineReducers({
  currentuser,
  clients,
  requests
});

const store = createStore(combinedRed,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

export default store;
