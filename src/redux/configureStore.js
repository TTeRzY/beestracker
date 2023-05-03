import { compose, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const middleware = [...getDefaultMiddleware(), thunk, logger];

const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [composedEnhancers],
});

export default store;

