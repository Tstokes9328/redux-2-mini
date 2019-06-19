// import createStore from redux
import { createStore, applyMiddleware, combineReducers } from 'redux';
// import redux promise middleware
import promiseMiddleware from 'redux-promise-middleware';
// import hackers news reducer
import hackerNewsReducer from './hackerNewsReducer';
// import medium reducer
import mediumReducer from './mediumReducer';

// create the rooter reducer to house mutliple reducers
const rootReducer = combineReducers({
    hackerNewsReducer,
    mediumReducer
});

// export the invocation of createStore passing in our reducer
export default createStore(rootReducer, applyMiddleware(promiseMiddleware));