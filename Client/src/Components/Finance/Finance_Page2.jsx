import React from 'react'
import "./Style_finance.css"
import sec2bottomimg from "../images1/finance.svg"
import shopeeSectionimg2 from "../images1/rp_finance.png"

function Finance_Page2() {
    return (
        <>
            <div id="finance_SECONDSFMD_maindiv">
                <section className="capital_Finance_p2" data-snap-point id="sec2" data-index={2}>
                    <div className="capital_content_finance_p2 ">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <div className="capital_content_text__F2" data-aos="flip-left" data-aos-duration="1100">
                                    <div className="finance_sec2_vl_p2">
                                        <h1 className=" Finance_p2_h1">
                                            Today is the oportunity to build the tomorrow you want.
                                        </h1>
                                    </div>
                                    <p className="FP2__P"> With RPTN's customer-centric digital experience, buisinesses, co-workers, and the community may all
                                        climb to their respective positions. We are focused on cutting-edge new technologies such as
                                        nanotechnology, 5G, blockchain, cybersecurity, artificial intelliegence, and other in order to enable
                                        digital transformation across end-to-end customer requirements. RPTN is a fast growing startup brand,
                                        want to
                                        be ranked among the top IT service providers in the globe. In order to
                                        improve the overall "Human Centric Experience" in our ecosystem
                                        and to stimulate collaborative innovation, we at RPTN are working to</p>
                                    <div className="section_2_bottom_img">
                                        <img className="Finance_section2_bottom_svg" src={sec2bottomimg} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12" id="section_2_img">
                                <div className="rplogo__finance_p2" data-aos="flip-right" data-aos-duration="1100">
                                    <img className='nana' src={shopeeSectionimg2} alt="rpfinance" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="bg__text__finance_p2"> FINANCIAL</h2>
                </section>
            </div>

        </>
    )
}

export default Finance_Page2