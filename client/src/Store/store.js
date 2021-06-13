import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// reducers //
import reviewsReducer from '../Reducers/reviewsReducer.js';
import productReducer from '../Reducers/productReducer.js';
import stylesReducer from '../Reducers/stylesReducer.js';
import styleReducer from '../Reducers/styleReducer.js';
import sizeReducer from '../Reducers/styleReducer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    reviewsReducer,
    productReducer,
    stylesReducer,
    styleReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;