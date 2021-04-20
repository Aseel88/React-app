import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = props => {
    return <button onClick={props.handleClick} className="btn">{props.children}</button>;
  };

  Button.propTypes = {
       handleClick: PropTypes.func
  };

  export default Button;