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
      <img className="close"  onClick={close_carousel} src={close} alt="" />

      <div className="image-carousel-display">
        <img className="previous" src={previous} alt="" />
        <img className="image-displayed" src={selected} alt="" />
        <img className="next" src={next} alt="" />
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
