import { useEffect, useState } from "react";
import { GoogleMap, Marker, DirectionsService, DirectionsRenderer, LoadScript } from "@react-google-maps/api";

const API_KEY = import.meta.env.VITE_API_KEY;

const Map = () => {
  const [map, setMap] = useState(null);
  const [userPin, setUserPin] = useState(null);
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    const fetchDirections = async () => {
      const response = await fetch("https://api.example.com/getStoreLocation");
      const data = await response.json();
      const storeLocation = { lat: data.latitude, lng: data.longitude };
      setUserPin(storeLocation);
      calculateDirections(storeLocation);
    };

    fetchDirections();
  }, []);

  const handleMapLoad = (map) => {
    setMap(map);
  };

  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    const pinLocation = { lat, lng };
    setUserPin(pinLocation);
    calculateDirections(pinLocation);
  };

  const calculateDirections = (destination) => {
    if (!map) return;
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: { lat: 50.41505862743739, lng: 30.539021291195105 }, // shop's coordinates
        destination, // user pin's coordinates
        travelMode: "DRIVING",
      },
      (result, status) => {
        if (status === "OK") {
          setDirections(result);
        } else {
          console.error("Directions request failed. Status:", status);
        }
      }
    );
  };

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        onLoad={handleMapLoad}
        onClick={handleMapClick}
        mapContainerStyle={{ width: "100%", height: "400px" }}
        center={userPin || { lat: 50.41505862743739, lng: 30.539021291195105 }} // initial map center coordinates 
        zoom={10}
      >
        {userPin && <Marker position={userPin} />}
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
