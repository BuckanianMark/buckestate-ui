/* eslint-disable react/prop-types */
import "./map.scss";
import "leaflet/dist/leaflet.css"
import {MapContainer,TileLayer} from "react-leaflet"
import Pin from "../pin/pin";
function Map({items}){
    return(
        <MapContainer 
        center={items.length === 1 ? 
          [items[0].latitude,items[0].longitude]
          :
          [1.2720,36.8089]
        } 
        zoom={7} 
        scrollWheelZoom={false}
        className="map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       {items.map(item => (
        <Pin key={item.id} item={item} />
       ))}
      </MapContainer>
    )
}
export default Map