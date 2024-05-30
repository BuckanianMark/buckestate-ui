import "./navbar.scss"
import Logo from "../../assets/logo.png"
import Menu from "../../assets/menu.png"
import Avatar from "../../assets/avatar.png"
import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar(){
    
    const {currentUser} = useContext(AuthContext);
    const [open,setOpen] = useState(false);
    
return(
    <nav>
        <div className="left">
            <a href="" className="logo">
                <img src={Logo} alt="" width="70" />
                <span>BuckEstate</span>
            </a>
            <a href="/">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Agents</a>
        </div>
        <div className="right">
         {currentUser ? 
            (<div className="user">
                <img src={currentUser.avatar || Avatar}  alt="" />
                <span> {currentUser.username} </span>
                <Link to={'/profile'} className="profile">
                <div className="notification">3</div>
                    profile
                </Link>
                
            </div>) 
             : 
            (<>
            <a href="/login">Sign In</a>
            <a href="/register" className="register">Sign Up</a></>)}
           
            <div className="menuIcon">
                <img src={Menu} alt="" width="50" onClick={() => setOpen(!open)} />
            </div>
            <div className={open ? "menu active" : "menu"}>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Agents</a>
            <a href="/login">Sign In</a>
            </div>
        </div>
    </nav>
)
}

export default Navbar