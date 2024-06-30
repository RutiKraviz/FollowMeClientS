// authReducer.js
const initialState = {
   currentUser: { firstName: " " , Password: " " },
   isUser: false,
  };
  
const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          currentUser: action.payload,
        };
  //     case 'LOGIN_SUCCESS':
  //       return {
  //           currentUser: action.payload,
  //           isUser: true,
  //           error: action.payload,
  //         };
  //     case 'LOGIN_ERROR':
  //       return {
  //         error: action.payload,
  //     };
  //     case 'UPDATE_SUCCESS':
  //       return {
  //         currentUser: action.payload,
  //         error: action.payload,
  //       };
  //     case 'UPDATE_ERROR':
  //       return {
  //         error: action.payload,
  //   };
  default:
    return state;
 }
};

export default authReducer;
  