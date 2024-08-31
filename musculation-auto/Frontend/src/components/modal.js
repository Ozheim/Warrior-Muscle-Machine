import "../Styles/components/modal.scss";
import oneMore from "../utils/OneMore.js";

const Modal = ({ isOpen, onClose }) => {
  const sendData = async () => {
    const exercice = document.querySelector('input[name="exercice"]').value;
    const weight = document.querySelector('input[name="weight"]').value;
    const repetitions = document.querySelector(
      'input[name="repetitions"]'
    ).value;
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-inner">
        <h2>Ajouter une nouvelle séance</h2>
        <form action="submit">
          <label for="exercice"></label>
          <input
            type="text"
            id="exercice"
            name="exercice"
            placeholder="votre exercice"
            required
          />

          <label for="weight"></label>
          <input type="number" id="weight" name="weight" required />

          <label for="repetitions"></label>
          <input type="number" id="reps" name="repetitions" required />
          <button onClick={<oneMore />}>+</button>
          <button onClick={sendData}>valider</button>
        </form>
        <button onClick={onClose}>Fermer la modale</button>
      </div>
    </div>
  );
};

export default Modal;
