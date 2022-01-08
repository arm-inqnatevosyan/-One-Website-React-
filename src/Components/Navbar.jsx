import React, { useState } from "react";
import logo from "../images/logo.png";

function Navbar(){
    const [nav,setnav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50){
            setnav(true)
        }
        else{
            setnav(false)
        }
    }
    window.addEventListener("scroll",changeBackground)
    return(
        <nav className={nav ? "navactive" : "nav"}>
            <a href="#" className="logo">
                <img src={logo} alt="" className="img"/>
            </a>
            <ul>
                <li><a href="#" className="active">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">UI SS</a></li>
                <li><a href="#">Download</a></li>
            </ul>
        </nav>
    )
}
export default Navbar;