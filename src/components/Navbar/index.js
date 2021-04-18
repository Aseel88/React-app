import React from "react";
import "./navbar.css";

const Navbar = () =>{
    return (
    <div className="navbar">     
        <ul>
            <li><a href= "/"> Home</a></li>
            <li><a href= "/contact"> Contact us</a></li>
            <li><a href= "/about"> About</a></li>  
            <li><a href= "/login"> Log in</a></li>                

        </ul>     
    </div>
    );
  };
export default Navbar;