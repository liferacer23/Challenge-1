import React from "react";
import "../App.css";
import { useState } from "react";
import { motion} from 'framer-motion';
import image1 from "../images/image-product-1.jpg";

import image2 from "../images/image-product-2.jpg";

import image3 from "../images/image-product-3.jpg";

import image4 from "../images/image-product-4.jpg";
import Image_display from "./Image_display";
import Image_carousel from "./Image_carousel";
export default function Home() {
  const images = [image1, image2, image3, image4];

  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState(image1);
  const [carousel_display,setCarousel_Display]=useState(false);
  const image_change = (i) => {
    setSelected(images[i]);
    setActive(i);
  };
  
  return (
    <>
      <div className="body-container">
        <div className="image-section">
          <Image_display carousel={carousel_display} setCarousel={setCarousel_Display} active={active} selected={selected} />
          <div className="image-choices">
            {images.map((elements, id) => {
              return (
                <img
                  key={id}
                  onClick={() => {
                    image_change(id);
                  }}
                  className={`image-choice ${active === id ? "selected" : ""}`}
                  src={elements}
                  alt=""
                />
              );
            })}
          </div>
        </div>
        <div animate={{fontSize:30}} className="info-section">
          <h5 >Sneaker Company</h5>

          <h1>Fall Limited Edition</h1>
          <h1> Sneakers</h1>

          <p className="description">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          <section>
            <h2>$125.00</h2> <h4>50%</h4>
          </section>

          <span>$250.00</span>

          <div className="buttons">
            <button className="amount-btn">+</button>
            <button className="amount-btn amount" disabled>
              0
            </button>
            <button className="amount-btn">-</button>
            <button className="add-btn">
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20">
                <path
                  className="svg"
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#ffff"
                  fill-rule="nonzero"
                />
              </svg>{" "}
              Add to cart
            </button>
          </div>
        </div>
      </div>

      < Image_carousel carousel={carousel_display} setCarousel={setCarousel_Display}/>
      
    </>
  );
}
