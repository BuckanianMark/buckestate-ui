import "./navbar.scss"
import Logo from "../../assets/logo.png"
import Menu from "../../assets/menu.png"
import { useState } from "react"

function Navbar(){
    const [open,setOpen] = useState(false)
return(
    <nav>
        <div className="left">
            <a href="" className="logo">
                <img src={Logo} alt="" width="70" />
                <span>BuckEstate</span>
            </a>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Agents</a>
        </div>
        <div className="right">
        <a href="">Sign In</a>
            <a href="" className="register">Sign Up</a>
            <div className="menuIcon">
                <img src={Menu} alt="" width="50" onClick={() => setOpen(!open)} />
            </div>
            <div className={open ? "menu active" : "menu"}>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Agents</a>
            <a href="">Sign In</a>
            <a href="">Sign Up</a>
            </div>
        </div>
    </nav>
)
}

export default Navbar