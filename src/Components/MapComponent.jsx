import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import '../styles/components/MapComponent.css';

function MapComponent() {
  return (
    <MapContainer
      className="map-container"
      center={[50.04332, 19.993615]}
      zoom={15}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[50.04332, 19.993615]}>
        <Popup>
          <div className="popup-text">
            {' '}
            SmartHydro,<br></br> zapraszamy!
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;
