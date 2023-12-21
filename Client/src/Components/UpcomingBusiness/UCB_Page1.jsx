import React from 'react'
import "./Style_UPB.css"
import mybtn from "../images1/rmbtn.svg"
import { NavLink } from 'react-router-dom'
import dotimagepng from "../images1/dot.png"
import RMBTN from '../RMBTN/RMBTN'

function UCB_Page1() {
    return (
        <>

            <div id='UCB_firstpage_main_div'>
                {/* <img className="hey_dot" src={dotimagepng} /> */}
                <p className='Upcoming_Businesses' data-aos="fade-left" data-aos-duration="1100">Upcoming Businesses</p>

                <div className='UCB_sideborder_maindiv' data-aos="fade-right" data-aos-duration="1100">
                    <h2 className='UCB_sideborder_subdiv1'>We are expanding our business on a global scale, as the best business partner</h2>
                    <p className='UCB_sideborder_subdiv2'>For more than 40 years, RP Transportation has provided safe
                        reliable, affordable transportation services to cities, counties
                        municipalities, and other jurisdictional entities, as well as
                        private corporations, non-profit agencies and community organizations
                    </p>
                </div>

                <p className='UPB_readmore' data-aos="fade-right" data-aos-duration="1100">
                    <NavLink to="/comingsoon">
                        {/* <img className='btn_rm ' src={mybtn} /> */}
                        <RMBTN />
                    </NavLink>
                </p>

                <div className="arrow_right_UCB">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </>
    )
}

export default UCB_Page1