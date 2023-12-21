import React from 'react'
import "./Style_Ecom.css"
import shopeeSectionimg2 from "../images1/Rp_logo-02-min.png"


function Ecom_Page2() {
  return (
    <section className="capital" data-fss-anchor="view-1" id="Section2" data-snap-point data-index={2}>
      <div className="tec">
        <h2 className="tec__H1"> INOVATIVE </h2>
      </div>
      <div className="capital_content ">
        <div className="row">
          <div className="col-lg-6 col-sm-12" id="section_2_img_left">
            <div className="rplogo_left ">
              <img className="rplogo__left__img" src={shopeeSectionimg2} alt="rpfinance" data-aos="zoom-out-left" data-aos-duration="1100" />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12" data-aos="zoom-in-right" data-aos-duration="100">
            <div className="capital_content_text_right">
              <div className="shopee_sec2_vl">
                  GLOBAL  ECOMMERCE SATISFACTION GARUNTEED
              </div>
              <p className="capital_content_text_right_p"> With RPTN`s customer-centric digital experience, buisinesses, co-workers, and the community may all
                climb to their respective positions. We are focused on cutting-edge new technologies such as
                nanotechnology, 5G, blockchain, cybersecurity, artificial intelliegence, and other in order to enable
                digital transformation across end-to-end customer requirements. RPTN is a fast growing startup brand,
                want to
                be ranked among the top IT service providers in the globe. In order to
                improve the overall "Human Centric Experience" in our ecosystem
                and to stimulate collaborative innovation, we at RPTN are working to</p>

            </div>
          </div>
        </div>
      </div>
      <h2 className="bg_text_fn"> SHOPEE </h2>
    </section>
  )
}

export default Ecom_Page2