/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import './pin.scss'
import {Marker,Popup} from 'react-leaflet'
function Pin({item}){
    // console.log(item)
    return(
        <Marker position={[item.latitude,item.longitude]}>
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