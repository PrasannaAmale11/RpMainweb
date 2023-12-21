import "./Card_EXP.css";
import clsbtn from "../images1/cross_icon.png";
import React, { useState, useRef, useEffect } from "react";
import rmmybtn from "../images1/rmbtn.svg"

// Custom hook to handle click outside
const useClickOutside = (ref, callback) => {
  const handleClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
};

const Card = () => {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const divRef = useRef(null);

  const handleHover = () => {
    setHovered(!hovered);
  };

  const handleClick = (event) => {
    if (!divRef.current || !divRef.current.contains(event.target)) {
      setExpanded(false);
      setHovered(false);
    } else {
      setExpanded(!expanded);
    }
  };

  useClickOutside(divRef, () => {
    setExpanded(false);
    setHovered(false);
  });

  return (
    <div
      id="card1"
      className={`card ${hovered ? "hovered" : ""} ${expanded ? "expanded" : ""
        }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      ref={divRef}
    >
      <p id="Technology">Technology</p>
      {hovered && !expanded && (
        <button id="EXPBTN" className="expand-btn" onClick={handleClick}>
          <img className="cr_btn_card" src={rmmybtn} />
        </button>
      )}
      {expanded && (
        <div className="expanded-content">
          <p className="exp_text">
            <span className="RPTS_text">
              RedPhantom <br /> Transportation Services
            </span>
            <br />
            <br />
            <p className="fmt40year">
              For more than 40 years, RP Transportation has provided safe,
              reliable, affordable transportation services to cities, countries,
              municipalities, and other jurisdictional entities, as well as
              private corporations, non-profit agencies, and community
              organizations.
            </p>
            <p className="fmt40year">
              For more than 40 years, RP Transportation has provided safe,
              reliable, affordable transportation services to cities, countries,
              municipalities, and other jurisdictional entities, as well as
              private corporations, non-profit agencies, and community
              organizations.
            </p>
            <span className="hash_redport">#redport</span>
          </p>
          <button className="close-btn" onClick={handleClick}>
            <img className="my_cls_btn" src={clsbtn} alt="Close" />
          </button>
        </div>
      )}
    </div>
  );
};

const Card1 = () => {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const divRef = useRef(null);

  const handleHover = () => {
    setHovered(!hovered);
  };

  const handleClick = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setExpanded(false);
      setHovered(false);
    } else {
      setExpanded(!expanded);
    }
  };

  useClickOutside(divRef, () => {
    setExpanded(false);
    setHovered(false);
  });

  return (
    <div
      id="card2"
      className={`card ${hovered ? "hovered" : ""} ${expanded ? "expanded" : ""
        }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      ref={divRef}
    >
      <p id="Technology">Transport</p>

      {hovered && !expanded && (
        <button id="EXPBTN" className="expand-btn" onClick={handleClick}>
          <img className="cr_btn_card" src={rmmybtn} />
        </button>
      )}
      {expanded && (
        <div className="expanded-content">
          <p className="exp_text">
            <span className="RPTS_text">
              RedPhantom <br /> Transportation Services
            </span>
            <br />
            <br />
            <p className="fmt40year">
              For more than 40 years, RP Transportation has provided safe,
              reliable, affordable transportation services to cities, countries,
              municipalities, and other jurisdictional entities, as well as
              private corporations, non-profit agencies, and community
              organizations.
            </p>
            <p className="fmt40year">
              For more than 40 years, RP Transportation has provided safe,
              reliable, affordable transportation services to cities, countries,
              municipalities, and other jurisdictional entities, as well as
              private corporations, non-profit agencies, and community
              organizations.
            </p>
            <span className="hash_redport">#redport</span>
          </p>
          <button className="close-btn" onClick={handleClick}>
            <img className="my_cls_btn" src={clsbtn} />
          </button>
        </div>
      )}
    </div>
  );
};

const Card2 = () => {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const divRef = useRef(null);

  const handleHover = () => {
    setHovered(!hovered);
  };

  const handleClick = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setExpanded(false);
      setHovered(false);
    } else {
      setExpanded(!expanded);
    }
  };

  useClickOutside(divRef, () => {
    setExpanded(false);
    setHovered(false);
  });

  return (
    <div
      id="card3"
      className={`card ${hovered ? "hovered" : ""} ${expanded ? "expanded" : ""
        }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      ref={divRef}
    >
      <p id="Technology">Finance</p>

      {hovered && !expanded && (
        <button id="EXPBTN" className="expand-btn" onClick={handleClick}>
          <img className="cr_btn_card" src={rmmybtn} />
        </button>
      )}
      {expanded && (
        <div className="expanded-content">
          <p className="exp_text">
            <span className="RPTS_text">
              RedPhantom <br /> Transportation Services
            </span>
            <br />
            <br />
            <p className="fmt40year">
              For more than 40 years, RP Transportation has provided safe,
              reliable, affordable transportation services to cities, countries,
              municipalities, and other jurisdictional entities, as well as
              private corporations, non-profit agencies, and community
              organizations.
            </p>
            <p className="fmt40year">
              For more than 40 years, RP Transportation has provided safe,
              reliable, affordable transportation services to cities, countries,
              municipalities, and other jurisdictional entities, as well as
              private corporations, non-profit agencies, and community
              organizations.
            </p>
            <span className="hash_redport">#redport</span>
          </p>
          <button className="close-btn" onClick={handleClick}>
            <img className="my_cls_btn" src={clsbtn} />
          </button>
        </div>
      )}
    </div>
  );
};

const Card3 = () => {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const divRef = useRef(null);

  const handleHover = () => {
    setHovered(!hovered);
  };

  const handleClick = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setExpanded(false);
      setHovered(false);
    } else {
      setExpanded(!expanded);
    }
  };

  useClickOutside(divRef, () => {
    setExpanded(false);
    setHovered(false);
  });

  return (
    <div
      id="card4"
      className={`card ${hovered ? "hovered" : ""} ${expanded ? "expanded" : ""
        }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      ref={divRef}
    >
      <p id="Technology">E - Commerce</p>

      {hovered && !expanded && (
        <button id="EXPBTN" className="expand-btn" onClick={handleClick}>
          <img className="cr_btn_card" src={rmmybtn} />
        </button>
      )}
      {expanded && (
        <div className="expanded-content">
          <p className="exp_text">
            <span className="RPTS_text">
              RedPhantom <br /> Transportation Services
            </span>
            <br />
            <br />
            <p className="fmt40year">
              For more than 40 years, RP Transportation has provided safe,
              reliable, affordable transportation services to cities, countries,
              municipalities, and other jurisdictional entities, as well as
              private corporations, non-profit agencies, and community
              organizations.
            </p>
            <p className="fmt40year">
              For more than 40 years, RP Transportation has provided safe,
              reliable, affordable transportation services to cities, countries,
              municipalities, and other jurisdictional entities, as well as
              private corporations, non-profit agencies, and community
              organizations.
            </p>
            <span className="hash_redport">#redport</span>
          </p>
          <button className="close-btn" onClick={handleClick}>
            <img className="my_cls_btn" src={clsbtn} />
          </button>
        </div>
      )}
    </div>
  );
};

const Card_EXP = () => {
  return (
    <div className="container">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
};

export default Card_EXP;
