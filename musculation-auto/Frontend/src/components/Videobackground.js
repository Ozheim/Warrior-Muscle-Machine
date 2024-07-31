import React, { Component } from "react";
import "../Styles/components/Videobackground.scss";

class Videobackground extends Component {
  render() {
    const { videoSrc } = this.props;
    return (
      <div className="Video-background">
        <video loop autoPlay muted>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default Videobackground;
