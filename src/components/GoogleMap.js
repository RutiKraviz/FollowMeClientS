import React, { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, DirectionsRenderer } from '@react-google-maps/api';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoute } from '../services/routeService';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './GoogleMap.css';

dayjs.extend(customParseFormat);

const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 32.080880, // Latitude of Bnei Brak, Israel
  lng: 34.835226  // Longitude of Bnei Brak, Israel
};

const libraries = ['places'];

const GoogleMaps = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [response, setResponse] = useState(null);
  const [timeToUserStation, setTimeToUserStation] = useState('');
  const [totalDistance, setTotalDistance] = useState(null);
  const [durations, setDurations] = useState([]);
  const [currentTime, setCurrentTime] = useState(dayjs().format('HH:mm'));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const stations = useSelector(state => state.route.stations);
  const loading = useSelector(state => state.route.loading);
  const error = useSelector(state => state.route.error);
  const user = useSelector(state => state.auth.currentUser);
  const startTime = useSelector(state => state.route.startTime); // Assuming startTime is in "HH:mm" or "hh:mm A" format

  useEffect(() => {
    try {
      dispatch(fetchRoute(user));
    } catch (err) {
      console.error(err.message);
      navigate('/Login');
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (stations.length > 0 && window.google && window.google.maps) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: stations[0].fullAddress,
          destination: stations[stations.length - 1].fullAddress,
          waypoints: stations.slice(1, -1).map(station => ({ location: station.fullAddress, stopover: true })),
          travelMode: 'DRIVING'
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setResponse(result);
            if (result.routes && result.routes.length > 0) {
              const route = result.routes[0];

              // Calculate time to the user's station
              const userStationIndex = stations.findIndex(station => station.id === user.stationId);
              if (userStationIndex >= 0) {
                const timeToUserStationInSeconds = route.legs.slice(0, userStationIndex + 1).reduce((sum, leg) => sum + leg.duration.value, 0);

                // Parse start time
                const startDayjs = dayjs(startTime, "HH:mm");

                // Check if startDayjs is valid
                if (!startDayjs.isValid()) {
                  console.error("Invalid start time format");
                  return;
                }

                const arrivalTime = startDayjs.add(timeToUserStationInSeconds, 'second');

                // Calculate remaining time from current time to arrival time
                const currentDayjs = dayjs();

                // Check if arrivalTime is valid
                if (!arrivalTime.isValid()) {
                  console.error("Invalid arrival time");
                  return;
                }

                const remainingTimeInSeconds = arrivalTime.diff(currentDayjs, 'second');

                if (remainingTimeInSeconds >= 0) {
                  setTimeToUserStation({
                    hours: Math.floor(remainingTimeInSeconds / 3600),
                    minutes: Math.floor((remainingTimeInSeconds % 3600) / 60),
                    seconds: remainingTimeInSeconds % 60
                  });
                } else {
                  console.error("Arrival time is in the past");
                  setTimeToUserStation({
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                  });
                }
              }

              // Calculate total distance
              const totalDistance = route.legs.reduce((sum, leg) => sum + leg.distance.value, 0);
              setTotalDistance(totalDistance / 1000); // Convert to kilometers
              const newDurations = route.legs.map((leg, index) => ({
                duration: leg.duration.text,
                address: stations[index].fullAddress
              }));

              setDurations(newDurations);
            }
          } else {
            console.error(`Directions service failed due to ${status}`);
          }
        }
      );
    }
  }, [stations, user.stationId]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs().format('HH:mm'));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
      {response && <DirectionsRenderer options={{ directions: response }} />}

      {loading && (
        <Box className="info-box" sx={{ top: 20, left: '50%', transform: 'translateX(-50%)' }}>
          <Typography variant="h6">טוען...</Typography>
        </Box>
      )}

      {!loading && !error && (
        <>
          <Box
            className="info-box"
            sx={{
              top: 70,
              right: 20,
            }}
            dir='rtl'
          >
            <Typography variant="h6" gutterBottom>שלום, {user.firstName}</Typography>
            <Typography variant="body1" gutterBottom>זמן נוכחי: {currentTime}</Typography>
            {user.roleId == 2 &&
            <Typography variant="body1">
              זמן עד שהאוטובוס יגיע לתחנה שלך: {timeToUserStation.hours} שעות, {timeToUserStation.minutes} דקות, {timeToUserStation.seconds} שניות
            </Typography>}
          </Box>
          <Box
            className="info-box"
            sx={{
              top: 270, // Positioning right below the previous info box
              right: 20,
            }}
            dir='rtl'
          >
            <Typography variant="h6" gutterBottom>רשימת תחנות</Typography>
            {stations.length &&
            <ul>
              {stations.map((station, index) => (
                <li key={index}>{station.fullAddress}</li>
              ))}
            </ul>}
          </Box>
        </>
      )}

      {error && (
        <Box className="info-box" sx={{ top: 20, left: '50%', transform: 'translateX(-50%)' }}>
          <Typography variant="h6">שגיאה: {error}</Typography>
        </Box>
      )}
    </GoogleMap>
  );
};

export default GoogleMaps;
