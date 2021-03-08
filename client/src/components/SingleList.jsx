import React from "react";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

export default function SingleList(props) {
  const [restName, setRestName] = useState({});
  const [location, setLocation] = useState([0, 0]);
  const [Lat, setLat] = useState(0);
  const [long, setlong] = useState(0);
  const [Check, setCheck] = useState(false);

  let name = window.location.pathname;
  console.log("name 1 = ", name);
  name = name.replace("/resturant/", "");
  console.log("name = ", name);

  // if(restName.length === 0){}
  fetch(`/resturant/api/${name}`)
    .then((res) => res.json())
    .then((res) => {
      setRestName(res);
      setLat(res.lat);
      setlong(res.long);
    });
  console.log(restName);

//   setLat(restName.lat)
//   setlong(restName.long)
  
  return (
    <section id="rest-main">
      <div id="rest-info">
        <h3>Resturant:</h3>
        <li>Name: {restName.name}</li>
        <li>Address: {restName.address}</li>
        <li>Phone: {restName.phone}</li>
        <li>Notes: {restName.notes}</li>
      </div>
      <div id="rest-map">
      <MapContainer id='map'
        center={props.center}
        zoom={15}
       
        style={{ height: "600px", width: "600px" }}
      >
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
        />
    
          
          <Marker position={[Lat, long]} />
        </MapContainer>
      </div>
    </section>
  );
}
