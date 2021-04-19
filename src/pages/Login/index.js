import React from "react";
import { navigate } from '@reach/router';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import Title from "../../components/Title";
import "./login.css";
// import image from "../../assets/images/background.jpg";



const LoginPage = ()=> {
    return (
        <div className="login-page">
             <Navbar></Navbar>
            <div className="login-view" >
                <p></p>        
                {/* <Title>Login page </Title> */}
                <Button handleClick={() => navigate("/")}>Log in </Button>
            </div>
        </div>
    );
};
// style={{ backgroundImage: `url(${image})` }}
export default LoginPage;
{/* <Button >Go back</Button> */}