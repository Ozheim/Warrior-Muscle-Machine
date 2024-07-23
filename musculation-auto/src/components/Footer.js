import React from "react";
import "../Styles/components/Footer.scss";

export function Footer() {
  return (
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
}

export default Footer;
