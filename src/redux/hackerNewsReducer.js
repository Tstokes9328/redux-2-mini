// import axios to maken HTTP requests
import axios from 'axios';

// create initial state
const initialState = {
    loading: false,
    articles: []
};

// action types
const REQUEST_ARTICLES = 'REQUEST_ARTICLES';

// action creators
export function requestArticles(){
    // make an http req to get hackers articles
    const articles = axios.get('/api/hacker-news').then(response => response.data);

    //  create the action object
    const action = {
        type: REQUEST_ARTICLES,
        payload: articles
    };

    // return the action object
    return action;
};



// create reducer function
export default function hackerNewsReducer(state = initialState, action){
    switch(action.type){
        case REQUEST_ARTICLES + '_PENDING':
            return {...state, loading: true};
        case REQUEST_ARTICLES + '_FULFILLED':
            return {loading: false, articles: action.payload}
        case REQUEST_ARTICLES + '_REJECTED':
            return {...state, loading: false};
        default:
            return state;
    }
}