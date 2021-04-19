import React from "react";
import "./navbar.css";
import logo from "./../../assets/images/logo.png"

const Navbar = () =>{
    return (
    <div className="navbar"> 
    <div className="ul">    
        <ul>
            <li><a href= "/"> Home</a></li>
            <li><a href= "/contact"> Contact us</a></li>
            <li><a href= "/about"> About</a></li>  
            <li><a href= "/login"> Log in</a></li>              
        </ul>
         </div>
        <div className="navbar__img"> 
            <img src={logo} alt= "logo-img"/> 
        </div>   
    </div>
    );
  };
export default Navbar;