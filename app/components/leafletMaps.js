import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Image from 'next/image';

// Fix marker icon issue with Leaflet and Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const center = [43.425853, 5.587394]; // Remplacez par la latitude et la longitude de l'adresse de l'entreprise

const LeafletMapComponent = () => {
  return (
    <MapContainer center={center} zoom={12} style={{ width: '100%', height: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center}>
        <Popup className='w-[8vw]'>
          <Image src={'/belariniLogo.png'} alt='logo entreprise' width={500} height={400} />
          <p>adresse de l'entreprise</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default LeafletMapComponent;