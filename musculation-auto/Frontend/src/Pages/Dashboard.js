import Sidebar from "../components/Sidebar";
import "../Styles/Pages/Dashboard.scss";
import WMM from "../assets/WMM.png";

import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div className="ff">
        <div className="header-dashboard">
          <img src={WMM} alt="logo" className="logo" />
        </div>
        <>
          <Sidebar />
        </>
      </div>
    );
  }
}

export default Dashboard;
