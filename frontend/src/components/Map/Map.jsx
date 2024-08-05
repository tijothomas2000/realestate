import './Map.scss';
import { MapContainer, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import Pin from '../Pin/Pin';

export default function Map({items}) {
  return (
    <MapContainer center={items.length === 1 ? [items[0].lattitude, items[0].longitude] : [52.4797, -1.90269]} zoom={7} scrollWheelZoom={false} className='map'>
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {items.map((item) => (
        <Pin items={item} key={item.id} />
      ))}
    </MapContainer>
  )
}
