import React from 'react'
import "./Style_BSN.css"
import my_img1 from "../images1/4th1.png"
import my_img2 from "../images1/4th2.png"
import my_img3 from "../images1/4th3.png"
import my_img4 from "../images1/4th4.png"
import my_img5 from "../images1/4th5.png"

function Business_page4() {
    return (
        <>

            <div id='mainlatestdiv'>
                <h1 className='latest' data-aos="fade-right" data-aos-duration="1100"> Latest Updates </h1>
                <div className="vis_arrow_right4">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className='newscard'>
                    <div className='subnewscard GSMTOME ppllpp' data-aos="flip-up" >
                        <img className='pic1' alt='' src={my_img1} />
                        <h3 className='headings'>
                            <a className='go_their' href='https://www.facebook.com/redphantomgroup/?ref=pages_you_manage' target='_blank' >Facebook</a>
                        </h3>
                        <div className='subcolorcardtext2'>
                            For more than 40 years, RP Transportation provided safe,reliable
                            reliable, affordable transportation services to cities, countries,
                            municipalies, and other juridictiona entities, as well
                            as private corporations, non-profit agencies,
                            and community organizations.
                        </div>
                    </div>

                    <div className='subnewscard gradsub GSMTOME' data-aos="flip-down">
                        <h3 className='headings'>
                            <a className='go_their' href="https://twitter.com/redphantomgroup" target="_blank" >Twitter</a>
                        </h3>
                        <div className='subcolorcardtext2'>
                            For more than 40 years, RP Transportation provided safe,reliable
                            reliable, affordable transportation services to cities, countries,
                            municipalies, and other juridictiona entities, as well
                            as private corporations, non-profit agencies,
                            and community organizations.
                        </div>
                        <img className='pic2' src={my_img2} alt='' />
                    </div>

                    <div className='subnewscard GSMTOME ppllpp' data-aos="flip-up">
                        <img className='pic3' src={my_img3} alt='' />
                        <h3 className='headings'>
                            <a className='go_their' href='https://www.linkedin.com/company/redphantom/' target='_blank'>Linkedin</a>
                        </h3>
                        <div className='subcolorcardtext2 rarara'>
                            For more than 40 years, RP Transportation provided safe,reliable
                            reliable, affordable transportation services to cities, countries,
                            municipalies, and other juridictiona entities, as well
                            as private corporations, non-profit agencies,
                            and community organizations.
                        </div>
                    </div>

                    <div className='subnewscard gradsub' data-aos="flip-down">
                        <h3 className='headings'>
                            <a className='go_their' href="https://www.instagram.com/redphantomgroup/" target="_blank">Instagram</a>
                        </h3>
                        <div className='subcolorcardtext2'>
                            For more than 40 years, RP Transportation provided safe,reliable
                            reliable, affordable transportation services to cities, countries,
                            municipalies, and other juridictiona entities, as well
                            as private corporations, non-profit agencies,
                            and community organizations.
                        </div>
                        <img className='pic4' src={my_img4} alt='' />
                    </div>
                </div>

                <div className='anything'>
                    <div><img className='anyimg' src={my_img5} /></div>
                    <div className='subanything'>
                        <h2 className='niimpossible'>Nothing is impossible, the world itself says ' I'am possible '! ...</h2>
                        <p className='niimpossibletext'>The RedPhantom flag is raised in all fields, including technology and agriculture.</p>
                    </div>
                </div>


            </div>


        </>
    )
}

export default Business_page4