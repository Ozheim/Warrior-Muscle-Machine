import React, { useState, useEffect } from "react";
import Modal from "../components/modal.js";
import "../Styles/Pages/Initialdashboard.scss";

const InitialDashboard = ({ selectedCycle, setSelectedCycle }) => {
  useEffect(() => {
    setSelectedCycle(1);
  }, []);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="dashboard-content">
        <h2>Bienvenue sur ton champ de bataille, guerrier du progrès !</h2>
        <p>
          Ici, chaque performance compte. Enregistre tes victoires du jour, et
          nous nous occupons du reste pour te mener à la conquête de tes
          objectifs !
        </p>
        <p>Prêt à combattre ? Commence par ajouter une séance.</p>
        <button onClick={openModal}>Ajouter une séance</button>
      </div>
      <div id="initial-modal">
        <Modal
          isOpen={showModal}
          onClose={closeModal}
          selectedCycle={selectedCycle}
        />
      </div>
    </>
  );
};

export default InitialDashboard;
