import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reviewsReducer from '../Reducers/reviewsReducer.js';
import productReducer from '../Reducers/productReducer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    reviewsReducer,
    productReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;