import React from 'react'
import "./Style_Over.css"
import circle_image1 from "../images1/circles.png"

function Over_Page2() {
    return (
        <>
            <section  className="about__section2" id="business_overview_sec2" >
                <h2 className="Back__Business_overview__title"> FOUNDER</h2>
                <div className="position-relative">
                    <p className='about__section2__p'> Founded by Mr.Sudhakar Rupnar in 2020, the RedPhantom group is a global enterprise,
                        headquartered in India, comprising 4 companies across india. </p>
                    <p className='about__section2__p'> The group operates in more than 4 countries across six continents, with a mission 'To improve the
                        quality of life of the communities we serve globally, through long-term stakeholder value creation
                        based on Leadership with Trust'.</p>
                    <p className='about__section2__p'>
                        RedPhantom Capital is the principal investment holding company and promoter of RedPhantom
                        companies. Sixty-six percent of the equity share capital of RedPhantom Capital is held by
                        philanthropic trusts, which support education, health, livelihood generation and art and culture
                    </p>
                    <p className='about__section2__p'>
                        In 2021-22, the revenue of RedPhantom companies, taken together, was $1 billion (INR 10 crore)
                        These companies collectively employ over 500 people.
                    </p>
                    <p className='about__section2__p'>
                        Each RedPhantom company or enterprise operates independently under the guidance and
                        supervision of its own board of directors. There are 29 publicly-listed RedPhantom enterprises with
                        a combined market capitalisation of $311 billion (INR 23.6 trillion) as on March 31, 2022
                    </p>
                    <p className='about__section2__p'>
                        Companies include RedPhantom Tech Novelty (IT), RedPhantom Transport, RedPhantom capital
                        (Finance), and RedPhantom College Shopee (E-Commerce)
                    </p>
                    {/* <div className="pos_of_circle">
                        <img src={circle_image1} className="circle_image__business_overview" alt="circle_image" />
                    </div> */}
                </div>
                <h2 className=" back_sud_text">MR. SUDHAKAR RUPNAR</h2>
                <h2 className=" back_2020_text">2020</h2>
            </section>
        </>
    )
}

export default Over_Page2