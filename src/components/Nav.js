import React ,{useState}from 'react'
import '../App.css'
import cart_image from '../images/icon-cart.svg';
import avatar_image from '../images/image-avatar.png';
import delete_button from '../images/icon-delete.svg';
import image1 from "../images/image-product-1.jpg";
import { NavLink } from "react-router-dom";
export default function Nav() {

    const[toggle, setToggle]=useState(true);
    const[profile_select, setProfileSelected]=useState(false);
 
    const change_toggle =()=>{
        setToggle(!toggle);
        setProfileSelected(!profile_select);
    }
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
            <NavLink onClick={change_toggle} className="nav-item-img" to="#"><img className={`avatar-img ${profile_select?'selected':''}`} src={avatar_image} alt="" /></NavLink>          
            </div>
        </nav>
        <div className={`cart ${toggle?'hide':''}`}>
            <h4>Cart</h4>
            <section className="cart-section">
                <img src={image1} className="shoe-in-cart"alt="" />
                <p>Fall limited Edition Sneakers <h6><span>$125 x 3 </span>375$.00</h6></p>
                <img className="delete_button" src={delete_button} alt="" />
            </section>
            <button className="check_out_btn">Check out</button>
        </div>
    </div>
    )
}
