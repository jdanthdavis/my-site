import { useState } from 'react';
import './mapperDetails.scss';

const MapperDetails = ({ setSelectedDetail, details }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => setSelectedDetail(null), 300);
  };

  const handleOutOoo = (event) => {
    if (event.target.classList.contains('modal-backdrop')) {
      handleClose();
    }
  };

  return (
    <div
      className={`modal-backdrop ${isClosing ? 'fade-out' : ''}`}
      onClick={handleOutOoo}
    >
      <div className={`modal-content ${isClosing ? 'scale-out' : ''}`}>
        <div className="title-container">
          <div className="modal-title">{details.name}</div>
          <div className="modal-subtitle">{details.technologyUsed}</div>
        </div>
        <span className="underline" />

        <p>{details.desc}</p>
        <div className="modal-btn-container">
          <div className="left-btns">{details.btn}</div>
          <button className="close-btn" onClick={handleClose}>
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapperDetails;
