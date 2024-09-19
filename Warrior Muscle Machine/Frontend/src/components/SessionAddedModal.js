import axios from "axios";
import "../Styles/components/sessionAddedModal.scss";

const SessionAddedModal = () => {
  return (
    <div className="modal-overlay">
      <div>
        <div className="modal-title">
          <h1>Votre Séance: </h1>
        </div>
        <div className="temporality-session">
          <h2>Semaine : </h2>
          <h3>semaine : </h3>
        </div>
      </div>
    </div>
  );
};

export default SessionAddedModal;
