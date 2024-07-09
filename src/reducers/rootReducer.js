// rootReducer.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import routeReducer from './routeReducer';
import stationReducer from './stationReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  route: routeReducer,
  stations: stationReducer,

  // Add other reducers here
  
});

export default rootReducer;
