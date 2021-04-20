import React from "react";
import { navigate } from "@reach/router";
import NavBar from "../../components/Navbar"
import Button from "./../../components/Button";

import "./notFound.css";

const NotFound = () => {
  return (
     <div>
        <NavBar></NavBar>
      <h1>404</h1>
      <p>Oh, something went wrong! Please go back to the home page</p>
      <Button handleClick={() => navigate("/")}>Go back</Button>
    </div> 
 );
};

export default NotFound;