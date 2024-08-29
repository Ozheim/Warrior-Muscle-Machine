import React, { useState } from "react";
import Modal from "./modal.js";

const InitialDashboard = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      <h2>Bienvenue sur ton tableau de bord initial !</h2>
      <p>Commence par ajouter une séance.</p>
      <button onClick={openModal}>Ajouter une séance</button>

      <Modal isOpen={showModal} onClose={closeModal}>
        <h2>Ajouter une nouvelle séance</h2>
      </Modal>
    </div>
  );
};

export default InitialDashboard;
