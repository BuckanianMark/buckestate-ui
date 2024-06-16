import "./listPage.scss"
import Filter from "../../components/filter/filter"
import Card from "../../components/card/card"
import Map from "../../components/map/map"
//import Loading from "../../assets/svg/tube-spinner.svg"
import { Await, useLoaderData } from "react-router-dom"
import { Suspense, useRef } from "react"
function ListPage(){
    const data = useLoaderData()
    const top = useRef(null)
    const scrollToTop = () => {
        if(top.current){
            top.current.scrollIntoView({ behavior: 'smooth' })
        }
    }
    return(
        <div className="listPage">
        <h1    ref={top}>Available Listings</h1>
            <div className="listContainer">
                <div 
           
                className="wrapper">
                    <Filter />
                    <Suspense fallback={<p>Loading...</p>}>
                    <Await
                    resolve={data.postResponse}
                    errorElement={<p> Error loading posts </p>}>
                        {(postResponse) => postResponse.data.map(post =>(
                           <Card key={post.id} item={post} /> 
                        ))}
                    </Await>
                    </Suspense>
                </div>
            </div>
            <div className="mapContainer">
                
                <Suspense fallback={<p>Loading...</p>}>
                    <Await
                    resolve={data.postResponse}
                    errorElement={<p>Error loading posts </p>}>
                        {(postResponse) => <Map items={postResponse.data} />}
                    </Await>
                    </Suspense>
            </div>
            <button className="scroll-btn" onClick={scrollToTop}>
            <i className="fa-solid fa-chevron-up fa-2x"></i>
            </button>
        </div>

    )
}
export default ListPage