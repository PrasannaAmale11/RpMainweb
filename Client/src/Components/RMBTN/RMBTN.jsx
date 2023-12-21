import React from 'react'
import "./RMBTN.css"

function RMBTN() {
    return (
        <>

            <button className="cta">
                <span className='bkwasDay'>Read More</span>
                <svg className='rmbtn_svgAni' viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5" />
                    <polyline points="8 1 12 5 8 9" />
                </svg>
            </button>
        </>
    )
}

export default RMBTN