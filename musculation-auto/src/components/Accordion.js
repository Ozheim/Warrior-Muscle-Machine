import React, { useState } from "react";
import Footer from "./Footer.js"; // Assure-toi que le chemin est correct
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../Styles/components/Accordion.scss";

const Accordion = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="accordion-arrow" onClick={() => setIsActive(!isActive)}>
        <div className="arrow">
          <FontAwesomeIcon icon={faChevronDown} className="scroll-down" />
          <FontAwesomeIcon icon="" />
        </div>
      </div>
      {isActive && (
        <div className="accordion">
          <Footer />
        </div>
      )}
    </>
  );
};

export default Accordion;
