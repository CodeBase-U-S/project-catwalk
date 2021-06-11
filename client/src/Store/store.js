import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reviewsReducer from '../Reducers/reviewsReducer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    reviewsReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;