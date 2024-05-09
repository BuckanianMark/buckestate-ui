/* eslint-disable react/prop-types */
import "./slider.scss"
//import Arrow from "../../assets/arrow.png"
import { useState } from "react"
function Slider({images}){
    const [imageIndex,setImageIndex] = useState(null)
    return(
        <div className="slider">
            {/* {imageIndex !== null &&
            (<div className="fullSlider">
                <div className="arrow">
                    <img src={Arrow} alt="" />
                </div>
                <div className="imgContainer">
                    <img src={images[0]} alt="" />
                </div>
                <div className="arrow">
                <img src={Arrow} alt="" className="right" />
                </div>
                <div className="close">X</div>
            </div>)
           } */}
            <div className="bigImage">
                {imageIndex ? 
                (<img src={images[imageIndex]} alt=""  />) 
                : 
                (<img src={images[0]} alt=""  />)}
                
            </div>
            <div className="smallImages">
                {images.slice(1).map((image,index) => (
                    <img key={index} src={image} onClick={() => setImageIndex(index + 1)}/>
                ))}
            </div>
        </div>
    )
}
export default Slider