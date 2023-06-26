import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Map ({ latitude, longitude }) {
    const position = [latitude, longitude];

    return (
        <MapContainer center={position} zoom={12} style={{ height: '200px', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
                <Popup>
                    Latitude: {latitude} <br />
                    Longitude: {longitude}
                </Popup>
            </Marker>
        </MapContainer>
    );
};
