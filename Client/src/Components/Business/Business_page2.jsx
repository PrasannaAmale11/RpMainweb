import React from 'react'
import "./Style_BSN.css"
import Card_EXP from './Cards_EXP'

function Business_page2() {
    return (
        <>
            <div id='BSN_second_sec_mainDiv'>
                <h1 className='BSN_secpage_colorText' data-aos="fade-right" data-aos-duration="1100">Presence that has an impact
                </h1>
                <div className="vis_arrow_right2_p2">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p className='sec_page_We_work' data-aos="fade-left" data-aos-duration="1100">
                    We work in industries that are essential to the economy. <br />
                    The RedPhantom flag is raised in all fields, including technology and agriculture.
                </p>

                <div id='Sec_page_card_mainDiv'>
                    <Card_EXP />
                </div>

            </div>

        </>
    )
}

export default Business_page2