import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// reducers //
import reviewsReducer from '../Reducers/reviewsReducer.js';
import productReducer from '../Reducers/productReducer.js';
import stylesReducer from '../Reducers/stylesReducer.js';
import styleReducer from '../Reducers/styleReducer.js';
import ratingsReducer from '../Reducers/ratingsReducer.js';
import sizeReducer from '../Reducers/styleReducer.js';
import quantityReducer from '../Reducers/quantityReducer.js';
import photoReducer from '../Reducers/photoReducer.js';
import modalReducer from '../Reducers/modalReducer.js';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    reviewsReducer,
    productReducer,
    stylesReducer,
    styleReducer,
    ratingsReducer,
    quantityReducer,
    photoReducer,
    modalReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;