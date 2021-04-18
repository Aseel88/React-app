import React from "react";
import { navigate } from "@reach/router";
import NavBar from "../../components/Navbar"
import Button from "./../../components/Button";
// import PropTypes from "prop-types";

// import View from "../../components/View";
import "./notFound.css";

const NotFound = () => {
  return (
    // <View className="not-found-view">
    <div>
        <NavBar></NavBar>
      <h1>404</h1>
      <p>Oh, something went wrong! Please go back to the home page</p>
      <Button handleClick={() => navigate("/")}>Go back</Button>
    {/* // </View> */}
 </div> 
 );
};
// Button.propTypes = {
//     buttonText: PropTypes.string
//   };

//   Button.defaultProps = {
//     buttonText: "Go back"
//   };
export default NotFound;