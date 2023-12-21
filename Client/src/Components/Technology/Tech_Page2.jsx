import React from 'react'
import RPTN_red from "../images1/RP_logo.png"
import sec_pic from "../images1/rp_tech.png"

function Tech_Page2() {
  return (
    <div id='Tech_second_sec_main_div'>

      <h2 className="IMAGINATION">IMAGINATION</h2>
      <h2 className='TECHNOLOGY_P2'>TECHNOLOGY</h2>
      <h2 className='INNOVATIVE'>INNOVATIVE</h2>

      <div className='TECH_fpsub_sec1' data-aos="zoom-out-up" data-aos-duration="1100">
        <h2 className='WE_big'><span className='W'>W</span>e Are Thinking Of A New Approach To Your Current Methods</h2>

        <p className='With_RPTN_SMPT'>With RPTN's customer-centric digital experience, buisinesses, co-workers, and the community may all climb to their respective positions. We are focused on cutting-edge new technologies such as nanotechnology, 5G, blockchain, cybersecurity, artificial intelliegence, and other in order to enable digital transformation across end-to-end customer requirements. RPTN is a fast growing startup brand, want to be ranked among the top IT service providers in the globe.</p>

        <img className='here_is_logoes' src={RPTN_red} data-aos="zoom-in-left" data-aos-duration="1100" / >
      </div >

      <div className='TECH_fpsub_sec2'>
        <img className='sec_page_img' src={sec_pic}  data-aos="zoom-out-down" data-aos-duration="1100"/>
      </div>
    </div>
  )
}

export default Tech_Page2