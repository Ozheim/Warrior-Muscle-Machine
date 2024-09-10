import "../Styles/components/modal.scss";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import sendData from "../utils/Senddata.js";

const Modal = ({ isOpen, onClose, selectedCycle }) => {
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
    newWeightInput.placeholder = "Kg";
    newWeightInput.required = true;

    const newRepInput = document.createElement("input");
    newRepInput.type = "number";
    newRepInput.name = "repetitions";
    newRepInput.placeholder = "rep";
    newRepInput.className = "reps";
    newRepInput.required = true;

    newForm.appendChild(newExerciceInput);
    newForm.appendChild(newWeightInput);
    newForm.appendChild(newRepInput);

    const formContainer = document.querySelector(".form-container");
    formContainer.appendChild(newForm);
  };
  const [selectWeek, setSelectWeek] = useState("");
  const [selectDay, setSelectDay] = useState("");

  const selectedWeek = (e) => {
    setSelectWeek(parseInt(e.target.value));
  };

  const SelectedDay = (e) => {
    setSelectDay(parseInt(e.target.value));
  };

  const inputDate = () => (
    <div className="date-container">
      <label htmlFor="semaine"></label>
      <select name={selectWeek} id="week-choice" onChange={selectedWeek}>
        <option value="" disabled>
          -- Sélectionner une semaine --
        </option>
        <option value="1">Semaine 1</option>
        <option value="2">Semaine 2</option>
        <option value="3">Semaine 3</option>
        <option value="4">Semaine 4</option>
        <option value="5">Semaine 5</option>
        <option value="6">Semaine 6</option>
      </select>

      <label htmlFor="jour"></label>
      <select name={selectDay} onChange={SelectedDay} id="day-choice">
        <option value="" disabled>
          -- Selectionner un jour --
        </option>
        <option value="1">jour 1</option>
        <option value="2">jour 2</option>
        <option value="3">jour 3</option>
        <option value="4">jour 4</option>
        <option value="5">jour 5</option>
        <option value="6">jour 6</option>
        <option value="7">jour 7</option>
      </select>
    </div>
  );

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-inner">
        <h2>{inputDate()}</h2>
        <div className="form-container">
          <div className="exercice-form">
            <input
              type="text"
              className="exercice"
              name="exercice"
              placeholder="votre exercice"
              required
            />
            <input
              type="number"
              name="weight"
              className="weight"
              placeholder="Kg"
              required
            />
            <input
              type="number"
              className="reps"
              name="repetitions"
              placeholder="rep"
              required
            />
          </div>
        </div>

        <div className="button-container">
          <button type="button" onClick={addExercice}>
            <FontAwesomeIcon icon={faPlus} className="plus" />
          </button>

          <button
            type="button"
            onClick={() => sendData(selectedCycle)}
            className="validation-button"
          >
            <p>valider</p>
          </button>
        </div>
        <button onClick={onClose} id="close-modal">
          <span>Fermer</span>
        </button>
      </div>
    </div>
  );
};

export default Modal;
