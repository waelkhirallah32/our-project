import React from 'react';
import { Button } from './Button';
import {Link} from 'react-router-dom';
import './HeroSection.css';





function HeroSection ({description,contact,confidentialite,paiement}){
    return(
        
        <div className="apropos">
            <h1 className="title">QUI SOMMES NOUS ? :</h1>
            <p className="para">{description}</p>
            <h1 className="title">CONTACT :</h1>
            <p className="para">{contact}</p>
            <h1 className="title">POLITIQUE DE CONFIDENTIALITÉ :</h1>
            <p className="para">{confidentialite}</p>
            <h1 className="title">PAIEMENT :</h1>
            <p className="para">{paiement}</p>
            
       </div>
        
    )
}

export default HeroSection;