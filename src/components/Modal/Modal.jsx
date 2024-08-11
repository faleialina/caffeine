import React from 'react';
import style from './modal.module.scss';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  const handleClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={style.modalOverlay} onClick={handleClick}>
      <div className={style.modalContent}>
        <button className={style.closeButton} onClick={onClose}>
          &times;
        </button>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
