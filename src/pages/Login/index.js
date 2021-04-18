import React from "react";
// import { Link,Router } from '@reach/router';

import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import Title from "../../components/Title";
// import View from "../../components/View";

const LoginPage = props => {
    return (
        // <View className="login-view">
        <div>
            <Navbar></Navbar>
            {/* <Logo
                isPlaying={isPlaying}
                handleOnClick={() => setIsPlaying(!isPlaying)}
            /> */}
            <Title>Login page </Title>
            <Button >
                 Log in
            </Button>
            {/* <p>{count > 0 && count}</p> */}
            {/* <audio src={sound} muted={!isPlaying} autoPlay={true} /> */}
        {/* // </View> */}
        </div>
    );
};

export default LoginPage;

// handleClick={() => setCount(count + 1)}