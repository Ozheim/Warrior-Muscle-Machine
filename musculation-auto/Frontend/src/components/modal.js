import "../Styles/components/modal.scss";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-inner">
        <button onClick={onClose}>Fermer la modale</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
