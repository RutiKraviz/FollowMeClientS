// src/api/index.js
import axios from 'axios';
const API_BASE_URL= process.env.REACT_APP_SERVER_API //קישור לשרת


const axiosInstance = axios.create({
  baseURL: API_BASE_URL, // Correct base URL
  timeout: 1000 * 5,
  headers: { 'Content-Type': 'application/json' }
});

export default axiosInstance;