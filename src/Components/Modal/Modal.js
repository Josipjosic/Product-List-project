import React from "react";
import './Modal.scss';
import CloseIcon from '@mui/icons-material/Close';

// function to not show modal if state is false
function Modal({ image, show, onClose }) {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" >
        <CloseIcon onClick={onClose} className="modal-close" />
        <img src={image} alt="img"></img>
      </div>
    </div>
  );
}

export default Modal;
