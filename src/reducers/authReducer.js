// authReducer.js
const initialState = {
  currentUser: { firstName: "", password: "" },
  isUser: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  console.log("In reducer, actiontype: ", action.type);
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        currentUser: action.payload,
        
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        currentUser: action.payload,
        isUser: true,
        error: null,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        isUser: false,
        error: action.payload,
      };
    case 'UPDATE_SUCCESS':
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case 'UPDATE_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
