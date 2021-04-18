import React from 'react';
import Navbar from '../../components/Navbar';
import Title from "../../components/Title";
import SearchItem from "../../components/SearchItem";
import Button from "../../components/Button";
import axios from 'axios';


const HomePage = () => {
    const APP_ID = "5b13b596";
    const APP_KEY = "bb1439d639d2481175216407fdc5678e";
    const [searchText, setSearchText] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const URL = `https://api.edamam.com/search?q=${searchText}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const getData = async () =>{
        const result = await axios.get(URL);
        setSearchResults(result.data.hits);
        // console.log(result);
        setSearchText("");
    };

const onChange = (e) =>{
    setSearchText(e.target.value);
    // console.log(e.target.value);
   };


 const onSubmit= e=>{
       e.preventDefault();
       getData();
   }; 
   
    return(
    <div>
        <Navbar></Navbar>
        <Title>Home page </Title>
        <form className= "submit-form" onSubmit={onSubmit}>
            <input type="text" placeholder="Search" onChange={onChange}
            value= {searchText} />
            <Button>Submit</Button>
        </form>
        <div className= "recipes" style={{ width: "100%", height: "60%" }} >
            {
                searchResults !== [] &&
                searchResults.map((searchItem, key) =>
                    <SearchItem 
                    key={key}    
                    image={searchItem.recipe.image}                
                    title={searchItem.recipe.label}
                    url={searchItem.recipe.url}
                    />                
            )}
        </div>
    </div>
)
};
export default HomePage;