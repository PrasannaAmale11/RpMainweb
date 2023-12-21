import React from "react";

import "./Style_About.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const About_Page4 = () => {
  return (
    <section className="about_card_wrapper">
      {/* card Left */}
      <article className="about_card_main_box" data-aos="fade-right">
        <div className="about_card_content">
          <span className="about_card_title">Mr.Sudhakar Rupnar</span>
          <span className="about_card_subtitle">Founder And Chairmen</span>
          <p className="about_card_description">
            Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut
            dolor tempora aperiam itaque possimus at, cupiditate earum, quae
            repudiandae aspernatur? Labore minus soluta consequatur placeat.
          </p>
          <div className="about_card_icons12">
            <a href="" className="about_social_icons_link12">
              <BsFacebook className="about_card_social_icon12" />
            </a>
            <a href="" className="about_social_icons_link12">
              <AiFillInstagram className="about_card_social_icon12" />
            </a>
            <a href="" className="about_social_icons_link12">
              <BsTwitter className="about_card_social_icon12" />
            </a>
            <a href="" className="about_social_icons_link12">
              <BsWhatsapp className="about_card_social_icon12" />
            </a>
          </div>
        </div>
      </article>

      {/* Article Right */}
      <article className="about_card_main_box" data-aos="fade-left">
        <div className="about_card_content">
          <span className="about_card_title">Mr.Sudhakar Rupnar</span>
          <span className="about_card_subtitle">Founder And Chairmen</span>
          <p className="about_card_description">
            Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut
            dolor tempora aperiam itaque possimus at, cupiditate earum, quae
            repudiandae aspernatur? Labore minus soluta consequatur placeat.
          </p>
          <div className="about_card_icons12">
            <a href="" className="about_social_icons_link12">
              <BsFacebook className="about_card_social_icon12" color="black" />
            </a>
            <a href="" className="about_social_icons_link12">
              <AiFillInstagram className="about_card_social_icon12" color="black" />
            </a>
            <a href="" className="about_social_icons_link12">
              <BsTwitter className="about_card_social_icon12" color="black" />
            </a>
            <a href="" className="about_social_icons_link12">
              <BsWhatsapp className="about_card_social_icon12" color="black" />
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About_Page4;
