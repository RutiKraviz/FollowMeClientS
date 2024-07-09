import axiosInstance from "../api";

export const fetchRoute = (user) => {
  let fetch_url = ""
  if(user.roleId == 1){
    console.log("driver_rote_fetch");

    fetch_url = `/Route/${user.routeId}`
  }
  else if(user.roleId == 2){
    console.log("customer_rote_fetch");
    fetch_url = `Station/Route/${user.stationId}`
  }else{
    throw new Error("no user login")
  }
  return async (dispatch) => {
    dispatch({ type: 'FETCH_ROUTE_REQUEST' });
    try {
      const response = await axiosInstance.get(fetch_url);
      console.log("after routestation fetch: " , response);
      dispatch({ type: 'FETCH_ROUTE_SUCCESS', payload: response.data });

    } catch (error) {
      dispatch({ type: 'FETCH_ROUTE_FAILURE', payload: error.message });
    }
  };
};
