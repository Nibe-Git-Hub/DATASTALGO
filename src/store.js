import { combineReducers, configureStore} from '@reduxjs/toolkit';
import {productListReducer} from './reducers/productReducers.js';

const reducer = combineReducers({
    productList: productListReducer,
});

const initialState = {};

const store = configureStore({
    reducer,
    initialState,
    preloadedState: initialState,
    devTools: true,
});

export default store;