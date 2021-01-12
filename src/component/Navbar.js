import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import {MdFingerprint} from 'react-icons/md';
import {FaBars,FaTimes} from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
function Navbar (){
    const [click,setClick]=useState(false);
    const [button,setButton]=useState(true)
    const handleClick=()=> setClick(!click)
    const closeMobileMenu=()=>setClick(false)
    const ShowButton=()=>{
        if (window.innerWidth<=960){
            setButton(false)
        }else{
            setButton(true)
        }
        useEffect(()=>{
            ShowButton();
        },[]);
    }
    return (
        <>
        <div className="navbar">
            <div className="navbar-container container">
             <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
             <MdFingerprint className="navbar-icon"/>
             BUY <span className="s1">ME.tn </span>  </Link>
        <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes/> : <FaBars/>}
            </div>     
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                A propos
            </Link>
            </li>
             <li className="nav-item">
            <Link to='/home' className="nav-links" onClick={closeMobileMenu}>
                Home
            </Link>
             </li>
             <li className="nav-item">
            <Link to='/categories' className="nav-links" onClick={closeMobileMenu}>
                Categorie
            </Link>
             </li>
             <li className="nav-item">
            <Link to='/membres' className="nav-links" onClick={closeMobileMenu}>
                Membres
            </Link>
             </li>
             <li className="nav-item">
            <Link to='/service client' className="nav-links" onClick={closeMobileMenu}>
                Service Client
            </Link>
             </li>
             <li className="nav-item">
            <Link to='/offre' className="nav-links" onClick={closeMobileMenu}>
                Offre
            </Link>
             </li>
             <li className="nav-btn">
                 {button ?(
                     <Link to='/sign-up' className="btn-link">
                      <Button buttonStyle='btn--outline'>SIGN UP</Button>   
                     </Link>
                 ):(
                     <Link to='/sign-up' className="btn-link"
                      onClick={closeMobileMenu}>
                         <Button buttonStyle='btn--outline'
                         buttonSize='btn--mobile'
                         >SIGN UP</Button>
                     </Link>
                 )}
             </li>
            </ul>
        </div>
        </div>
        </>
    )
}

export default Navbar;  