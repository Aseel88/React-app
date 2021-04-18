import React from "react";
import { navigate } from "@reach/router";
// import { Router } from "@reach/router";
import NavBar from "../../components/Navbar"
import Button from "./../../components/Button";
// import PropTypes from "prop-types";
import "./about.css";

const About = () => {
  return (
    <div>
        <NavBar></NavBar>
      <h1>About page</h1>
      {/* <p>Oh, something went wrong! Please go back to the home page</p> */}
      <Button handleClick={() => navigate("/")}>Go back</Button>
   </div> 
 );
};

export default About;