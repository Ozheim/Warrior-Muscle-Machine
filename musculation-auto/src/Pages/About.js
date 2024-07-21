import React, { Component } from "react";
import "../Styles/Pages/About.scss";

class About extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="title-header">
            <h1>A propos de nous </h1>
          </div>
        </header>
        <body>
          <section>
            <h1>Qu'est ce que Warrior Muscle Machine ?</h1>
          </section>
        </body>
      </div>
    );
  }
}

export default About;
