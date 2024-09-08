import React from "react";
import "../Styles/components/Footer.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <div className="footer-container">
      <>
        <div className="newsletter">
          <form action="?" method="POST">
            <label for="email">Newsletter</label>
            <div className="input-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your-email@site.com"
                required
              />
              <button type="submit">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  style={{ color: "#FFD43B" }}
                />
              </button>
            </div>
          </form>
        </div>
        <>
          <ul className="link-list">
            <li>
              <Link to="/Home">Accueil</Link>
            </li>
            <li>
              <Link to="/About">A propos</Link>
            </li>
            <li>
              <Link to="/Nouveauté">Prochainement</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </>
        <ul className="social-media-list">
          <li>
            <FontAwesomeIcon icon={faFacebookF} />
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} />
          </li>
          <li>
            <FontAwesomeIcon icon={faYoutube} />
          </li>
        </ul>
      </>
    </div>
  );
}

export default Footer;
