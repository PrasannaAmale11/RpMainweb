import React from 'react'
import { useEffect, useState } from 'react'
import "./Style_CAR.css"
import founder from "../images1/sd1.png"
import youtube from "../images1/yt.svg";

function Career_Page5() {

    const [isOpen, setIsOpen] = useState(false);
    const handleOpenPopup = () => {
        setIsOpen(true)
    }
    const handleClosePopup = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        if (isOpen) { // Add event listener to handle closing popup with ESC key 
            const handleEscKey = (event) => {
                if (event.keyCode === 27) { handleClosePopup(); }
            };
            document.addEventListener('keydown', handleEscKey);
            return () => { document.removeEventListener('keydown', handleEscKey); };
        }
    }, [isOpen]);

    return (
        <>

            <div id='carr_fifth_section_main_div'>
                <div className='carr_fifth_section_sub1' >
                    <h2 className='carAA' data-aos="fade-left" data-aos-duration="1100">The Best Things Of Sucsess Start Now!</h2>
                    <p className='carBB'data-aos="fade-left" data-aos-duration="1100" >We value both your professional accomplishments and your personal interests. Your work and your interests are of equal significance to us.</p>
                    <h2 className='carCC'data-aos="fade-right" data-aos-duration="1100" >Mr. Sudhakar P Rupnar</h2>
                    <p className='carDD'data-aos="fade-right" data-aos-duration="1100"> Founder & Chairman</p>
                </div>

                <div className='carr_fifth_section_sub2'>

                    <img src={founder} alt="" className='founderImg' />
                    <div onClick={handleOpenPopup}>
                        <div className="carrer_youtube_wrapper">
                            <img loading='lazy' className='carrer_youtube' src={youtube} />
                        </div>
                    </div>
                    {/* </a> */}
                    {
                        isOpen && (
                            <div className='popup-container99' style={{ width: "90%", height: "80%", left: "5%", top: "10%" }}>
                                <div className='popup99'>
                                    <button onClick={handleClosePopup} className='close-button99'>
                                        X
                                    </button>
                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6u5InzrpMnI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                            </div>
                        )
                    }
                    <div className="animationP">
                        <span className="circleP circle-1" />
                        <span className="circleP circle-2" />
                        <span className="circleP circle-3" />
                        <span className="circleP circle-4" />
                        <span className="circleP circle-5" />
                        <span className="circleP circle-6" />
                        <span className="circleP circle-7" />
                        <span className="circleP circle-8" />
                    </div>

                </div>

            </div>

        </>
    )
}

export default Career_Page5