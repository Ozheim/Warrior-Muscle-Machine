import Sidebar from "../components/Sidebar";
import "../Styles/Pages/Dashboard.scss";
import WMM from "../assets/WMM.png";
import InitialDashboard from "./initialdashboard.js";
import React, { useState, useEffect } from "react";
import Maindashboard from "./Maindashboard.js";

const Dashboard = () => {
  const [hasSessions, setHasSessions] = useState(null);
  const token = localStorage.getItem("token");
  const [selectedCycle, setSelectedCycle] = useState(1);

  useEffect(() => {
    fetch("http://localhost:5000/api/auth/user/sessions/exist", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
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

      {hasSessions ? (
        <Maindashboard
          selectedCycle={selectedCycle}
          setSelectedCycle={setSelectedCycle}
        />
      ) : (
        <InitialDashboard
          selectedCycle={selectedCycle}
          setSelectedCycle={setSelectedCycle}
        />
      )}
    </div>
  );
};

export default Dashboard;
