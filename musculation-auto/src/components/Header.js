import React, { Component } from "react";
import WMM from "../assets/WMM.png";
class Header extends Component {
  render() {
    return (
      <header>
        <div className="Logo">
          <img src={WMM} alt="logo of the web site" />
        </div>
        
      </header>
    );
  }
}

export default Header;
