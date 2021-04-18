import React from "react";
import PropTypes from "prop-types";
import "./searchItem.css";


const SearchItem = props => {
    return (
      <div className="search-item">
        <div className="search-item__image">
          <img src={props.image} alt="recipe-img" />
        </div> 
        <div className="search-item__text">
          <h3>{props.title}</h3>
        </div> 
         <a
          className="search-item__link"
          rel="noopener noreferrer"
          target="_blank"

        href= {props.url}>
        Read more .. 
        </a>
      </div>
    );
  };
  
  SearchItem.propTypes = {
    image: PropTypes.string,
    label: PropTypes.string,
    url: PropTypes.string,
  };
  
  export default SearchItem;