import Slider from "../../components/slider/slider"
import "./singlePage.scss"
import {singlePost, userData} from "../../lib/dummyData"
import Pin from "../../assets/pin.png"
import Map from "../../components/map/map"
import Save from "../../assets/save.png"
function SinglePage(){
    return(
        <div className="singlePage">
            <div className="details">
                <div className="wrapper">
                    <Slider images={singlePost.images} />
                    <div className="info">
                        <div className="top">
                            <div className="post">
                               <h1> {singlePost.title}</h1>
                               <div className="address">
                                <img src={Pin} alt="pin" width={50} />
                                <span>{singlePost.address}</span>
                               </div>
                               <div className="price">Ksh {singlePost.price}</div>
                               </div>
                               <div className="user">
                                <img src={userData.img} alt="user" />
                                <span>{userData.name}</span>
                               </div>
                        </div>
                        <div className="bottom">
                            {singlePost.description}
                        </div>
                    </div>
                </div>
            </div>
            <div className="features">
            
                <div className="wrapper">
                <p className="title">Basics</p>
                    <div className="listVertical">

                    </div>
                <p className="title">Sizes</p>
                <div className="sizes"></div>
                <p className="title">Vicinities</p>
                <div className="listHorizontal">

                </div>
                <p className="title">Location</p>
                <div className="mapContainer">
                    <Map items={[singlePost]} />
                </div>
                <div className="buttons">
                    <img src={Save} alt="save" width={50} />
                    Save The Place
                </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePage