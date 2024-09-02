import React, { useState } from "react";
import Modal from "./modal.js";
import "../Styles/components/Initialdashboard.scss";

const InitialDashboard = () => {
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
        <Modal isOpen={showModal} onClose={closeModal} />
      </div>
    </>
  );
};

export default InitialDashboard;
