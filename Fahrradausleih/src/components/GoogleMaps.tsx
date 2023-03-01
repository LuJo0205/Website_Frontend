import React from "react";
import GoogleMapReact from 'google-map-react';



export default function GoogleMaps(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBsLFLhelzIu3qPkBMg56bNCEte41QBqjw" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      
      </GoogleMapReact>
    </div>
  );
}