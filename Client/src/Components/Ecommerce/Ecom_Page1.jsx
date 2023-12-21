import React from 'react'
import "./Style_Ecom.css"
import sec2bottomimg from "../images1/shopee_logo.svg"
import { NavLink } from "react-router-dom"
import dot from "../images1/dot.png"
import RMBTN from '../RMBTN/RMBTN'
// import my_rmEcom from "../images1/rmbtn.svg"

function Ecom_Page1() {
  return (
    <section className=" buisenss" id="shopee" data-snap-point data-index={1}>
      <img className="buiseness_dot" src={dot} />
      <h2 className="hash_four">
        #4
      </h2>
      <div className="section1" id="Section1">
        <div className="content ">
          <p type="button" className="buisenss_btn" data-aos="fade-left" data-aos-duration="1100"> E--Commerce </p>
          <h2 className="gradient_text Ecom__title" data-aos="fade-right" data-aos-duration="1100"> RedPhantom College Shopee </h2>
          <div className="content__border_right" data-aos="fade-right" data-aos-duration="1100">
            <h2 className="cbr_h3">Global E-commerce,Satisfaction Guaranteed </h2>
            <p className="cbr__P"> For more than 40 years, RP Transportation has provided safe, reliable, affordable transportation
              services
              to cities, countries, municipalties and other jurisdiction entities, as well as private corporation, non
              profit agencies, and community organisations. </p>
          </div>
          <h2 className="gradient_text ECContent_b " data-aos="fade-left" data-aos-duration="1100" > imaginationtoinnovation </h2>

          <div className='rm_ecompage1'>
            <NavLink to="/comingsoon">
              {/* <img className='rm_shopee ' src={my_rmEcom} /> */}
              <div className='rm_shopee '>
                <RMBTN />
              </div>
            </NavLink>
          </div>

          <div className="section_2_bottom_img">
            <img className="shopee_section2_bottom_svg" src={sec2bottomimg} />
          </div>
          <div className="arrow_right">
            <span />
            <span />
            <span />
          </div>
          <h2 className="bg_text_tn_ECOm"> E-COMMERCE </h2>
        </div>
      </div>
    </section>
  )
}

export default Ecom_Page1