import React, { useEffect, useState, useRef } from "react";
import "./App.css"; // Import the CSS file for styling

import Business_page1 from "./Components/Business/Business_page1";
import Business_page2 from "./Components/Business/Business_page2";
import Business_page3 from "./Components/Business/Business_page3";
import Business_page4 from "./Components/Business/Business_page4";
import Business_page5 from "./Components/Business/Business_page5";
import Business_page6 from "./Components/Business/Business_page6";
import Main_first from "./Components/Business/Main_first";

function Home() {
  const sections = [
    { id: "main_first", component: <Main_first />, ref: React.createRef() },
    {
      id: "business_page1 section1",
      component: <Business_page1 />,
      ref: React.createRef(),
    },
    {
      id: "business_page2 section2",
      component: <Business_page2 />,
      ref: React.createRef(),
    },
    {
      id: "business_page3 section3",
      component: <Business_page3 />,
      ref: React.createRef(),
    },
    {
      id: "business_page4 section4",
      component: <Business_page4 />,
      ref: React.createRef(),
    },
    {
      id: "business_page5 section5",
      component: <Business_page5 />,
      ref: React.createRef(),
    },
    {
      id: "business_page6 lastSection",
      component: <Business_page6 />,
      ref: React.createRef(),
    },
  ];

  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef();
  const carouselRef = useRef(null);
  const [isCarouselInteracting, setIsCarouselInteracting] = useState(false);

  useEffect(() => {
    // Check if the device screen width is larger than 768px (desktop and laptop views)
    const isDesktopOrLaptop = window.innerWidth >=1024;

    if (isDesktopOrLaptop) {
      // Prevent touchpad scrolling
      document.body.style.overflow = "hidden";

      const handleScroll = () => {
        const containerTop = containerRef.current.offsetTop;
        const containerBottom =
          containerTop + containerRef.current.clientHeight;
        const scrollPosition = window.scrollY + window.innerHeight * 0.3;

        for (let i = 0; i < sections.length; i++) {
          const sectionTop = sections[i].ref.current.offsetTop;
          const sectionBottom =
            sectionTop + sections[i].ref.current.clientHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setCurrentSection(i);
            break;
          }
        }

        // Check if the user scrolled to the top or bottom of the container and adjust the current section accordingly
        if (scrollPosition < containerTop) {
          setCurrentSection(0);
        } else if (scrollPosition >= containerBottom - window.innerHeight) {
          setCurrentSection(sections.length - 1);
        }
      };

      const handleKeyDown = (e) => {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          if (currentSection < sections.length - 1) {
            scrollToNextSection();
          } else {
            // Scroll to the footer when at the last section and scrolling down
            scrollToFooter();
          }
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          if (currentSection > 0) {
            scrollToPrevSection();
          }
        }
      };

      const handleWheelScroll = (e) => {
        e.preventDefault();
        const delta = e.deltaY;
        const deltaMode = e.deltaMode;

        // Determine the scroll speed factor for different delta modes
        let scrollFactor;
        if (deltaMode === 0) {
          // DOM_DELTA_PIXEL: The delta values are in pixels
          scrollFactor = 0.2; // Adjust this value to control the scroll speed for laptop mousepad
        } else if (deltaMode === 1) {
          // DOM_DELTA_LINE: The delta values are in lines (common for laptops)
          scrollFactor = 1; // Adjust this value to control the scroll speed for laptop mousepad
        } else if (deltaMode === 1) {
          // DOM_DELTA_PAGE: The delta values are in pages
          scrollFactor = 0; // Adjust this value to control the scroll speed for laptop mousepad
        }

        const scrollDistance = delta * scrollFactor;

        if (scrollDistance > 0) {
          // Scrolling down
          if (currentSection < sections.length - 1 && !isCarouselInteracting) {
            setIsCarouselInteracting(true);
            scrollToNextSection();
          } else if (
            currentSection === sections.length - 1 &&
            !isCarouselInteracting
          ) {
            // Scroll to the footer when at the last section and scrolling down
            setIsCarouselInteracting(true);
            const footerSection = document.getElementById("footer"); // Get the footer element
            footerSection.scrollIntoView({ behavior: "smooth" });

            // Reset the carousel interaction flag after scrolling to the footer
            setTimeout(() => {
              setIsCarouselInteracting(false);
            }, 5000); // Adjust this delay value if needed
          }
        } else {
          // Scrolling up
          if (currentSection > 0 && !isCarouselInteracting) {
            setIsCarouselInteracting(true);
            scrollToPrevSection();
          }
        }
      };

      const handleCarouselInteractionStart = () => {
        setIsCarouselInteracting(true);
      };

      const handleCarouselInteractionEnd = () => {
        setIsCarouselInteracting(false);
      };

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("wheel", handleWheelScroll);

      if (carouselRef.current) {
        carouselRef.current.addEventListener(
          "mousedown",
          handleCarouselInteractionStart
        );
        carouselRef.current.addEventListener(
          "touchstart",
          handleCarouselInteractionStart
        );
        carouselRef.current.addEventListener(
          "mouseup",
          handleCarouselInteractionEnd
        );
        carouselRef.current.addEventListener(
          "touchend",
          handleCarouselInteractionEnd
        );
      }

      return () => {
        // Enable touchpad scrolling again
        document.body.style.overflow = "";
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("wheel", handleWheelScroll);

        if (carouselRef.current) {
          carouselRef.current.removeEventListener(
            "mousedown",
            handleCarouselInteractionStart
          );
          carouselRef.current.removeEventListener(
            "touchstart",
            handleCarouselInteractionStart
          );
          carouselRef.current.removeEventListener(
            "mouseup",
            handleCarouselInteractionEnd
          );
          carouselRef.current.removeEventListener(
            "touchend",
            handleCarouselInteractionEnd
          );
        }
      };
    } else {
      // Enable touchpad scrolling for mobile devices
      document.body.style.overflow = "";
    }
  }, [sections]);

  const scrollToNextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection((prev) => prev + 1);
      sections[currentSection + 1].ref.current.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      // Scrolling from the last section to the footer
      const footerSection = document.getElementById("footer"); // Get the footer element
      footerSection.scrollIntoView({ behavior: "smooth" });
    }

    // Reset the carousel interaction flag after scrolling
    setTimeout(() => {
      setIsCarouselInteracting(false);
    }, 1000); // Adjust this delay value if needed
  };

  const scrollToPrevSection = () => {
    if (currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
      sections[currentSection - 1].ref.current.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      // Scrolling from the first section to the last section
      setCurrentSection(sections.length - 1);
      sections[sections.length - 1].ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }

    // Reset the carousel interaction flag after scrolling
    setTimeout(() => {
      setIsCarouselInteracting(false);
    }, 800); // Adjust this delay value if needed
  };

  const scrollToFooter = () => {
    const footerSection = document.getElementById("footer"); // Get the footer element
    footerSection.scrollIntoView({ behavior: "smooth" });

    // Reset the carousel interaction flag after scrolling
    setTimeout(() => {
      setIsCarouselInteracting(false);
    }, 1000); // Adjust this delay value if needed
  };

  const scrollToNextSectionByMouse = () => {
    if (currentSection < sections.length - 1 && !isCarouselInteracting) {
      setIsCarouselInteracting(true);
      setCurrentSection((prev) => prev + 1);
      sections[currentSection + 1].ref.current.scrollIntoView({
        behavior: "smooth",
      });
    } else if (
      currentSection === sections.length - 1 &&
      !isCarouselInteracting
    ) {
      // Scroll to the footer when at the last section and scrolling down
      setIsCarouselInteracting(true);
      const footerSection = document.getElementById("footer"); // Get the footer element
      footerSection.scrollIntoView({ behavior: "smooth" });

      // Reset the carousel interaction flag after scrolling to the footer
      setTimeout(() => {
        setIsCarouselInteracting(false);
      }, 1000); // Adjust this delay value if needed
    }
  };

  const scrollToPrevSectionByMouse = () => {
    if (currentSection > 0 && !isCarouselInteracting) {
      setCurrentSection((prev) => prev - 1);
      sections[currentSection - 1].ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="home_container">
      <div className="home_content" ref={containerRef}>
        {sections.map((section) => (
          <div key={section.id} ref={section.ref} className="section">
            {section.component}
          </div>
        ))}
      </div>
      {/* Your sticky footer component (with id='footer') */}
      <div id="footer"></div>
    </div>
  );
}

export default Home;