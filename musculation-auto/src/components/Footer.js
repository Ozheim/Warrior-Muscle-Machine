import React from "react";
import "../Styles/components/Footer.scss";
import { Link } from "react-router-dom";

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
        <>
          <ul>
            <li>
              <Link to="/Home">Accueil</Link>
            </li>
            <li>
              <Link to="/Nouveauté">Prochainement</Link>
            </li>
            <li>
              <Link to="/About">A propos</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Emploi">Emploi</Link>
            </li>
          </ul>
        </>
      </>
    </div>
  );
}

export default Footer;
