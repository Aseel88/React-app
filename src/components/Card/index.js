import React from "react";
import PropTypes from "prop-types";
import "./card.css";

const Card = props =>{
    return (
        <div className = "card-item">
            <div className = "card-item_image">
                <img src = {props.image} alt="recipe-image"/>
            </div>
            <div className ="card-item_text">
                <h3>{props.title}</h3>
                {/* <p>{props.album}</p> */}
                {/* <p>{props.year}</p> */}
            </div>
            <a href= "">Read more</a>
        </div>
    // <div 
    //     className="card"
    //     style={{
    //         backgroundColor: props.bg
    //     }} >     
    // </div>
    );
  };

//   Card.PropTypes = {
//     image: PropTypes.string,
//     title: PropTypes.string,  
//   }
export default Card;