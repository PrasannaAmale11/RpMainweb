import React from 'react'
import "./Style_Contact.css"
import dotimagepng from "../images1/dot.png"
import rm_con from "../images1/rmbtn.svg"
import { NavLink } from 'react-router-dom'
import RMBTN from '../RMBTN/RMBTN'

function Contact_Page1() {
    return (
        <>
            <div className="contact__first_page">
                <img className="buiseness_dot" src={dotimagepng} />
                <div id='contact__main'>
                    <p className='contact__head' data-aos="fade-left" data-aos-duration="1100">
                        Contact Us
                    </p>
                    <div className='contact__heads' data-aos="fade-right" data-aos-duration="1100">
                        <h2 className='contact__news' >
                            Connect With Us
                        </h2>
                        <p className='contact__desc' >
                            True connection is what is takes to
                            be successful in today`s world
                        </p>
                    </div>
                    <div className='Helpline__main' data-aos="fade-up" data-aos-duration="1100">
                        <h2 className="contact__news">
                            RedPhantom Helpline
                        </h2>
                        <p className='contact__desc'>
                            Toll Free: +91 917 291 2622 <br />
                            https://help@redphantom.com
                        </p>
                    </div>

                    <NavLink to="/comingsoon">
                        {/* <img className='con_rm_btn ' src={rm_con} /> */}
                       <div id="con_rm_btn">
                       <RMBTN  />
                       </div>
                    </NavLink>

                    <div className="arrow_right_con1"> <span></span> <span></span> <span></span> </div>
                    {/* <h1 className="bg__text__tn" > FOLLOW US </h1> */}
                </div>
            </div>

        </>
    )
}

export default Contact_Page1