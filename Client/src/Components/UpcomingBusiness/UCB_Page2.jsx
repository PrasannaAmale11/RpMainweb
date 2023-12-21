import React, { useState,useEffect } from "react";
import "./Style_UPB.css";
import { NavLink } from "react-router-dom"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import img1 from "../images1/Automobiles-min.jpg";
import img2 from "../images1/hardware.jpg";
import img3 from "../images1/infra.jpg";
import img4 from "../images1/chemical-min.jpg";
import img5 from "../images1/real_estate.jpg";
import img6 from "../images1/milk.jpg";
import img7 from "../images1/crypto.jpg";
import img8 from "../images1/Hospital.jpg";
import img9 from "../images1/Transportation.jpg";
import img10 from "../images1/Electronic-min.jpg";
import img11 from "../images1/Education.jpg";
import img12 from "../images1/Textile.jpg";
import img13 from "../images1/film.jpg";
import img14 from "../images1/telecom.jpg";
import img15 from "../images1/oil.jpg";

const mainSliderImages = [
  {
    id: 1,
    image: img1,
    head1: "Image 1 Text",
    head2: "Head2",
    para: "lorem10",
  },
  {
    id: 2,
    image: img2,
    head1: "Image 2 Text",
    head2: "Head2",
    para: "lorem10",
  },
  {
    id: 3,
    image: img3,
    head1: "Image 3 Text",
    head2: "Head2",
    para: "lorem10",
  },
  {
    id: 4,
    image: img4,
    head1: "Image 4 Text",
    head2: "Head2",
    para: "lorem10",
  },
  {
    id: 5,
    image: img5,
    head1: "Image 5 Text",
    head2: "Head2",
    para: "lorem10",
  },
  {
    id: 6,
    image: img6,
    head1: "Image 6 Text",
    head2: "Head2",
    para: "lorem10",
  },
  {
    id: 7,
    image: img7,
    head1: "Image 7 Text",
    head2: "Head2",
    para: "lorem10",
  },
  {
    id: 8,
    image: img8,
    head1: "Image 8 Text",
    head2: "Head2",
    para: "lorem10",
  },
  {
    id: 9,
    image: img9,
    head1: "Image 9 Text",
    head2: "Head2",
    para: "lorem10",
  },
  {
    id: 10,
    image: img10,
    head1: "Image 10 Text",
    head2: "Head2",
    para: "lorem10",
  },
  {
    id: 11,
    image: img11,
    head1: "Image 11 Text",
    head2: "Head2",
    para: "lorem10",
  },
  {
    id: 12,
    image: img12,
    head1: "Image 12 Text",
    head2: "Head2",
    para: "lorem10",
  },
  {
    id: 13,
    image: img13,
    head1: "Image 13 Text",
    head2: "Head2",
    para: "lorem10",
  },
  {
    id: 14,
    image: img14,
    head1: "Image 14 Text",
    head2: "Head2",
    para: "lorem10",
  },
  {
    id: 15,
    image: img15,
    head1: "Image 15 Text",
    head2: "Head2",
    para: "lorem10",
  },
];

const smallSliderImages = [
  { id: 1, image: img1, desc: "Automobiles" },
  { id: 2, image: img2, desc: "Hardware" },
  { id: 3, image: img3, desc: "Infrastructure" },
  { id: 4, image: img4, desc: "Chemical" },
  { id: 5, image: img5, desc: "Real Estate" },
  { id: 6, image: img6, desc: "Milk" },
  { id: 7, image: img7, desc: "Crypto" },
  { id: 8, image: img8, desc: "Hospital" },
  { id: 9, image: img9, desc: "Transportation" },
  { id: 10, image: img10, desc: "Electrical" },
  { id: 11, image: img11, desc: "Education" },
  { id: 12, image: img12, desc: "Texttile" },
  { id: 13, image: img13, desc: "Film & Ent." },
  { id: 14, image: img14, desc: "Telecom" },
  { id: 15, image: img15, desc: "Oil" },
  // Add more small slider images as needed
];
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    partialVisibilityGutter: 30,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    autoPlay: true,
  autoPlaySpeed: 2000,
  },
};

const UCB_Page2 = () => {
  const [activeImage, setActiveImage] = useState(mainSliderImages[0]);
  const [smallSliderActiveIndex, setSmallSliderActiveIndex] = useState(0);

  const handleSmallSliderImageClick = (index) => {
    setActiveImage(mainSliderImages[index]);
    setSmallSliderActiveIndex(index);
  };
  useEffect(() => {
    const isMobile = window.innerWidth <= 464; // Define your mobile breakpoint
    let interval;

    if (isMobile) {
      interval = setInterval(() => {
        const nextIndex =
          smallSliderActiveIndex === smallSliderImages.length - 1
            ? 0
            : smallSliderActiveIndex + 1;
        handleSmallSliderImageClick(nextIndex);
      }, 3000); // Adjust the interval time as needed (in milliseconds)
    }
    return () => {
      clearInterval(interval);
    };
  }, [smallSliderActiveIndex]);

  return (
    <div className="Up_slider-container">
      <div className="Up_main-slider">
        <div className="Up_slide">
          {/* <img
            src={activeImage.image}
            alt={activeImage.text}
            className="Up_image"
          /> */}

          <div className="Up_image_main" style={{ boxShadow: 'inset -10px 0 10px -10px black' }}>
            <img
              src={activeImage.image}
              alt={activeImage.text}
              className="Up_image" />
          </div>
          <div className="Up_slider_text">
            <h2 className="Up_text_head1">{activeImage.head1}</h2>
            <h3 className="Up_text_head2">{activeImage.head2}</h3>
            <p className="Up_text_para">{activeImage.para}</p>
          </div>

          <NavLink to="/gallary">
            <button className="view_All_btn">View All</button>
          </NavLink>

        </div>
      </div>


      <div className="Up_small-slider">

        <Carousel
          responsive={responsive}
          swipeable={true}
          initialSlide={2}
          draggable={true}
          showDots={false}
          infinite={true}
          centerMode={true}
          focusOnSelect={true}
          containerClass="show_carousel"
          
        >
          {smallSliderImages.map((image, index) => (
            <div key={image.id}>
              <img
                src={image.image}
                alt={`Small Slider Image ${index + 1}`}
                className={`Up_small-slider-image ${smallSliderActiveIndex === index ? "Up_activeSlideImg active" : ""
                  }`}
                onClick={() => handleSmallSliderImageClick(index)}
              />
              <div
                className={`Up_small_slider_text ${smallSliderActiveIndex === index ? "active" : ""
                  }`}
              >
                <h5 className="Up_small_slider_para">{image.desc}</h5>
              </div>
            </div>
          ))}


        </Carousel>

      </div>


    </div>
  );
};

export default UCB_Page2;
