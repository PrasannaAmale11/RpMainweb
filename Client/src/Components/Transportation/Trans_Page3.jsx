import React from 'react'
import slideimg11 from "../images1/yellow_helmet.jpg"
import slideimg12 from "../images1/Transportation2-min.jpg"
import slideimg13 from "../images1/Transportation-min.jpg"



function Trans_Page3() {
    return (

        <section className="section3 bg-black" data-fss-anchor="view-2" id="Section3" data-snap-point data-index={3}>
            <div className="also_read_carousel ">
                <div className="section3_also_read_btn">
                    <h1 className="gradient_text section3_h1"data-aos="fade-right" data-aos-duration="1100">Also Read </h1>
                    <div className id="sec3_btn_animation">
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
                <div style={{ width: '850px', marginLeft: '10%' }} className="pt-5 pb-5 ECOM__PAGE3__DS ">
                    <div className="row">
                        <div className="col-12" id="carousal_card">
                            <div className="left_arrow">
                                <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                                    <i className="fa fa-arrow-left" />
                                </a>
                            </div>
                            <div id="carouselExampleIndicators2" className="carousel  " data-bs-interval="2000" data-ride="carousel" >
                                <div className="carousel-inner">
                                    <div className="carousel-item active ">
                                        <div className="row">
                                            <div className="col-12" id="carousel_col_12">
                                                <div className="card mb-3" id="slider_card">
                                                    <img className="img-fluid111 slide"  id="img-fluid" alt="100%x280" src={slideimg11} />
                                                    <div className="card-body" id="card-body">
                                                        <div className="card-content slide  "   data-bs-interval="2000" id="card-content">
                                                            <h3 className="card-title" id="card-title"> RedPhantom Capital </h3>
                                                            <p className="card-text" id="card-text">
                                                                For more than 40 years, RP Transportation has provided safe, reliable, affordable

                                                                organisations.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-12" id="carousel_col_12">
                                                <div className="card mb-3" id="slider_card">
                                                    <img className="img-fluid111 slide" id="img-fluid" alt="100%x280" src={slideimg12} />
                                                    <div className="card-body" id="card-body">
                                                        <div className="card-content slide" id="card-content">
                                                            <h3 className="card-title" id="card-title"> RedPhantom Capital </h3>
                                                            <p className="card-text" id="card-text">
                                                                For more than 40 years, RP Transportation has provided safe, reliable, affordable
                                                                transportation services to cities, countries, municipalties and other jurisdiction

                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-12" id="carousel_col_12">
                                                <div className="card mb-3" id="slider_card">
                                                    <img className="img-fluid111 slide" id="img-fluid" alt="100%x280" src={slideimg13} />
                                                    <div className="card-body " id="card-body">
                                                        <div className="card-content slide" id="card-content">
                                                            <h3 className="card-title" id="card-title"> RedPhantom Capital </h3>
                                                            <p className="card-text" id="card-text">
                                                                For more than 40 years, RP Transportation has provided safe, reliable, affordable
                                                                transportation services to cities, countries, municipalties and other jurisdiction
                                                                entities, as well as private corporation, non profit agencies, and community
                                                                organisations.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-12" id="carousel_col_12">
                                                <div className="card mb-3" id="slider_card">
                                                    <img className="img-fluid111 slide" id="img-fluid" alt="100%x280" src={news_pic} />
                                                    <div className="card-body" id="card-body">
                                                        <div className="card-content slide" id="card-content">
                                                            <h3 className="card-title" id="card-title"> RedPhantom Capital </h3>
                                                            <p className="card-text" id="card-text">
                                                                as well as private corporation, non profit agencies, and community
                                                                organisations.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="right_arrow">
                                <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">                                    <i className="fa fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div></section>
    )
}

export default Trans_Page3