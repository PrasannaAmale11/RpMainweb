import React from 'react'
import news_pic from "../images1/innovative.png"
import news_pic1 from "../images1/indianfin.png"
import news_pic2 from "../images1/youthsuccess.png"

function Media_Page2() {
    return (
        <>

            <div id='Media_sec_two_mainDiv'>
                <h1 className='Latest_News' data-aos="fade-left" data-aos-duration="1100">Latest News</h1>
                <div class="vis_arrow_right1">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div id='Media_SECPage_cards'>
                    <div className='Media_SECPage_sub_cards MCMLTOC' data-aos="zoom-in-left" data-aos-duration="1100" >
                        <img className='MP_picCard1' src={news_pic1} />
                        <p className='RedPhantom_Capital'>
                            RedPhantom Capital Optimistic about rapid growth, digital edeavours,new tactics and new offers.
                        </p>
                        <p className=' India_financial'>
                            India financial sector is growing rapidly with bosth existing firms and new companies. The industry includes commercial banks, insurance businesses, non-banking financial companies, co-ops, pension funds, mutual funds and other small entities.
                        </p>
                    </div>

                    <div className='Media_SECPage_sub_cards MCMLTOC' data-aos="zoom-in-right" data-aos-duration="1100">
                        <img className='MP_picCard1' src={news_pic} />
                        <p className='RedPhantom_Capital'>
                            Innovative Rivalry - In World
                        </p>
                        <p className=' India_financial'>
                            Innovation is the art of Immagination or a new way of doing something or even a new way of thinking. The 8 essential of Innovation are - Aspire, Choose, Discover, Evolve, Accelerate, Scale, Extend and Mobilize. It is about starting something new, small ventures, a new enterprise.
                        </p>
                    </div>

                    <div className='Media_SECPage_sub_cards MCMLTOC' data-aos="zoom-in-left" data-aos-duration="1100" >
                        <img className='MP_picCard1' src={news_pic2} />
                        <p className='RedPhantom_Capital'>
                            I believe RedPhantom will definitely leads young people towards the better world. - <br /> Mr. Sudhakar Rupnar (Founder)
                        </p>
                        <p className=' India_financial'>
                            On the occasion of company opening, the Founder said that We achieve our customers dreams...
                        </p>
                    </div>

                    <div className='Media_SECPage_sub_cards_last' data-aos="fade-left" data-aos-duration="1100" >
                        <div className='side_small_cards pbtodiv'>
                            Innovation is the need of today's time.
                        </div>

                        <div className='side_small_cards1 pbtodiv'>
                            Youth is the valuable human resource of every country
                        </div>

                        <div className='side_small_cards2'>
                            Nanotechnology : A small solution to a big problem
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Media_Page2