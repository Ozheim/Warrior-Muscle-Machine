import React, { useState } from "react";
import { Footer } from "./Footer.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Accordion = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>
          <FontAwesomeIcon icon={faArrowDown} style={{ color: "#74C0FC" }} />
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
