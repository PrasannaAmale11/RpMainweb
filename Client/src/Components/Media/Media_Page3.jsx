import React from 'react'
// import fb from "../images1/facebook.svg"
import insta from "../images1/instagram.svg"
// import whats from "../images1/whatsapp.svg"
import you from "../images1/youtube.svg"
import twi from "../images1/twitter.svg"

function Media_Page3() {
    return (
        <>
            <div id='MP_third_sec_main_div'>

                <h1 className='Social_media_head_CT' data-aos="fade-left" data-aos-duration="1100">Social Media</h1>
                <div class="vis_arrow_right2">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div id='MP_TPS_card_main_div'>
                    <div className='MP_TPS_card_eight_sub_cards MYCA1' data-aos="zoom-in-right" data-aos-duration="1100">
                        {/* <a className='med_logo4' href=''> <img src={insta} /></a> */}
                    </div>

                    <div className='MP_TPS_card_eight_sub_cards MYCA2' data-aos="zoom-in-right" data-aos-duration="1100">
                        <h2 className='hash_RPTN_head'>#RedPhantom Tech Novelty</h2>
                        <h2 className='MD_TANMORE'>Tanaji More : India's Youngest CEO : The person behind the success</h2>
                        <p className='accept_any_amount'>We do not charge / accept any amount or security desposit from job seekers during the selection process or while inviting candidates for an intervoew. Read disclaimer.</p>
                        <a className='med_logo1' href=''> <img src={insta} /></a>
                    </div>


                    <div className='MP_TPS_card_eight_sub_cards MYCA3' data-aos="zoom-in-left" data-aos-duration="1100">
                        <h2 className='Make_Changes'>Make Changes in a future : <a className='med_logo3'><img src={twi} /></a> </h2>
                        <p className='Emp_At_RPTN'>Employees at RedPhantom work on new ideas, consequences & new technologies, they often achieve global firsts as a result of thei effort. Our technology is improving day by day and tjis will increadbly change on life on human.</p>
                    </div>

                    <div className='MP_TPS_card_eight_sub_cards MYCA4' data-aos="zoom-in-left" data-aos-duration="1100">
                    </div>

                    <div className='MP_TPS_card_eight_sub_cards MYCA5' data-aos="zoom-in-right" data-aos-duration="1100">
                        <h2 className='Make_Changes'>Make Changes in a future : 
                        <a className='med_logo2'><img src={you} /></a>
                        {/* <a className='med_logo2'><img src={fb} /></a>  */}
                        </h2>
                        <p className='Emp_At_RPTN'>Employees at RedPhantom work on the new ideas , consequences & the new technologies, they often achieve global firsts as a result of their effort. </p>
                    </div>

                    <div className='MP_TPS_card_eight_sub_cards MYCA6' data-aos="zoom-in-right" data-aos-duration="1100"> 
                    {/* <a className='med_logo6'><img src={fb} /></a> */}
                    </div>

                    <div className='MP_TPS_card_eight_sub_cards MYCA7' data-aos="zoom-in-left" data-aos-duration="1100"> </div>

                    <div className='MP_TPS_card_eight_sub_cards MYCA8' data-aos="zoom-in-left" data-aos-duration="1100">
                        <h2 className='hash_RPTN_head'>#RedPhantom Tech Novelty  <a className='med_logo7' href=''> <img src={insta} /></a></h2>
                        <h2 className='CHANGE_COL'>Tanaji More : India's Youngest CEO : The person behind the success</h2>
                        <p className='accept_any_amount'>We do not charge / accept any amount or security desposit from job seekers during the selection process or while inviting candidates for an intervoew. Read disclaimer.</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Media_Page3