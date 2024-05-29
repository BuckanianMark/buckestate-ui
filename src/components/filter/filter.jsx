import "./filter.scss"
import SearchIcon from "../../assets/search-icon.png"
import { useSearchParams } from "react-router-dom"
import { useState } from "react"
function Filter(){
    const [searchParams,setSearchParams] = useSearchParams()
    const [query,setQuery] = useState({
        type:searchParams.get("type") || "",
        city:searchParams.get("city") || "",
        property:searchParams.get("property") || "",
        minPrice:searchParams.get("minPrice") || 0,
        maxPrice:searchParams.get("maxPrice") || 1000000,
        bedroom:searchParams.get("bedroom") || 2,
    })
    const handleFilter = () => {
        setSearchParams(query)
    }
    const handleChange = e => {
        setQuery({
            ...query,
            [e.target.name]:e.target.value
        })
    }
    return(
        <div className="filter">
            <h1>Search results for <b>{query.city}</b></h1>
            <div className="top">
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input 
                    type="text" 
                    id="city" 
                    name="city" 
                    placeholder="City/town Location" 
                    defaultValue={query.city}
                    onChange={handleChange}/>
                </div>
               
            </div>
            <div className="bottom">
            <div className="item">
                    <label htmlFor="type">Type</label>
                    <select 
                    name="type"
                     id="type"
                     defaultValue={query.type}
                     onChange={handleChange}>
                        <option value="">any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="property">Property</label>
                    <select 
                    name="property" 
                    id="property"
                    defaultValue={query.property}
                    onChange={handleChange}>
                    <option value="">any</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">house</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="minPrice">Min Price</label>
                    <input 
                    type="number" 
                    id="minPrice"
                     name="minPrice" 
                     defaultValue={query.minPrice}
                     placeholder="any" 
                     onChange={handleChange}/>
                </div>
                <div className="item">
                    <label htmlFor="maxPrice">Max Price</label>
                    <input 
                    type="number" 
                    id="maxPrice" 
                    name="maxPrice" 
                    placeholder="any" 
                    defaultValue={query.maxPrice}
                    onChange={handleChange}/>
                </div>
                <div className="item">
                    <label htmlFor="bedroom">Bedroom</label>
                    <input 
                    type="text" 
                    id="bedroom" 
                    name="bedroom" 
                    placeholder="any"
                    defaultValue={query.bedroom}
                    onChange={handleChange} />
                </div>
                <button onClick={handleFilter}>
                <img src={SearchIcon} alt="search" />
                </button>
            </div>
        </div>
    )
}
export default Filter