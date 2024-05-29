import "./listPage.scss"
import Filter from "../../components/filter/filter"
import Card from "../../components/card/card"
import Map from "../../components/map/map"
import Loading from "../../assets/svg/tube-spinner.svg"
import { Await, useLoaderData } from "react-router-dom"
import { Suspense } from "react"
function ListPage(){
    const data = useLoaderData()
    return(
        <div className="listPage">
            <div className="listContainer">
                <div className="wrapper">
                    <Filter />
                    <Suspense fallback={<p><img src={Loading} alt="loading..." className="loader" width={200}/></p>}>
                    <Await
                    resolve={data.postResponse}
                    errorElement={<p>Error loading posts</p>}>
                        {(postResponse) => postResponse.data.map(post =>(
                           <Card key={post.id} item={post} /> 
                        ))}
                    </Await>
                    </Suspense>
                </div>
            </div>
            <div className="mapContainer">
                
                <Suspense fallback={<p><img src={Loading} alt="loading..." className="loader" width={200}/></p>}>
                    <Await
                    resolve={data.postResponse}
                    errorElement={<p>Error loading posts</p>}>
                        {(postResponse) => <Map items={postResponse.data} />}
                    </Await>
                    </Suspense>
            </div>
        </div>
    )
}
export default ListPage