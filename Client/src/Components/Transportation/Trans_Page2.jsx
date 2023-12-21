import React from 'react'
import "./Style_Trans.css"
import cap_man from "../images1/Rp_logo-01-min.png"

function Trans_Page2() {
  return (
    <>
      <div id='TRA_second_sec_main_div'>
        {/* <div className='two_sec_com_div'> */}
        <div className='two_sec_first_main'>
          <img className='capman_img' src={cap_man} data-aos="zoom-in" data-aos-duration="1100"/>
        </div>

        <div className='two_sec_second_main' data-aos="zoom-out" data-aos-duration="1100">
          <h2 className='CYBTWP_clrtext'><span className='C'>C</span>onnecting Your Business To a World of Possibilities</h2>

          <p className='CYBTWP_simple_justify'>With RPTN's customer-centric digital experience, buisinesses, co-workers, and the community may all climb to their respective positions. We are focused on cutting-edge new technologies such as nanotechnology, 5G, blockchain, cybersecurity, artificial intelliegence, and other in order to enable digital transformation across end-to-end customer requirements. RPTN is a fast growing startup brand, want to be ranked among the top IT service providers in the globe. In order to improve the overall "Human Centric Experience" in our ecosystem and to stimulate collaborative innovation, we at RPTN are working to</p>
         

        </div>
        {/* </div> */}

        <h2 className='IMAGINATION_SECSEC'>IMAGINATION</h2>
        <h2 className='INNOVATIVE_SECSEC'>INNOVATIVE</h2>
      </div>

    </>
  )
}

export default Trans_Page2