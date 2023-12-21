// import dotenv from "dotenv";
import React, { useEffect, useState } from "react";
import "./Foot.css";
import logo_img from "../images1/RP_logo.png";
import { NavLink } from "react-router-dom";
import what_logo from "../images1/whatsapp.svg";
import twi_logo from "../images1/twitter.svg";
import you_logo from "../images1/youtube.svg";
import insta_logo from "../images1/instagram.svg";
import face_logo from "../images1/facebook.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Loader from '../Loader/Loader';

function Foot() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const subscribe = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email", { toastId: "foot" });
    } else if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
    } else {
      setLoading(true); // Step 2: Set loading state to true
      axios
        .post(`http://localhost:3001/subscribe`, { email })
        .then((response) => {
          if (response.status === 200) {
            setEmail("");
            // setShowModal(true);
            toast.success("Successfully subscribed!");
          }
       
        })
        .catch((error) => {
          if (error && error.response && error.response.status === 400) {
            toast.error("Email already exists");
          } else {
            console.error("Error:", error);
            toast.error("An error occurred. Please try again later.");
          }
        })
        .finally(() => {
          setLoading(false); // Step 4: Set loading state back to false after response
        });
      setEmail("");
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
 
  return (
    <>
      <div id="Foot_main_sec_div">
        <div className="All_logoes_div">
          <div className="logo_lgh">
            <NavLink to="/">
              <img className="foot_comp_logo" src={logo_img} />
            </NavLink>
            <span className="lets_get_high">𝓛𝓮𝓽'𝓼 𝓰𝓮𝓽 𝓱𝓲𝓰𝓱</span>
          </div>
          <div className="oh_my_god">
            <div className="oh_my_godA1">
              <p className="follow_us_on">Follow us on</p>
              <a
                href="https://www.facebook.com/redphantomgroup/?ref=pages_you_manage"
                target="_blank"
                className="insta_pic_logo"
              >
                <img className="instagram" src={face_logo} />
              </a>

              <a
                href="https://www.instagram.com/redphantomgroup/"
                target="_blank"
                className="insta_pic_logo"
              >
                <img className="instagram" src={insta_logo} />
              </a>

              <a
                href="https://wa.me/+919172912622"
                target="_blank"
                className="insta_pic_logo"
              >
                <img className="instagram" src={what_logo} />
              </a>

              <a
                href="https://twitter.com/redphantomgroup"
                target="_blank"
                className="insta_pic_logo"
              >
                <img className="instagram" src={twi_logo} />
              </a>

              <a
                href="https://www.youtube.com/channel/UC3CbP6ZDRtyvweBc3966lxw"
                target="_blank"
                className="insta_pic_logo"
              >
                <img className="instagram" src={you_logo} />
              </a>
            </div>

            <div className="oh_my_godA2">
              <div className="subscribe_div">
                <form onClick={subscribe} method="post">
                  <input
                    className="input"
                    style={{ marginRight: "10px" }}
                    placeholder="Enter E-mail to subscribe . ."
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                  <button  className="subscribr__btn">
                    Subscribe
                  </button>
                  {loading && (
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                      <Loader />
                    </div>
                  )}
                </form>

                <ToastContainer
                  position="bottom-right"
                  className="toastContainer"
                  autoClose={2000}
                  style={{ zIndex: 1, bottom: "2%" }}
                  limit={1}
                />
              </div>
            </div>
          </div>
        </div>



        <div className="All_links_main_div">
          <div className="footer_card_div">
            <h2 className="footer_all_heading">Business</h2>
            <NavLink to="/technology" className="anchor_tag" href="">
              Technology
            </NavLink>
            <br />
            <NavLink to="/transportation" className="anchor_tag" href="">
              Transport
            </NavLink>
            <br />
            <NavLink to="/finance" className="anchor_tag" href="">
              Finance
            </NavLink>
            <br />
            <NavLink to="/ecommerce" className="anchor_tag" href="">
              E-commerce
            </NavLink>
          </div>

          <div className="footer_card_div">
            <h2 className="footer_all_heading">Community</h2>
            <NavLink to="/comingsoon" className="anchor_tag" href="">
              Education
            </NavLink>
            <br />
            <NavLink to="/comingsoon" className="anchor_tag" href="">
              Empowerment
            </NavLink>
            <br />
            <NavLink to="/comingsoon" className="anchor_tag" href="">
              Environment
            </NavLink>
            <br />
            <NavLink to="/comingsoon" className="anchor_tag" href="">
              Health
            </NavLink>
          </div>

          <div className="footer_card_div">
            <h2 className="footer_all_heading">About</h2>
            <NavLink to="/comingsoon" className="anchor_tag" href="">
              Founder & Chairmen
            </NavLink>
            <br />
            <NavLink to="/comingsoon" className="anchor_tag" href="">
              Director
            </NavLink>
            <br />
            <NavLink to="/overview" className="anchor_tag" href="">
              Overview
            </NavLink>
            <br />
            <NavLink to="/upcoming" className="anchor_tag" href="">
              Upcoming BSN.
            </NavLink>
          </div>

          <div className="footer_card_div">
            <h2 className="footer_all_heading">News</h2>
            <NavLink to="/comingsoon" className="anchor_tag" href="">
              Photoes
            </NavLink>
            <br />
            <NavLink to="/comingsoon" className="anchor_tag" href="">
              Downloads
            </NavLink>
            <br />
            <NavLink to="/comingsoon" className="anchor_tag" href="">
              News
            </NavLink>
            <br />
            <NavLink to="/comingsoon" className="anchor_tag" href="">
              Videos
            </NavLink>
            <br />
          </div>
        </div>

        {/* <div className="rptn_indusries">
          REDPHANTOM <br /> INDUSTRIES
        </div> */}
      </div>
      <div className="copy_right">
        2019 - 2024 RedPhantom Industries Private Limited . All Rights Reserved .
        
      </div>
    </>
  );
}

export default Foot;
