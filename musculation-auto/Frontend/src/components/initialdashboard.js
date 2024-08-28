import React from "react";

const initialdashboard = (props) => {
  return (
    <div>
      <div className="welcome-message">
        <p>Bienvenue sur ton tableau de bord !</p>
        <p>Commence par enregistrer ta première séance.</p>
        <button onClick={props.onAddSession}>Ajouter une séance</button>
      </div>
    </div>
  );
};
