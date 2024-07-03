import React, {useState, useEffect} from 'react';
import {GoogleMap, DirectionsRenderer} from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '600px',
};

const center = {
  lat: 41.648823,
  lng: -0.889085,
};

const GoogleMaps = () => {
  const [response, setResponse] = useState(null);
  const [durations, setDurations] = useState([]);

  const fetchRoute = () => {
    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: 'רבי עקיבא 18,בני ברק, ישראל',
        destination: ' רבן יוחנן בן זכאי 52, בני ברק, ישראל',
        waypoints: [
          {location: 'הרב קוק 16, בני ברק, ישראל', stopover: true},
          {location: ' ירושלים 53, בני ברק, ישראל', stopover: true},
        ],
        travelMode: 'DRIVING',
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setResponse(result);
          if (result.routes && result.routes.length > 0) {
            const route = result.routes[0];
            const newDurations = route.legs.map((leg) => leg.duration.text);
            setDurations(newDurations);
          }
        } else {
          console.error(`Directions service failed due to ${status}`);
        }
      }
    );
  };

  useEffect(() => {
    fetchRoute();
  }, []);

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={7}>
      {response && <DirectionsRenderer options={{directions: response}} />}

      {durations.length > 0 && (
        <div style={{position: 'absolute', top: 10, left: 10, background: 'white', padding: 10, zIndex: 1000}}>
          <h3>Durations Between Points:</h3>
          <ul>
            {durations.map((duration, index) => (
              <li key={index}>{`station ${index + 1}: ${duration}`} </li>
            ))}
          </ul>
        </div>
      )}
    </GoogleMap>
  );
};

export default GoogleMaps;
