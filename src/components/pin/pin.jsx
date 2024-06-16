/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import MarkerIcon from '../../assets/marker.png'
import './pin.scss'
import {Marker,Popup} from 'react-leaflet'
import L from 'leaflet';
function Pin({item}){

    const markerIcon = new L.Icon({
        iconUrl: {MarkerIcon},
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
      });
      

    // console.log(item)
    return(
        <Marker position={[item.latitude,item.longitude]} >
        <Popup>
         <div className="popupContainer">
            <img src={item.images[0]} alt="rental-image" />
            <div className="textContainer">
                <Link to={`/${item.id}`} >{item.title}</Link>
                <span className='bed'> {item.bedroom} bedroom </span>
                <b>Ksh {item.price} </b>
            </div>
         </div>
        </Popup>
      </Marker>
    )
}

export default Pin