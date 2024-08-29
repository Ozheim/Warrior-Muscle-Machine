import Sidebar from "../components/Sidebar";
import "../Styles/Pages/Dashboard.scss";
import WMM from "../assets/WMM.png";
import InitialDashboard from "../components/initialdashboard.js";
import React, { useState, useEffect } from "react";
import Modal from "../components/modal.js";
import MainDashboard from "../components/MainDashboard.js";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
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

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="ff">
      <div className="header-dashboard">
        <img src={WMM} alt="logo" className="logo" />
      </div>
      <Sidebar />

      {hasSessions ? (
        <MainDashboard openModal={openModal} />
      ) : (
        <InitialDashboard onAddSession={openModal} />
      )}
      <Modal isOpen={showModal} onClose={closeModal}></Modal>
    </div>
  );
};

export default Dashboard;
