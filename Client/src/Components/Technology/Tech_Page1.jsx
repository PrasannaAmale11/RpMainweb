import React from 'react'
import { NavLink } from "react-router-dom"
import "./Style_Tech.css"
import mybtn from "../images1/rmbtn.svg"
import dotimg from "../images1/dot.png"
import RMBTN from '../RMBTN/RMBTN'

function Tech_Page1() {
    return (
        <>
            <div id='Tech_first_sec_main_div'>
                 <img className="dotted_pic" src={dotimg}/>
                <h2 className='hash_one_P1'>#1</h2>
                <h2 className='TECHNOLOGY_P1'>TECHNOLOGY</h2>

                <div className='all_com_div'>
                    <p className='TEFP_business' data-aos="fade-right" data-aos-duration="1100">Technology</p>

                    <div className='TEFP_ONSB_MD' data-aos="fade-left" data-aos-duration="1100">
                        <h2 className='TEFP_ONSB_MD_FI'>RedPhantom Tech Novelty</h2>

                        <h2 className='TEFP_ONSB_MD_SE'>Create Innovative Future With Trending Technology</h2>

                        <p className='TEFP_ONSB_MD_TH'>For more than 40 years, RP Transportation has provided safe,
                            reliable, affordable transportation services to cities, countries,.
                            municipalties and other jurisdiction entities, as well as private
                            corporation, non profit agencies, and community organisations.</p>
                    </div>

                    <h2 className='TEFP_ONSB_MD_FOU' data-aos="fade-left" data-aos-duration="1100">rptechnovelty</h2>

                    <p className='TEFP_ONSB_MD_FIF' data-aos="fade-right" data-aos-duration="1100">
                        <NavLink to="/comingsoon">
                            {/* <img className='mamam' src={mybtn} alt="" /> */}
                            <RMBTN />
                        </NavLink>
                    </p>

                    <div className="arrow_right_Tech1">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>


            </div>


        </>
    )
}

export default Tech_Page1