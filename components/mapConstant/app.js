import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import styles from "./pointMap.module.css";
export default function Map({ lat, long }) {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    // The latitude and longitude of the center of London
    latitude: lat,
    longitude: long,
    zoom: 13,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxApiAccessToken={
        "pk.eyJ1IjoidGVtcG9yYXJ5MjMiLCJhIjoiY2tyejN5cXJkMGEwZTJwcGpqMWR1ZXo4MiJ9.VVQlQYpm4sS9Janp4DA0-w"
      }
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <Marker latitude={lat} longitude={long}>
        <img
          src={__dirname + "assets/pin.svg"}
          alt="geolocation pin"
          className={styles.mappoint_img}
        />
      </Marker>
    </ReactMapGL>
  );
}
