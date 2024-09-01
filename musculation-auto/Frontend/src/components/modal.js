import "../Styles/components/modal.scss";
import React from "react";

const Modal = ({ isOpen, onClose }) => {
  const sendData = () => {
    "";
  };

  const addExercice = (e) => {
    e.preventDefault();

    const newForm = document.createElement("div");
    newForm.className = "exercice-form";

    const newExerciceInput = document.createElement("input");
    newExerciceInput.type = "text";
    newExerciceInput.name = "exercice";
    newExerciceInput.placeholder = "votre exercice";
    newExerciceInput.className = "exercice";
    newExerciceInput.required = true;

    const newWeightInput = document.createElement("input");
    newWeightInput.type = "number";
    newWeightInput.name = "weight";
    newWeightInput.className = "weight";
    newWeightInput.required = true;

    const newRepInput = document.createElement("input");
    newRepInput.type = "number";
    newRepInput.name = "repetitions";
    newRepInput.className = "reps";
    newRepInput.required = true;

    newForm.appendChild(newExerciceInput);
    newForm.appendChild(newWeightInput);
    newForm.appendChild(newRepInput);

    const formContainer = document.querySelector(".form-container");
    formContainer.appendChild(newForm);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-inner">
        <h2>Ajouter une nouvelle séance</h2>

        <div className="form-container">
          <div className="exercice-form">
            <input
              type="text"
              className="exercice"
              name="exercice"
              placeholder="votre exercice"
              required
            />
            <input type="number" name="weight" className="weight" required />
            <input type="number" className="reps" name="repetitions" required />
          </div>
        </div>

        <div className="button-container">
          <button type="button" onClick={addExercice}>
            +
          </button>
          <button type="button" onClick={sendData}>
            Valider
          </button>
        </div>

        <button onClick={onClose}>Fermer la modale</button>
      </div>
    </div>
  );
};

export default Modal;
