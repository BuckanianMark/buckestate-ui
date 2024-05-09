import { useState } from "react"
import "./searchBar.scss"
import searchIcon from "../../assets/search-icon.png"
const types = ["buy","rent"]
function SearchBar(){
    const [query,setQuery] = useState({
        type:"buy",
        location:"",
        minPrice:0,
        maxPrice:0})
        const switchType = (val) => {
            setQuery((prev) => ({...prev,type:val}))
        }
    return(
        <div className="searchBar">
           <div className="type">
            {types.map((type) => (
                <button key={type} 
                onClick={() => switchType(type)} 
                className={query.type === type ? "active" : ""}>
                    {type}
                </button>
            ))}
           </div> 
            <form action="">
                <input type="text" name="location"  placeholder="City/Town Location"/>
                <input type="number" name="minPrice" min={0} max={1000000}   placeholder="Min Price"/>
                <input type="number" name="maxPrice" min={0} max={1000000}  placeholder="Max Price"/>
            <button>
                <img src={searchIcon} alt="search" width={50} />
            </button>
            </form>
            
        </div>
    )
}
export default SearchBar