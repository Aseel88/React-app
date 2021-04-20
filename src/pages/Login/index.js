import React from "react";
import { navigate } from '@reach/router';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import "./login.css";


const LoginPage = ()=> {
    return (
        <div className="login-page">
             <Navbar></Navbar>
            <div className="login-view" >
                <Button handleClick={() => navigate("/")}>Log in </Button>
            </div>
        </div>
    );
};

export default LoginPage;
