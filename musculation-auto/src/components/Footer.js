import React, { useState } from "react";
import "../Styles/components/Footer.scss";

const Footer = () => {
  const [isActive, setIsActive] = useState(false);
  const AccordionFooter = (
    <div className="footer-container">
      <>
        <div className="Newsletter">
          <form action="?" method="POST">
            <label for="email">Newsletter</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your-email@site.com"
              required
            />
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </>
    </div>
  );

  return (
    <>
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>YOOO </div>
        <div>+</div>
      </div>
      {isActive && <div className="accordion">{AccordionFooter}</div>}
    </>
  );
};

export default Footer;
