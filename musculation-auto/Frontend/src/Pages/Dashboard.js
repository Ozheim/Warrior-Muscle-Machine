import Sidebar from "../components/Sidebar";
import "../Styles/Pages/Dashboard.scss";
import WMM from "../assets/WMM.png";
import initialdashboard from "../components/initialdashboard.js";
import React, { useState } from "react";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="ff">
      <div className="header-dashboard">
        <img src={WMM} alt="logo" className="logo" />
      </div>
      <Sidebar />
      <initialdashboard onAddSession={openModal} />

      {showModal && (
        <div className="modal">
          <button onClick={closeModal}>Fermer la modale</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
