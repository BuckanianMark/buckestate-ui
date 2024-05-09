import "./filter.scss"
import SearchIcon from "../../assets/search-icon.png"
function Filter(){
    return(
        <div className="filter">
            <h1>Search results for <b>Nakuru</b></h1>
            <div className="top">
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input type="text" id="city" name="city" placeholder="City/town Location" />
                </div>
               
            </div>
            <div className="bottom">
            <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type">
                        <option value="">any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="city">Property</label>
                    <select name="type" id="type">
                    <option value="">any</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">house</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="minPrice">Min Price</label>
                    <input type="number" id="minPrice" name="minPrice" placeholder="any" />
                </div>
                <div className="item">
                    <label htmlFor="maxPrice">Max Price</label>
                    <input type="number" id="maxPrice" name="maxPrice" placeholder="any" />
                </div>
                <div className="item">
                    <label htmlFor="bedroom">Bedroom</label>
                    <input type="text" id="bedroom" name="bedroom" placeholder="any" />
                </div>
                <button>
                <img src={SearchIcon} alt="search" />
                </button>
            </div>
        </div>
    )
}
export default Filter