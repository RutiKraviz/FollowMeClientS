  const initialState = {
    stations: {
      origin: 'רבי עקיבא 18 ,בני ברק, ישראל', // תחנת מקור
      destination: 'הרב קוק 16, בני ברק, ישראל', // תחנת יעד
      waypoints: [
        { location: ' ירושלים 12, בני ברק, ישראל', stopover: true }, // מערך תחנות ביניים
        { location: ' בן זכאי 50, בני ברק, ישראל', stopover: true }
      ],
      travelMode: 'DRIVING'
    },
    loading: false,
    error: null
  };

  const routeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_ROUTE_REQUEST':
        return {
          ...state,
          loading: false,
          error: null
        };
      case 'FETCH_ROUTE_SUCCESS':
        
        return {
          ...state,
          loading: false,
          stations: action.payload.stations,
          startTime: action.payload.startTime
        };
      case 'FETCH_ROUTE_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };

  export default routeReducer;
