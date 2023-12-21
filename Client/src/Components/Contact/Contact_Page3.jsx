import React from 'react'
import "./Style_Contact.css"
import fb from "../images1/facebook.svg"
import insta from "../images1/instagram.svg"
import whats from "../images1/whatsapp.svg"
import you from "../images1/youtube.svg"
import twi from "../images1/twitter.svg"

function Contact_Page3() {
    return (
        <>
            <section className="section_3" data-snap-point id="sec3" data-index="3">
                {/* <h1 className="section_2_text"> SOCIAL MEDIA </h1> */}
                <h1 className=" section_2_title ssmm" data-aos="zoom-out" data-aos-duration="1100"> SOCIAL MEDIA </h1>
                <div className="social_media">
                    <div className=" d-md-block">
                        <div className="social_media_content">
                            <a className="insta_anc_tag" href="https://www.instagram.com/redphantomgroup/" target="_blank">
                                <div className="logo_container">
                                    <p className="icon_bg"> <img className='inner_logoes' src={insta} /> </p> <b className='de_none'>Instagram</b>
                                </div>
                            </a>
                            <a className="insta_anc_tag" href='https://www.facebook.com/redphantomgroup/?ref=pages_you_manage' target='_blank'>
                                <div className="logo_container">
                                    <p className="icon_bg"> <img className='inner_logoes' src={fb} /> </p> <b className='de_none'>Facebook</b>
                                </div>
                            </a>
                            <a className="insta_anc_tag" href="https://wa.me/+919172912622" target="_blank" >
                                <div className="logo_container">
                                    <p className="icon_bg"> <img className='inner_logoes' src={whats} /> </p> <b className='de_none'>Whatsapp</b>
                                </div>
                            </a>
                            <a className="insta_anc_tag" href="https://www.youtube.com/channel/UC3CbP6ZDRtyvweBc3966lxw" target="_blank">
                                <div className="logo_container">
                                    <p className="icon_bg"> <img className='inner_logoes' src={you} /> </p> <b className='de_none'>Youtube</b>
                                </div>
                            </a>
                            <a className="insta_anc_tag" href="https://twitter.com/redphantomgroup" target="_blank">
                                <div className="logo_container">
                                    <p className="icon_bg"> <img className='inner_logoes' src={twi} /> </p> <b className='de_none'>Twitter</b>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <script src="https://maps.googleapis.com/maps/api/js?client=google-maps-embed&amp;paint_origin=&amp;libraries=geometry,search&amp;v=3.exp&amp;language=en_IN&amp;callback=onApiLoad" nonce="" async="" defer=""></script>
                <div className="section_2_form">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <h1 id="section_3_title"> CONTACT US </h1>
                            <div className="section_3_content">
                                <p className='section_3_content_p'>RedPhantom Group</p>
                                <p style={{ textAlign: "center" }}>
                                    GAT NO.52/1B, PLOT NO.6, SAVARKAR NAGAR, <br /> B/HDAK BUNGL ,PANDHARPUR <br />Solapur, MH 413304, INDIA</p>
                                <a className='getDirection section_3_content_a' target='_blank' href="https://www.google.com/maps/dir//RedPhantom+Group+of+Industries+Savarkar+Nagar,+Mangalvedhekar+Pandharpur,+Maharashtra+413304+India/@17.6673906,75.306448,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3bc4178a8fc4ea0f:0xc0e7159913822c66">
                                    <p className='gd'> Get Direction </p>
                                </a>
                                <p style={{textAlign:"center"}}>Enquiries<br /> <a className='mail_karo' href="mailto:inquiry@redphantomgroup.com?subject = Feedback&body = Message">
                                    inquiry@redphantomgroup.com</a> </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 " >
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8367.153951370445!2d75.30836555575986!3d17.669749190020976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc4178a8fc4ea0f%3A0xc0e7159913822c66!2sRedPhantom%20Group%20of%20Industries!5e0!3m2!1sen!2sus!4v1688539520359!5m2!1sen!2sus"

                                width="100%" height="100%" style={{ border: "0" }} allowfullscreen="" loading="lazy"

                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact_Page3