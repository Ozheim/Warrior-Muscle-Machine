import React, { Component } from "react";
import "../Styles/components/Videobackground.scss";
import background from "../assets/bgvideo.mp4";

class Videobackground extends Component {
  render() {
    return (
      <div className="Video-background">
        <video loop autoPlay muted>
          <source src={background} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default Videobackground;
