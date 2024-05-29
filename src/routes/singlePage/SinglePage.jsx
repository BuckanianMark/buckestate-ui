import Slider from "../../components/slider/slider"
import "./singlePage.scss"
import Pin from "../../assets/pin.png"
import Map from "../../components/map/map"
import Save from "../../assets/save.png"
import Bed from "../../assets/bed1.png"
import Bath from "../../assets/bath.png"
import Utility from "../../assets/utility.png"
import Pet from "../../assets/pet.png"
import { redirect, useLoaderData } from "react-router-dom"
import DOMPurify from "dompurify"
import { useContext, useState } from "react"
import {AuthContext} from "../../context/AuthContext"
import apiRequest from "../../lib/apiRequest"
function SinglePage(){
    const post = useLoaderData();
    const [saved,setSaved] = useState(post.isSaved)
    const {currentuser} = useContext(AuthContext)
  const handleSave = async () => {
    setSaved((prev) => !prev)
    if(!currentuser){
        redirect("/login")
    }
    try {
        await apiRequest.post("/users/save",{
            postId:post.id
        })
    } catch (error) {
        console.log(error)
        setSaved((prev) => !prev)
    }
  }
    
    return(
        <div className="singlePage">
            <div className="details">
                <div className="wrapper">
                    <Slider images={post.images} />
                    <div className="info">
                        <div className="top">
                            <div className="post">
                               <h1> {post.title}</h1>
                               <div className="address">
                                <img src={Pin} alt="pin" width={50} />
                                <span>{post.address}</span>
                               </div>
                               <div className="price">Ksh {post.price}</div>
                               </div>
                               <div className="user">
                                <img src={post.user.avatar} alt="user" />
                                <span>{post.user.username}</span>
                               </div>
                        </div>
                        <div className="bottom" 
                        dangerouslySetInnerHTML={{
                            __html:DOMPurify.sanitize(post.postDetail.desc),
                            }}> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="features">
            
                <div className="wrapper">
                <p className="title">Basics</p>
                    <div className="listVertical">
                    <div className="feature">
                        <img src={Utility} alt="utility" width={50}/>
                        <div className="featureText">
                            <span>Utilities</span>
                            <p>{post.postDetail.utilities}</p>
                        </div>
                    </div>
                    <div className="feature">
                        <img src={Pet} alt="pet" width={50}/>
                        <div className="featureText">
                            <span>Pet Policy</span>
                            <p>{post.postDetail.pet}</p>
                        </div>
                    </div>
                    </div>
                    <p className="title">Sizes</p>
                <div className="sizes">
                    <div className="size">
                        <span>{post.postDetail.size}sqft</span>
                    </div>
                    <div className="size">
                        <img src={Bed} alt="" width={40} />
                        <span>{post.bedroom} room(s)</span>
                    </div>
                    <div className="size">
                    <img src={Bath} alt="" width={40} />
                        <span>{post.bathroom} bath(s)</span>
                    </div>
                </div>
                
                <p className="title">Location</p>
                <div className="mapContainer">
                    <Map items={[post]} />
                </div>
                <div className="buttons" onClick={handleSave} 
                style={{backgroundColor:saved ? "#f8ccef" :"white"}}>
                    <img src={Save} alt="save" width={50} />
                   {saved ? "Unsave The Place" :"Save The Place"}  
                </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePage