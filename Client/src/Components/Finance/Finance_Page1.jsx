import React from 'react'
import "./Style_finance.css"
import dot from "../images1/dot.png"
import RMA from "../images1/rmbtn.svg"
import { NavLink } from "react-router-dom"
import RMBTN from '../RMBTN/RMBTN'

function Finance_Page1() {
  return (
    <>
      <div id="finance_FIRSTSFMD_maindiv">
        <section className="buisenss " id="finance" data-snap-point data-index={1}>
          <div className>
            <img className="buiseness_dot" src={dot} />
            <div className="content__Finance" id="content_left">
              <h2 className="containerbackground_5">
                #3
              </h2>
              <p className="buisenss_btn" data-aos="fade-right" data-aos-duration="1100"> Finance </p>
              <h2 className=" Finance_title" data-aos="fade-left" data-aos-duration="1100"> RedPhantom Capital </h2>
              <div className="content__border__Finance" data-aos="zoom-out-down" data-aos-duration="1100">
                <h2 className='CBR__Finance_h3'> India's Financial Revolution </h2>
                <p className='CBR__Finance_P'> For more than 40 years, RP Transportation has provided safe, reliable, affordable transportation
                  services to cities, countries,.municipalties and other jurisdiction entities, as well as private
                  corporation, non profit agencies, and community organisations. </p>
              </div>
              <b className="gradient_text CBR__Finance_B" data-aos="zoom-out-down" data-aos-duration="1100">rptechnovelty</b>

              <div style={{width:'100%'}}>
              <NavLink to="/comingsoon">
                <div className="read_fin">
                  <RMBTN />
                </div>
              </NavLink>
              </div>
            </div>
            <div className="arrow_right__Finance">
              <span />
              <span />
              <span />
            </div>
            <h2 className="bg__text__Finance_Tech">FINANCE </h2>
          </div>
        </section>
      </div>

    </>
  )
}

export default Finance_Page1