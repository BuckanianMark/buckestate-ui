import { useState } from "react"
import "./searchBar.scss"
import searchIcon from "../../assets/search.png"
import { Link } from "react-router-dom"
const types = ["buy","rent"]
const cities = ["Rongai","Ngong","Nairobi"]
function SearchBar(){
    const [query,setQuery] = useState({
        type:"rent",
        city:"Rongai",
        minPrice:0,
        maxPrice:0})
        const switchType = (val) => {
            setQuery((prev) => ({...prev,type:val}))
        }
        const handleChange = e => {
            setQuery((prev) => ({...prev,[e.target.name]:e.target.value}))  
        }
        const handleCityClick = (city) => {
            setQuery((prev) => ({ ...prev, city }));
          };
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
                <h2>Choose a location below</h2>
                <div className="city-div">
                    {cities.map((city) => (
                        <button 
                        key={city} 
                        className={query.city === city ? "selected":""}
                        onClick={() => handleCityClick(city)}>
                            {city}
                        </button>
                    ))}
                    {/* <div className="city">
                        <label htmlFor="city" className="city-label">
                        <input type="text"  name="city"  value="rongai" readOnly onChange={handleChange} /> 
                        </label>
                    </div>
                    <div className="city">
                        <label htmlFor="city">
                        <input type="text"  name="city"  value="ngong" readOnly onChange={handleChange} /> 
                        </label>
                    </div> */}
                </div>
                <input type="number" name="minPrice" min={0} max={1000000}  onChange={handleChange}   placeholder="Min Price"/>
                <input type="number" name="maxPrice" min={0} max={1000000}  onChange={handleChange}  placeholder="Max Price"/>
            <Link className="link" to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}>
            <button>
                <img src={searchIcon} alt="search" width={50} />
            </button>
            </Link>
           
            </form>
            
        </div>
    )
}
export default SearchBar