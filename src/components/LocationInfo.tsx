import * as React from 'react';

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

interface Props {
  text: string;
  position: [number, number];
}

const LocationMap = ({ position }: { position: [number, number] }) => {
  const [lat, long] = position;
  if (typeof window !== 'undefined') {
    return (
      <Map className="h-48 w-full" center={[long, lat]} zoom={13}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[long, lat]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  }
  return null;
};

export const LocationInfo = ({ text, position }: Props) => (
  <>
    <h3>Location</h3>
    {text ? <p>{text}</p> : null}
    {position ? <LocationMap position={position} /> : null}
  </>
);
