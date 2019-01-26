import * as React from 'react';

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const LocationMap = () => {
  if (typeof window !== 'undefined') {
    return (
      <Map center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  }
  return null;
};

const LocationInfo = () => (
  <div>
    <h4>Location</h4>
    <p>Find us here</p>
    <LocationMap />
  </div>
);

export default LocationInfo;
