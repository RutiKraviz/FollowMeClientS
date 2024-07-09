// src/services/stationService.js
import axiosInstance from "../api";

export const fetchStations = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_STATIONS_REQUEST' });
    return axiosInstance.get('/Stations')
      .then(response => {
        dispatch({ type: 'FETCH_STATIONS_SUCCESS', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_STATIONS_ERROR', payload: error.message });
      });
  };
};