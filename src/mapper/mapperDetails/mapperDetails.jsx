import { useState } from 'react';
import './mapperDetails.scss';

const MapperDetails = ({ key, setSelectedDetail, details }) => {
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
      key={key}
      className={`modal-backdrop ${isClosing ? 'fade-out' : ''}`}
      onClick={handleOutOoo}
    >
      <div className={`modal-content ${isClosing ? 'scale-out' : ''}`}>
        <div className="title-container">
          <div className="modal-title">{details.name}</div>
          <div className="modal-subtitle">Subtitle</div>
        </div>
        <span className="underline" />

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="modal-btn-container">
          {details.link ? (
            <button
              onClick={() => {
                window.open(details.link);
              }}
            >
              View Repo
            </button>
          ) : (
            <div />
          )}

          <button onClick={handleClose}>×</button>
        </div>
      </div>
    </div>
  );
};

export default MapperDetails;
