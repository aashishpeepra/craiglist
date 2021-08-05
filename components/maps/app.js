import * as React from 'react';
import {useState, useCallback,useEffect} from 'react';
import styles from "./map.module.css";
import MapGL, {Marker, NavigationControl} from 'react-map-gl';
import Button from "../ui/Button/button";
import Pin from './pin';

const TOKEN = ''; // Set your mapbox token here

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

export default function MapFunction({onSubmitMap,preLocation}) {

  useEffect(()=>{
    console.log(preLocation)
    if(preLocation.latitude && preLocation.longitude){
      
      setMarker({latitude:preLocation.latitude,longitude:preLocation.longitude})
    }
  },[preLocation])
  const [viewport, setViewport] = useState({
    latitude: 47.6062,
    longitude: -122.3321,
    zoom: 10,
    bearing: 0,
    pitch: 0
  });
  const [marker, setMarker] = useState({
    latitude: 47.6062,
    longitude: -122.3321
  });
  const [events, logEvents] = useState({});

  const onMarkerDragStart = useCallback(event => {
    logEvents(_events => ({..._events, onDragStart: event.lngLat}));
  }, []);

  const onMarkerDrag = useCallback(event => {
    logEvents(_events => ({..._events, onDrag: event.lngLat}));
  }, []);

  const onMarkerDragEnd = useCallback(event => {
    logEvents(_events => ({..._events, onDragEnd: event.lngLat}));
    setMarker({
      longitude: event.lngLat[0],
      latitude: event.lngLat[1]
    });
  }, []);

  return (
    <div className={styles.Map}>
        <h1>Choose your location</h1>
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={setViewport}
        mapboxApiAccessToken={"pk.eyJ1IjoidGVtcG9yYXJ5MjMiLCJhIjoiY2tyejN5cXJkMGEwZTJwcGpqMWR1ZXo4MiJ9.VVQlQYpm4sS9Janp4DA0-w"}
      >
        <Marker
          longitude={marker.longitude}
          latitude={marker.latitude}
          offsetTop={-20}
          offsetLeft={-10}
          draggable
          onDragStart={onMarkerDragStart}
          onDrag={onMarkerDrag}
          onDragEnd={onMarkerDragEnd}
        >
          <Pin size={20} />
        </Marker>

        <div className="nav" style={navStyle}>
          <NavigationControl />
        </div>
      </MapGL>
      <div className={styles.Map_button}>
          <Button onClick={()=>onSubmitMap(marker)} text="Continue"/>
      </div>
      
      {/* <ControlPanel events={events} /> */}
    </div>
  );
}
