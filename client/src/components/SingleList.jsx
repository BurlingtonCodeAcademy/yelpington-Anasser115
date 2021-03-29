import React from "react";
import { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

export default function SingleList(props) {
  const [restName, setRestName] = useState({});
  const [Lat, setLat] = useState(0);
  const [long, setlong] = useState(0);
  // returant name passed from url to a variable
  let name = window.location.pathname;
  // sanitizing the name
  name = name.replace("/resturant/", "");
  // getting the resturant info from api based on resturant name
  fetch(`/resturant/api/${name}`)
    .then((res) => res.json())
    .then((res) => {
      setRestName(res);
      setLat(res.lat);
      setlong(res.long);
    });

  return (
    // main container
    <section id="rest-main">
      {/* resutant info */}
      <div id="rest-info">
        <h3>Resturant:</h3>
        <li>Name: {restName.name}</li>
        <li>Address: {restName.address}</li>
        <li>Phone: {restName.phone}</li>
        <li>Notes: {restName.notes}</li>
      </div>
      {/* map container */}
      <div id="rest-map">
        {/* map element */}
        <MapContainer
          id="map"
          center={props.center}
          zoom={15}
          style={{ height: "600px", width: "600px" }}
        >
          {/* map theme */}
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
            attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
          />
          {/* resturant location marker based on the api data */}
          <Marker position={[Lat, long]} />
        </MapContainer>
      </div>
    </section>
  );
}
