import React from 'react'
import "./Gallary.css"
import {NavLink} from "react-router-dom"

function Gallary() {
    return (
        <>

            <div className='main_gallary_div'>

                <div className='main_gal_card_div'>
                    <div className='sub_card_gal newimg1'>
                        Automobile
                    </div>

                    <div className='sub_card_gal newimg2'>
                        Hardware
                    </div>

                    <div className='sub_card_gal newimg3'>
                        Infrastructure
                    </div>

                    <div className='sub_card_gal newimg4'>
                        Chemical
                    </div>

                    <div className='sub_card_gal newimg5'>
                        Real Estate
                    </div>

                    <div className='sub_card_gal newimg6'>
                        Milk & Dairy
                    </div>

                    <div className='sub_card_gal newimg7'>
                        Crypto
                    </div>

                    <div className='sub_card_gal newimg8'>
                        Hospital
                    </div>

                    <div className='sub_card_gal newimg9'>
                        Transportation
                    </div>

                    <div className='sub_card_gal newimg10'>
                        Electrical
                    </div>

                    <div className='sub_card_gal newimg11'>
                        Education
                    </div>

                    <div className='sub_card_gal newimg12'>
                        Texttile
                    </div>

                    <div className='sub_card_gal newimg13'>
                        Film & Entertainmaint
                    </div>

                    <div className='sub_card_gal newimg14'>
                        Telecom
                    </div>

                    <div className='sub_card_gal newimg15'>
                        Oil
                    </div>

                    <div className='sub_card_gal newimg16'>

                    </div>
                </div>

               <NavLink to="/upcoming">
               <button className='back_btn_gallary'>
                    <svg className='back_btn_svg' xmlns="http://www.w3.org/2000/svg" width="25" height="18" viewBox="0 0 20 20" fill="none">
                        <path d="M10.24 20C4.583 20 0 15.523 0 10C0 4.477 4.584 0 10.24 0C13.431 0 16.382 1.437 18.31 3.846C18.364 3.91328 18.404 3.99074 18.4275 4.07378C18.4511 4.15681 18.4577 4.24372 18.4469 4.32936C18.4362 4.41499 18.4084 4.49759 18.3651 4.57226C18.3218 4.64692 18.264 4.71213 18.195 4.764C18.0544 4.87101 17.8776 4.91905 17.7021 4.89796C17.5266 4.87687 17.3663 4.78829 17.255 4.651C16.4116 3.60277 15.3429 2.75795 14.1283 2.17922C12.9137 1.60049 11.5844 1.30272 10.239 1.308C5.324 1.308 1.339 5.2 1.339 10C1.339 14.8 5.324 18.692 10.239 18.692C11.5652 18.6971 12.876 18.4078 14.0768 17.8449C15.2776 17.282 16.3385 16.4596 17.183 15.437C17.296 15.301 17.4576 15.2143 17.6335 15.1955C17.8094 15.1766 17.9857 15.227 18.125 15.336C18.1934 15.3888 18.2504 15.4548 18.2928 15.53C18.3351 15.6053 18.3619 15.6883 18.3715 15.7742C18.3811 15.86 18.3734 15.9469 18.3487 16.0297C18.3241 16.1124 18.283 16.1894 18.228 16.256C16.297 18.606 13.386 20 10.24 20ZM9.695 13.138L6.988 10.431C6.726 10.169 6.721 9.751 6.977 9.495L9.62 6.85C9.68221 6.78913 9.75581 6.74112 9.83659 6.70872C9.91737 6.67632 10.0037 6.66017 10.0908 6.66119C10.1778 6.66221 10.2638 6.68039 10.3438 6.71467C10.4238 6.74896 10.4962 6.79868 10.557 6.861C10.6193 6.92183 10.6689 6.99433 10.7031 7.07437C10.7373 7.1544 10.7554 7.2404 10.7563 7.32743C10.7572 7.41446 10.741 7.50082 10.7085 7.58156C10.676 7.66231 10.6279 7.73586 10.567 7.798L9.02 9.346L19.33 9.345C19.417 9.34394 19.5034 9.36005 19.5842 9.39241C19.665 9.42477 19.7386 9.47274 19.8008 9.53358C19.863 9.59441 19.9127 9.66692 19.9468 9.74696C19.981 9.82699 19.9991 9.91298 20 10C20 10.361 19.7 10.654 19.33 10.654L9.062 10.654L10.62 12.213C10.6823 12.2738 10.7319 12.3463 10.7661 12.4264C10.8003 12.5064 10.8184 12.5924 10.8193 12.6794C10.8202 12.7665 10.804 12.8528 10.7715 12.9336C10.739 13.0143 10.6909 13.0879 10.63 13.15C10.5044 13.2723 10.3355 13.3399 10.1602 13.3378C9.98495 13.3357 9.81764 13.2633 9.695 13.138Z" fill="white" />
                    </svg> Back
                </button>
               </NavLink>
            </div>
        </>
    )
}

export default Gallary