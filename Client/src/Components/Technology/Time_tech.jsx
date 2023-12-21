
import React, { useEffect, useState } from "react";
import "./Time_tech.css";

const Time_tech = () => {
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const pageHeight = window.innerHeight;
      const scrollTop = window.pageYOffset;

      // Calculate the active page based on scroll position
      const newActivePage = Math.ceil(scrollTop / pageHeight);
      setActivePage(newActivePage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
    const pageHeight = window.innerHeight;
    const targetScroll = (pageNumber) * pageHeight;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <div className="timeline-container1122">
      <div className="timeline1122">
        {[0,1,2].map((page) => (
          <div
            key={page}
            className={`timeline-point1122 ${
              activePage === page ? "active" : ""
            }`}
            onClick={() => handlePageClick(page)}
          ></div>
        ))}
        <div className="timeline-line1122"></div>
      </div>
    </div>
  );
};

export default Time_tech;
