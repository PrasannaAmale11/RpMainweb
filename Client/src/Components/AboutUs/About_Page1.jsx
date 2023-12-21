import React from 'react'
import rm_btn from "../images1/rmbtn.svg"
import { NavLink } from 'react-router-dom'
import dotimagepng from "../images1/dot.png"
import RMBTN from '../RMBTN/RMBTN'

function About_Page1() {
  return (
    <>

      <div id='ABP_first_page_main_div'>
        {/* <img className="buiseness_dot" src={dotimagepng} /> */}
        <div>
          <p className='Ab_us' data-aos="fade-right" data-aos-duration="1100">About Us</p>
          <div className='bor_at_one_ABP' data-aos="fade-left" data-aos-duration="1100">
            <h2 className='bor_at_one_ABP_head'>A Journey Of Excellence</h2>
            <p className='bor_at_one_ABP_text'>Founded by Mr. Sudhakar Rupnar in 2020,
              the RedPhantom group is a global enterprise,
              headquartered in India, comprising,
              4 companies across india</p>
          </div>

          <NavLink to="/comingsoon">
            {/* <img className='ab_rmbtn ' src={rm_btn} /> */}
            <div className='ab_rmbtn '>
<RMBTN />
            </div>
          </NavLink>

          <div className="arrow_right_Ab">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default About_Page1