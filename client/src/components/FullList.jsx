import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

export default function FullList(props) {
  // resturant name variable
  const [restName, setRestName] = useState([]);
  // fetch from the api to get the resturant names
  if (restName.length === 0) {
    fetch("/api/directory")
      .then((res) => res.json())
      .then((res) => {
        setRestName(res);
      });
  }

  return (
    // page container
    <div id="main-container">
      {/* resturant names container */}
      <section id="main-list">
        <h3>Resturant list:</h3>
        {/* container for each resturant name */}
        {restName.map((title, index) => {
          return (
            <h4>
              <Link id="rest-name" to={`/resturant/${title}`}>
                {title.replaceAll("-", " ")}
              </Link>
            </h4>
          );
        })}
      </section>
      {/* map container */}
      <section>
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
          {/* Marker locations */}
          <Marker
            id="American-flatbread"
            position={[44.47655925, -73.21435285244789]}
          />
          <Marker id="Arts-roits" position={[44.4682275, -73.2148221]} />
          <Marker id="Hen-of-the-wood" position={[44.4790109, -73.217258]} />
          <Marker id="Honey-road" position={[44.4761088, -73.2123458]} />
          <Marker
            id="Istanbul-kebab-house"
            position={[44.4753796, -73.2126135]}
          />
          <Marker
            id="Leunigs-bistro"
            position={[44.477264500000004, -73.21278867560478]}
          />
          <Marker
            id="Revolution-kitchen"
            position={[44.4779026, -73.2116336]}
          />
          <Marker
            id="St-paul-street-gastro-grub"
            position={[44.4734714, -73.2140236]}
          />
          <Marker id="The-gryphon" position={[44.4757399, -73.2137432]} />
        </MapContainer>
      </section>
    </div>
  );
}
