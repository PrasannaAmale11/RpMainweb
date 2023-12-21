import React, { useState, useEffect } from "react";
import "./Style.css";
import { Squash as Hamburger } from "hamburger-react";
import logo from "../images1/RP_logo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'


function My_Navbar() {
  const [opened] = "active";
  const [isOpen, setOpen] = useState(false);

  const [clicked, setClicked] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollTimeout]);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingUp = prevScrollPos > currentScrollPos;
    const topZero = 0;

    setPrevScrollPos(currentScrollPos);
    setIsNavbarVisible(!isScrollingUp);

    if (currentScrollPos === 0) {
      setIsNavbarVisible(true);
    }

    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    // Set a new scroll timeout
    setScrollTimeout(
      setTimeout(() => {
        setIsNavbarVisible(true);
      }, 500) // Adjust this value to control how quickly the navbar appears after scrolling stops
    );

    // Hide the navbar while scrolling
    setIsNavbarVisible(false);
  };

  const handleChange = () => {
    setOpen(!isOpen);
    setClicked(!clicked);
  };

  return (
    <>
      <nav className={`navbarMain ${isNavbarVisible ? "visible" : "hidden"}`}>
        <NavLink to={"/"}>
          <div className="logo">
            <img src={logo} alt="" className="logo_img" onClick={() => window.scrollTo(0, 0)} />
          </div>
        </NavLink>

        <div className="menu">
          <ul className={clicked ? "navbar activate " : "navbar "}>
            <li className="nav-links_li">
              {/* <NavLink to="/" className={opened} onClick={handleChange}>
                Business
              </NavLink> */}

              <NavLink className="navbarDropdown_main"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >

                Business
                {/* <FontAwesomeIcon icon="fa-solid fa-caret-down" /> */}
                <FontAwesomeIcon icon={faCaretDown} color="white" style={{ marginLeft: "8px" }} />
              </NavLink>

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <div className="business_box">
                  <div className="business_box_left">
                    <ul className="hidden-md-down">
                    <li className="active">
                      <NavLink className="businessman_anand" to="/overview" onClick={handleChange}>Business Overview</NavLink>
                      </li>
                      <li className="active">
                        <NavLink className="businessmen_yash" to="/upcoming" onClick={handleChange}>Upcoming Business</NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="business_box_right">
                    <ul className="hidden-md-down">
                      <NavLink to="/" onClick={handleChange}>Business</NavLink>


                      <li className="active">
                        <NavLink to="/technology" onClick={handleChange}>Technology</NavLink>
                      </li>
                      <li>
                        <NavLink to="/transportation" onClick={handleChange}>Transport</NavLink>
                      </li>
                      <li>
                        <NavLink to="/finance" onClick={handleChange}>Finance</NavLink>
                      </li>
                      <li>
                        <NavLink to="/ecommerce" onClick={handleChange}>E-commerce</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>


            <li className="nav-links_li">
              <NavLink
                to="/career"
                className={`${opened} nav_links_a`}
                onClick={handleChange}
              >
                Career
              </NavLink>
            </li>



            <li className="nav-links_li">
              <NavLink
                to="/about"
                className={`${opened} nav_links_a`}
                onClick={handleChange}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-links_li">
              <NavLink
                to="/media"
                className={`${opened} nav_links_a`}
                onClick={handleChange}
              >
                Media
              </NavLink>
            </li>
            <li className="nav-links_li">
              <NavLink
                to="/contact"
                className={`${opened} nav_links_a`}
                onClick={handleChange}
              >
                Contact
              </NavLink>

            </li>


          </ul>
        </div>

        <div className="mobile-menu" onClick={() => setClicked(!clicked)}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </nav>
    </>
  );
}

export default My_Navbar;
