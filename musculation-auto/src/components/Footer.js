import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <section>
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
        </section>
      </div>
    );
  }
}

export default Footer;
