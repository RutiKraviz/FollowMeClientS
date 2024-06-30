const initialState = {
    stations: {
      origin: 'רבי עקיבא 18,בני ברק, ישראל', // תחמת מקור
      destination: 'הרב קוק 16, בני ברק, ישראל', // תחנת יעד
      waypoints: [
        { location: ' ירושלים 12, בני ברק, ישראל', stopover: true }, // מערך תחנות ביניים
        { location: ' בן זכאי 50, בני ברק, ישראל', stopover: true } 
      ],
      travelMode: 'DRIVING'
    },
  };
  
  const routeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_STATIONS':
        return {
          ...state,
          stations : action.payload
        };
      default:
        return state;
    }
  };
  
  export default routeReducer;
  