// src/reducers/stationReducer.js
const initialState = {
    stations: [],
    loading: false,
    error: null,
  };
  
  const stationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_STATIONS_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_STATIONS_SUCCESS':
        return { ...state, loading: false, stations: action.payload };
      case 'FETCH_STATIONS_ERROR':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default stationReducer;