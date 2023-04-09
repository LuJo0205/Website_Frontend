import React, { useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import osm from "../components/osm-providers.js";
import L from "leaflet";

import "leaflet/dist/leaflet.css"
import './styles/GoogleMaps.scss'
import { useQuery } from "react-query";

const markerIcon = new L.Icon({
  iconUrl:("https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png"),
  iconSize: [30, 45],
  iconAnchor: [17, 45],
  popupAnchor: [0,-46],

})

const GoogleMaps = () => {
    
    const ZOOM_LEVEL =15;

    const api = "http://127.0.0.1:8080/standort"       
    const standortData = useQuery("Standorte", () =>
        fetch(api ).then((res) => res.json())
    );        
    

    return (
        <>

          <div className="col">
            <MapContainer
              center={[49.48419232829004, 8.475619964067945]}
                zoom={ZOOM_LEVEL}               
            >
            <TileLayer url={osm.maptiler.url}/>
            {standortData?.data?.map(
              (s:{name:string, latitude:number, longitude:number})=>(
                <>
                    <Marker 
                      position={[s.latitude , s.longitude]} 
                      icon={markerIcon}
                    >
                      <Popup>
                        <b>{s.name}</b>
                      </Popup>
                    </Marker>  
                </>
              )
            )}
            </MapContainer>
          </div>                 
        </>
    );
};

export default GoogleMaps;