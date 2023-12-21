import React from 'react'
import { NavLink } from 'react-router-dom'

function ComingSoon() {

    return (
        <>

            <div style={{ width: "100%", height: "100vh", backgroundColor: "black", position: "relative", zIndex: "2" }}>
                <p style={{
                    color: "white", fontSize: "100px", textAlign: "center", paddingTop: "250px", fontWeight: "bolder"
                }}>Comming soon . . .</p>

                <NavLink to="/">
                    <button className='home_btnwa' style={{textDecoration:"none", color:"white"}}>
                        Home
                    </button>
                </NavLink>
            </div>


        </>
    )
}

export default ComingSoon