import React from 'react'
import "./Style_CAR.css"
import readbtn from "../images1/rmbtn.svg"
import RMBTN from '../RMBTN/RMBTN';

function Career_Page2() {
    return (
        <>

            <div id='CP_second_sec_main_page'>
                <h2 className='WORKING' >WORKING</h2>
                <h1 className='We_Are_RedPhantom_CP2'data-aos="fade-right" data-aos-duration="1100">We Are RedPhantom</h1>
                <div className="vis_arrow_right11">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                <div id='CP_second_sec_three_cards'>
                    <div className='CP_second_sec_three_cards_sunCard TC_C1' >
                        <div className='Card_div_under_sub_1'>
                            <p className='For_more_than_40'>For more than 40 years, RP Transportation has provided safe,reliable, affordable transportation services to cities, counties,municipalities, and other jurisdictional entities, as well as private corporations, non-profit agencies, and community organizations.</p>
                            <h2 className='hashtag_jobs'>Job</h2>
                        </div>
                        <div className="triangle-down"></div>

                        <div className='Card_div_under_sub_2'>
                            <h2 className='Opprtunities'>Oppurtunities</h2>
                            <p className='We_do_not_charge'>We do not charge / accept any amount or security deposit from job seekers during the selection process or while inviting candidates for an interview. Read disclaimer.</p>
                        </div>
                    </div>

                    <div className='CP_second_sec_three_cards_sunCard TC_C2' >
                        Experience a fulfilling career, work-life balance, adherence to a high standard of values and ethics and be a part of the Tata global workforce comprising of more than 935,000 people. <br /><br />
                        Experience a fulfilling career, work-life balance, adherence to a high standard of values and ethics and be a part of the Tata global workforce comprising of more than 935,000 people. <br /><br />
                        Browse available opportunities with one of the many Tata group companies, and across a range of professions - from B737 airline pilots to entry-level customer service representatives, across verticals, with varying levels of experience, competencies and skills - at one single place. <br /><br />
                        Tata group companies in this list include Tata Steel, Air India, Tata Consultancy Services, Tata Motors, Indian Hotels, Tata Chemicals, Infiniti Retail (Croma), Tata Communications, Titan Company, Tata Capital, Tata AIG, Tata AIA Life, Jaguar Land Rover. <br /><br /><br />
                        {/* <img className='carr_text_rmbtn' src={readbtn} /> */}

                        <div className='carr_text_rmbtn'>
                            <RMBTN />
                        </div>

                    </div>

                    <div className='CP_second_sec_three_cards_sunCard TC_C3' >

                        <div className='Card_div_under_sub_3'>
                            <h2 className='Programs'>Programs</h2>
                            <p className='Explore_a_career'>Explore a career with the RedPhantom group. Browse and search for jobs with over Four Redphantom companies.</p>
                        </div>

                        <div className="triangle-up"></div>

                        <div className='Card_div_under_sub_4'>
                            <h2 className='hashtag_career'>Career</h2>
                            <p className='FMT_40_year'>For more than 40 years, RP Transportation has provided safe,reliable, affordable transportation services to cities, counties,municipalities, and other jurisdictional entities, as well as private corporations, non-prot agencies, and community organizations.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Career_Page2