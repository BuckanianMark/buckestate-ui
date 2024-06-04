/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import Pin from "../../assets/pin.png"
import Save from "../../assets/save.png"
import Bed from "../../assets/bed2.png"
import Bath from "../../assets/bath.png"
import "./card.scss"

function Card({ item }){
    
    return(
      
       <div className="card">
            <Link to={`/rental/${item.id}`} className="imageContainer">
             <img src={item.images[0]} alt="image" />   
            </Link>
            <div className="textContainer">
                <h2 className="title">
                    <Link to={`/rental/${item.id}`}>{item.title}</Link>
                </h2>
                <div className="address">
                    <img src={Pin} alt="address"width={40}  />
                    <span>{item.address}</span>
                </div>
                <p className="price">ksh {item.price}</p>
                <div className="bottom">
                    <div className="features">
                        <div className="feature">
                            <img src={Bed} alt="bed" width={40} />
                            <span>{item.bedroom} bedroom(s)</span>
                        </div>
                        <div className="feature">
                            <img src={Bath} alt="bath" width={40}  />
                            <span>{item.bathroom} bathroom(s)</span>
                        </div>
                    </div>
                    <div className="icons">
                        <div className="icon">
                            <img src={Save} alt="save" width={40} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Card