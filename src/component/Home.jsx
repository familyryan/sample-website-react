import React from 'react';
import Common from './Common';
import web from "../assets/img2.png";

const Home = () => {
    return ( 
        <>
        
        <Common 
        name="Grow your businnes with"
        imgsrc={web}
        visit="/service"
        btname="Get-started"
        />
        </>
     );
}

export default Home;