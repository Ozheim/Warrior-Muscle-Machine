import Sidebar from "../components/Sidebar";
import "../Styles/Pages/Dashboard.scss";
import WMM from "../assets/WMM.png";
import InitialDashboard from "./initialdashboard.js";
import React, { useState, useEffect } from "react";
import Maindashboard from "./Maindashboard.js";

const Dashboard = () => {
  const [hasSessions, setHasSessions] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:5000/api/auth/user/sessions/exist", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setHasSessions(data.sessionExists);
      })
      .catch((error) => {
        console.error("Erreur:", error);
        setHasSessions(false);
      });
  }, [token]);

  return (
    <div className="ff" id="main-content">
      <div className="header-dashboard">
        <img src={WMM} alt="logo" className="logo" />
      </div>
      <Sidebar />

      {hasSessions ? <Maindashboard /> : <InitialDashboard />}
    </div>
  );
};

export default Dashboard;
