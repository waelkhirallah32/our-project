import React from 'react'
import {Link} from 'react-router-dom';
import video from '../videos/video.mp4'
import './Maison.css';

function Maison(){
    return(
    <>
        <div className="nav-links">
        <div className="maison">
        <video className="video"  autoPlay loop muted src={video} type='video/mp4' />
        </div>
        </div>
        </>
    )
}

export default Maison;