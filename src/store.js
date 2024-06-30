// // store.js
// import { createStore } from 'redux';
// import rootReducer from './reducers/rootReducer'; // Import your root reducer

// const store = createStore(rootReducer);

// export default store;

import { thunk } from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(thunk),
})

export default store ;
