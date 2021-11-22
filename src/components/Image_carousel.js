import React, { useState } from "react";
import '../App.css';
import image1 from "../images/image-product-1.jpg";
import image2 from "../images/image-product-2.jpg";
import image3 from "../images/image-product-3.jpg";
import image4 from "../images/image-product-4.jpg";
import close from "../images/icon-close.svg";
import next from "../images/icon-next.svg";
import previous from "../images/icon-previous.svg";
const images = [image1, image2, image3, image4];

export default function Image_carousel({carousel,setCarousel}) {
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState(image1);
  const image_change = (i) => {
    setSelected(images[i]);
    setActive(i);
  };
  const close_carousel =()=>{
      setCarousel(!carousel);
  }
  return (
    <div className={`image-carousel${carousel?'':'hide'}`}>
      <button className="close"  onClick={close_carousel}>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="orange" fillRule="evenodd"/></svg>
      </button>

      <div className="image-carousel-display">
        <button className="previous"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
        </button>
        <img className="image-displayed" src={selected} alt="" />
        <button className="next">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="18"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
        </button>
        
      </div>
      <div className="image-carousel-choices">
        {images.map((elements, id) => {
          return (
            <img
              key={id}
              onClick={() => {
                image_change(id);
              }}
              className={`image-carousel-choice ${
                active === id ? "selected" : ""
              }`}
              src={elements}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
}
