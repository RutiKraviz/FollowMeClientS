import axiosInstance from "../api";


//פונקצית כניסה למערכת אם המשתמש רשום מועבר למסך של המסלול אם לא להרשמה
const signIn = (user) => {

  return dispatch => {
    debugger
     axiosInstance.post('/Login', user).then(response => {
      console.log(response)
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
        console.log("success")
      })
      .catch((error) => {
        dispatch({ type: 'LOGIN_ERROR', payload: error.message });
        console.log("bad")
      });
  }
};

//פונקצית הרשמה
const logIn = (user) => {

  return dispatch => {
    const response = axiosInstance.post('/login', user).then(x => {
      dispatch({ type: "USER", payload: response.data })
    }).catch(error => {
      console.log(error);
    })
  }
};

//פונקצית עדכון פרטי משתמש
const Update = (user) => {

  return dispatch => {
     axiosInstance.post('/Coustemer', user).then(response => {
      console.log(response)
      dispatch({ type: 'UPDATE_SUCCESS', payload: response.data });
        console.log("success")
      })
      .catch((error) => {
        dispatch({ type: 'UPDATE_ERROR', payload: error.message });
        console.log("bad")
      });
  }
};

export { signIn, logIn, Update };
