import React from "react";
import { navigate } from "@reach/router";
import NavBar from "../../components/Navbar"
import Button from "./../../components/Button";
import "./contact.css";

const Contact = () => {
  return (
    <div>
        <NavBar></NavBar>
        <div className= "contact-view">
          <h1>Contact information</h1>
          <p>Lorem Ipsum is simply dummy text of the 
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a type specimen book</p>
          <Button handleClick={() => navigate("/")}>Go back</Button>
        </div>
    </div>
 );
};

export default Contact;