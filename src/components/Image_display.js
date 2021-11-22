import React,{useState} from 'react'
import "../App.css";
import Image_carousel from "./Image_carousel";

export default function Image_display({selected,carousel,setCarousel}) {
    

    const toggle =()=>{
        setCarousel(!carousel)
    }
    return (
        
        <div className="image-display" onClick={toggle}>
            <img className="image-displayed" src={selected} alt="" />
        </div>
  
    )
}
