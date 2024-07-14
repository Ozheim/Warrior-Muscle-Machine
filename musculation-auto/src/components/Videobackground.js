import React, { Component } from "react";
import "../Styles/components/Videobackground.scss";
import background from "../assets/background_video.mp4";

class Videobackground extends Component {
  render() {
    return (
      <div className="Video-background" loop autoPlay muted>
        <video>
          <source src={background} type="video.mp4"></source>
        </video>
      </div>
    );
  }
}

export default Videobackground;
