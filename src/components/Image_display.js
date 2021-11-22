import React,{useRef,useEffect} from 'react'
import "../App.css";
import gsap from 'gsap';
export default function Image_display({active,selected}) {
    
    let image_container = useRef(null);
    let image = useRef(null);
 useEffect(()=>{
    gsap.to(image.current,0.8,{
        delay:0.9,
        opacity:1

    });
 },active)
 

    return (
        <div ref={image_container} className="image-display">
        <img ref={image} className="image-dispalyed" src={selected} alt="" />
    </div>
  
    )
}
