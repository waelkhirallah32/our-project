import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import { FiAtSign,FiUser,FiMessageSquare,FiActivity } from "react-icons/fi";


import  './ServiceClient.css';

function Service({utilisateur,email,sujet,commentaire,buttonlabel}){
    return(
        <>
       
            <form className="style">
            <div className="bloc">
            
            <div className="bloc1">
            <FiUser className="icon"/>

            <label className="label1">{utilisateur}</label>
            </div>
            <input className="input1" type="text" />
            
            <div className="bloc1">
            <FiAtSign className="icon"/>
            <label className="label1">{email}</label>
            </div>
            <input className="input1" type="text" />
            
            <div className="bloc1">
            <FiActivity className="icon"/>
            <label className="label1">{sujet}</label> 
            </div>
            <input className="input1" type="text" />
           

            <div className="bloc1">
            <FiMessageSquare className="icon"/>
            <label className="label1">{commentaire}</label> 
            </div>
            <input className="input2" type="text" />

            <button className="btn1">{buttonlabel}</button>
        
        
        </div>
        </form>
        
        </>
    )
}

export default Service;