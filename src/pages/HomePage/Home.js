import React from 'react';
import HeroSection from '../../component/HeroSection';
import {Object} from './Data';

function Home(){
    return(
        <>
        <HeroSection {...Object}/>
        </>
    )
}


export default Home;