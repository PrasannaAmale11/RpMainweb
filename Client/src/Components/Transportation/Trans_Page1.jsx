import React from 'react'
import "./Style_Trans.css"
import { NavLink } from "react-router-dom"
import redport from "../images1/redport.svg"
import mybtn from "../images1/rmbtn.svg"
import dotimagepng from "../images1/dot.png"
import RMBTN from '../RMBTN/RMBTN'

function Trans_Page1() {
    return (
        <>
            <div id='TRN_first_section_MainDiv'>
            {/* <img className="dotted_pic" src={dotimagepng} /> */}
                <div className='comdiv_trans'>
                    <p className='TRN_business' data-aos="fade-right" data-aos-duration="1100">Transportation</p>

                    <h2 className='TRN_RPTN_name' data-aos="fade-left" data-aos-duration="1100"> RedPhantom Transportation </h2>

                    <div className='TRN_SIDEBORDER_MAINDIV' data-aos="fade-right" data-aos-duration="1100">
                        <h2 className='TRN_SIDEBORDER_FIRST'>Connecting Your Business To a World of Possibilities</h2>
                        <p className='TRN_SIDEBORDER_SECOND'>For more than 40 years, RP Transportation has provided safe, reliable, affordable transportation services to cities, countries, municipalties and other jurisdiction entities, as well as private corporation, non profit agencies, and community organisations.</p>
                    </div>

                    <h2 className='TRN_IMTOINO' data-aos="fade-right" data-aos-duration="1100">#imaginationtoinnovation</h2>

                    <p className='TRN_READMORE_FP' data-aos="fade-right" data-aos-duration="1100">
                        <NavLink to="/comingsoon">
                            {/* <img className='trans_rmbtn ' src={mybtn} alt="" /> */}
                            <div className='trans_rmbtn '>
                                <RMBTN />
                            </div>
                        </NavLink>
                    </p>
                </div>

                <img className='redport_svg' src={redport} />

                <div className="arrow_right_Trans">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <h2 className='TRANSPORTATION_trans_sec1'>TRANSPORTATION</h2>

                <h2 className='hashing_2hash'> #2 </h2>
            </div>

        </>
    )
}

export default Trans_Page1