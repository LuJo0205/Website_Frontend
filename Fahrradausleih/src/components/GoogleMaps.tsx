import React, { useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import osm from "../components/osm-providers.js";
import L from "leaflet";

import "leaflet/dist/leaflet.css"
import './styles/GoogleMaps.css'

const markerIcon = new L.Icon({
  iconUrl:("https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png"),
  iconSize: [30, 45],
  iconAnchor: [17, 45],
  popupAnchor: [0,-46],

})

const GoogleMaps = () => {
    const [center] = useState({lat:49.48419232829004, len: 8.475619964067945 });
    const ZOOM_LEVEL =15;
    

    return (
        <>
          
                    <div className="col">
                        <MapContainer
                          center={[49.48419232829004, 8.475619964067945]}
                          zoom={ZOOM_LEVEL}
                        
                          >
                              <TileLayer url={osm.maptiler.url}/>
                              
                              <Marker 
                                position={[49.48419232829004, 8.475619964067945]} 
                                icon={markerIcon}
                              >
                                <Popup>
                                  <b>Wasserturm</b>

                                </Popup>
                              </Marker> 

                              <Marker 
                                position={[49.473996159527545, 8.534386713440666]} 
                                icon={markerIcon}
                              >
                                <Popup>
                                  <b>DHBW</b>

                                </Popup>
                              </Marker> 

                              <Marker 
                                position={[49.48385695209089, 8.462254756057446]} 
                                icon={markerIcon}
                              >
                                <Popup>
                                  <b>Uni Mannheim</b>

                                </Popup>
                              </Marker>

                              <Marker 
                                position={[49.47981688131258, 8.469867642564548]} 
                                icon={markerIcon}
                              >
                                <Popup>
                                  <b>HBF</b>

                                </Popup>
                              </Marker>

                              <Marker 
                                position={[49.479015852217536, 8.495958954256649]} 
                                icon={markerIcon}
                              >
                                <Popup>
                                  <b>Luisenpark</b>

                                </Popup>
                              </Marker>

                        </MapContainer>
                    </div>
                
        </>
    );
};

export default GoogleMaps;