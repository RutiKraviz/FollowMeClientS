import axiosInstance from "../api";

const signIn = (user) => {
  const userToReq = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    passWord: user.password, // Correct key name
    roleId: 2,
    email: user.email,
    stationId: user.stationId
  }
  console.log(JSON.stringify(userToReq));
  return (dispatch) => {
    axiosInstance.post('/Customer', {
      body: JSON.stringify(userToReq)
    })
    .then(response => {
      console.log(response)
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
      console.log("success")
    })
    .catch((error) => {
      dispatch({ type: 'LOGIN_ERROR', payload: error.message });
      console.log("bad", error);
      throw error; // Rethrow the error to be caught in the component
    });
  };
};

const logIn = (user) => {
  return (dispatch) => {
    return axiosInstance.post('/User/Login', user)
      .then(response => {
        console.log("after login: ", response);
        dispatch({ type: "SET_USER", payload: response.data });
        console.log(response.status == 200);
        if (response.status == 200) {
          dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
        } else {
          throw new Error("User not authenticated");
        }
      })
      .catch(error => {
        console.error("Login failed with error:", error);
        dispatch({ type: 'LOGIN_ERROR', payload: error.message });
        throw error;
      });
  };
};

const Update = (user) => {
  return (dispatch) => {
    axiosInstance.post('/Customer', user)
      .then(response => {
        console.log("response", response)
        dispatch({ type: 'UPDATE_SUCCESS', payload: response.data });
        console.log("success")
      })
      .catch((error) => {
        dispatch({ type: 'UPDATE_ERROR', payload: error.message });
        console.log("bad");
      });
  };
};

export { signIn, logIn, Update };
