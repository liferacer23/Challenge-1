import React from 'react'
import '../App.css'
import cart_image from '../images/icon-cart.svg';
import avatar_image from '../images/image-avatar.png';
import { NavLink } from "react-router-dom";
export default function Nav() {
    return (
        <div >
        <nav className="navbar">
            <div className="nav-item-container-left">
            <NavLink className="nav-item-logo" to="./">sneakers</NavLink>
            <NavLink className="nav-item" to="./">Collections</NavLink>
            <NavLink className="nav-item" to="./">Men</NavLink>
            <NavLink className="nav-item" to="./">Women</NavLink>
            <NavLink className="nav-item" to="./">About</NavLink>
            <NavLink className="nav-item" to="./">Contact</NavLink>
            </div>
            <div className="nav-item-container-right">
            <NavLink className="nav-item-cart" to="#"><img className='cart-img' src={cart_image} alt="" /></NavLink>          
            <NavLink className="nav-item-img" to="#"><img className='avatar-img' src={avatar_image} alt="" /></NavLink>          
            </div>
        </nav>
    </div>
    )
}
