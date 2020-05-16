import React, { useState } from 'react';
import Modal from 'react-modal';

import './style.scss';

const Cards = props => {
  const customStyles = {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  };
  const { item } = props;
  const [modalIsOpen, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <React.Fragment>
      <div className="card">
        <div className="image-container">
          <img className="image" src={item.image} alt="" onClick={openModal} />
        </div>
        <div className="section">{item.rating}</div>
        <div className="details">
          {item.name}
          <div>
            {item.location.map((loc, index) => (
              <span key={`${item.image}-${index}`}>{loc}, </span>
            ))}
          </div>
          <div>{item.description}</div>
        </div>
        <div className="buynow">
          <a href={item.image} target="blank">
            buy now
          </a>
        </div>
      </div>
      <Modal
        ariaHideApp={false}
        styles={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <div className="modal-image-container">
          <img src={item.image} alt="" />
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default Cards;
