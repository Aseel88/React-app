import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = props => {
    return <button onClick={props.handleClick} className="btn">{props.children}</button>;
  };

  Button.propTypes = {
    // buttonText: PropTypes.string,
    handleClick: PropTypes.func
  };

  // Button.defaultProps = {
  //   buttonText: "Search"
  // };
// {props.buttonText}
  export default Button;