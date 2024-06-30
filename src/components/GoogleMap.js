import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '600px'
};

const center = {
  lat: 41.648823, // Latitude of Zaragoza, Spain
  lng: -0.889085  // Longitude of Zaragoza, Spain
};

const GoogleMaps = () => {
  const [response, setResponse] = useState(null);
  const [durations, setDurations] = useState([]);

  const fetchRoute = () => {
    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: 'רבי עקיבא 18,בני ברק, ישראל', // Example Hebrew address in Israel
        destination:' רבן יוחנן בן זכאי 52, בני ברק, ישראל' , // Example Hebrew address in Israel
        waypoints: [
          { location: 'הרב קוק 16, בני ברק, ישראל', stopover: true }, // Example Hebrew address in Israel
          { location: ' ירושלים 53, בני ברק, ישראל', stopover: true } // Example Hebrew address in Israel
        ],
        travelMode: 'DRIVING'
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setResponse(result);
          // Extract duration and set it to state
          if (result.routes && result.routes.length > 0) {
            const route = result.routes[0];
            const newDurations = route.legs.map(leg => leg.duration.text);
            setDurations(newDurations);
          }
        } else {
          console.error(`Directions service failed due to ${status}`);
        }
      }
    );
  };

  useEffect(() => {
    // Ensure the google object is available before using DirectionsService
    if (window.google) {
      fetchRoute();
    } else {
      console.error('Google Maps API not loaded.');
    }
  }, []);

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      libraries={['places']}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={7}
      >
        {/* Directions Renderer */}
        {response && (
          <DirectionsRenderer
            options={{ directions: response ,}}

          />
        )}

        {/* Display durations between points */}
        {durations.length > 0 && (
          <div style={{ position: 'absolute', top: 10, left: 10, background: 'white', padding: 10, zIndex: 1000 }}>
            <h3>Durations Between Points:</h3>
            <ul>
              {durations.map((duration, index) => (
                <li key={index}>{`statin ${index + 1}: ${duration}`} </li>
              ))}
            </ul>
          </div>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMaps;




// import React from 'react';
// import GoogleMapReact from 'google-map-react';

// const arr=[{lat:32.1,lng:34.84,text:'כינוי'}]

// const AnyReactComponent = ({ text }) => <h1> {text}</h1>;

// export default function GoogleMap() {
//   const defaultProps = {
//     center: {
//       lat:32.089731,
//       lng:34.832381
//     },
//     zoom: 16 // Zoom level
//   };

//   return (
//     <div style={{ height: '400px', width: '50%'}}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: 'AIzaSyD0y-2f3prjfXVnYibVVwWuq4ww2Z7azh8' }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent
//           lat={32.189731}
//           lng={34.832381}
//           text="1 City"
//         />
//          <AnyReactComponent
//           lat={32.089731}
//           lng={34.831381}
//           text="2 City"
//         />
//          <AnyReactComponent
//           lat={32.089731}
//           lng={34.832381}
//           text="3 City"
//         />
//       </GoogleMapReact> 
//     </div>
//   );
// };


