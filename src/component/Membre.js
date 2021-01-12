import React from 'react'
import {Link} from 'react-router-dom';
import { FiUnlock,FiUser,FiPhoneCall,FiMail,FiLock} from "react-icons/fi";
import { BiGlobe } from "react-icons/bi";
import { Button } from './Button';

import './Membre.css'


function Membre ({nom,email,tel,pays,password,valider,connecter,utilisateur}){
    return(
        <>
        <form className="style">
            <div className="bloc">
           
            <div className="bloc1">
            <FiUser className="icon"/>
            <label className="label1">{nom}</label>
            </div>
            <input className="input1" type="text" />
            
            <div className="bloc1">
            <FiMail className="icon"/>
            <label className="label1">{email}</label>
            </div>
            <input className="input1" type="text" />
            
            <div className="bloc1">
            <FiPhoneCall className="icon"/>
            <label className="label1">{tel}</label> 
            </div>
            <input className="input1" type="text" />
           
            <div className="bloc1">
            <BiGlobe className="icon"/>
            <label className="label1">{pays}</label> 
            </div>
            <input className="input1" type="text" />
           
            <div className="bloc1">
            <FiLock className="icon"/>
            <label className="label1">{password}</label>
            </div>
            <input className="input1" type="password" />
            <Button  buttonStyle="btn--primary"  buttonColor="blue">{valider}</Button>
            
          </div>
        </form>

        </>
    )
}
export default Membre;