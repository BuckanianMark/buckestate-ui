import "./homePage.scss"
import banner from "../../assets/bn.png"
import SearchBar from "../../components/searchBar/SearchBar"
// import { useContext } from "react"
// import { AuthContext } from "../../context/AuthContext";
function HomePage(){
    //const {currentUser} = useContext(AuthContext);
    //console.log(currentUser)
return(
<div className="homePage">
   <div className="textContainer">
    <div className="wrapper">
        <h1 className="title">
        Find Estates And Get Stunning Places 
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Voluptatibus veniam tempore, iste, nemo, eligendi porro tempora nesciunt 
            qui similique vero a dolore? Ullam, ad maiores.</p>
        <SearchBar />
        <div className="boxes">
       <div className="box">
        <h1>10+</h1>
        <h2>Regions to choose</h2>
       </div>
       <div className="box">
        <h1>3000+</h1>
        <h2>Served Customers</h2>
       </div>
       <div className="box">
        <h1>5+</h1>
        <h2>Years Of Experience</h2>
       </div>
        </div>
    </div>

   </div>
   <div className="imageContainer">
    <img src={banner} alt="banner" />
   </div>
</div>
)
}
export default HomePage