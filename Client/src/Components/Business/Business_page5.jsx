import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Style_BSN.css';
// import sliderImage1 from "../images1/background1.jpg"
// import sliderImage2 from "../images1/background2.jpg"
// import sliderImage3 from "../images1/background3.jpg"


const Bussiness_Page5 = () => {
    const slides = [
        {
            imageUrl: "/images/OurBrands1-min.jpg",
            mainHead: "Our Brands",
            brandBtn: "Our Upcoming Projects..",
            title: "Creating Innovative Future with trending Technology",
            description: "For more than 40 years, RP Transportation provided safe,reliable, affordable transportation services to cities, countries,municipalies, and other juridictiona entities, as well as private corporations, non-profit agencies,and community organizations.",
            hash: "imaginationtoinnovation",
            sliderNo: 1,
            sliderNo1: 3,
        },
        {
            imageUrl: "/images/OurBrands2-min.jpg",
            mainHead: "Our Brands",
            brandBtn: "Our Upcoming Projects..",
            title: "Creating Innovative Future  with trending Technology",
            description: "For more than 40 years, RP Transportation provided safe,reliable, affordable transportation services to cities, countries,municipalies, and other juridictiona entities, as well as private corporations, non-profit agencies,and community organizations.",
            hash: "imaginationtoinnovation",
            sliderNo: 2,
            sliderNo1: 3,
        },
        {
            imageUrl: "/images/OurBrands3-min.jpg",
            mainHead: "Our Brands",
            brandBtn: "Our Upcoming Projects..",
            title: "Creating Innovative Future  with trending Technology",
            description: "For more than 40 years, RP Transportation provided safe,reliable, affordable transportation services to cities, countries,municipalies, and other juridictiona entities, as well as private corporations, non-profit agencies,and community organizations.",
            hash: "imaginationtoinnovation",
            sliderNo: 3,
            sliderNo1: 3,
        },
    ];



    const
        CustomPrevArrow = ({ onClick, isEdge }) => (<button onClick={onClick} className={`carousel-arrow ${isEdge ? 'disabled' : ''}`}> Prev </button>); const
            CustomNextArrow = ({ onClick, isEdge }) => (<button onClick={onClick} className={`nextArrow carousel-arrow ${isEdge ? 'disabled' : ''}`}> Next </button>);
    return (
        <Carousel infiniteLoop autoPlay showArrow={false} showIndicators={false} showThumbs={false} interval={5000}
            renderArrowPrev={(onClickHandler, hasPrev,) => hasPrev && (<CustomPrevArrow onClick={onClickHandler} isEdge={!hasPrev} />)} renderArrowNext={(onClickHandler, hasNext,) => hasNext && (<CustomNextArrow onClick={onClickHandler} isEdge={!hasNext} />)} renderIndicator={(onClickHandler, isSelected, index,) => (<button className={`carousel-indicator ${isSelected ? 'selected' : ''}`}
                onClick={onClickHandler} key={index} > {index + 1} </button>)} showStatus={false} preventMovementUntilSwipeScrollTolerance={true}
            swipeScrollTolerance={50}
            className='business_slider4'
        >
            {slides.map((slide, index) => (
                <div key={index} className="BNS__slide5">
                    <div  id='brandmaindiv' style={{ backgroundImage: `url(${slide.imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                        {/* <img className='brand_dotedimg' src={doted_img} /> */}
                        <div className='brandarrow' >
                            <h1 className='obrand' data-aos="fade-right" data-aos-duration="1100">{slide.mainHead}  </h1>
                            <div className="vis_arrow_right5">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div data-aos="fade-right"data-aos-duration="1100" className='Our_Upcoming_Projects' >
                            <p className='upcoming BNS__slide5__p'> {slide.brandBtn}</p>
                            <div className='creatediv'>
                                <h2 className='createdivhead BNS__slide5_h2'>{slide.title}</h2>
                                <p className='createdivtext BNS__slide5__p'>
                                    {slide.description}
                                </p>
                            </div>
                            <h3 className='imaino'>{slide.hash}</h3>
                        </div>
                        
                        <div className='bg_No'>
                            <span className='bg_NAV_No' style={{ zIndex: 9, color: "white" }}> <span className='slash1'>{slide.sliderNo}</span>/<span className='slash2'>{slide.sliderNo1}</span> </span>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default Bussiness_Page5;
