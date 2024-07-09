import { LoadScript } from "@react-google-maps/api";

const LoadScriptWrapper = ({ children }) => (
    <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        libraries={['places']}
    >
        {children}
    </LoadScript>
);

export default LoadScriptWrapper;