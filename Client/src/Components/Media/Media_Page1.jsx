import React from 'react'
import "./Style_media.css"
import dotimagepng from '../images1/dot.png';
import mybtn_rm from "../images1/rmbtn.svg"
import { NavLink } from 'react-router-dom';
import RMBTN from '../RMBTN/RMBTN';

function Media_Page1() {


    return (
        <>
            <div className="media__first_page">
                <img className="buiseness_dot" src={dotimagepng} />
                <div id='media__main'>
                    <p className='media__head' data-aos="fade-left" data-aos-duration="1100">
                        Media
                    </p>

                    <div className='media__news__head' data-aos="fade-right" data-aos-duration="1100">
                        <h2 className='media__news'>
                            Media & News
                        </h2>

                        <p className='media__news__text'>
                            Get the latest news and feature stories on our business, community initiatives, heritage and people. Scroll to read
                        </p>
                    </div>
                
                        <NavLink to="/comingsoon">
                            {/* <img src={mybtn_rm} alt="" className='rm_med_front1122' /> */}
                            <div className='rm_med_front1122'>
                                <RMBTN/>
                            </div>
                        </NavLink>
                   
              


                    <div className="arrow_right32">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>
            </div>

        </>



    )

}



export default Media_Page1