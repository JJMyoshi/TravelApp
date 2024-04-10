import React from 'react';
import Modal from 'react-modal';

const UncheckRobotModal = ({ isOpen, onClose }) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '300px',
      height: '200px',
      backgroundColor: 'darkgoldenrod', // Light gray background
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '20px',
    },
    closeButton: {
      margin: '10px 0',
      padding: '10px',
      backgroundColor: '#6c757d', // Gray
      color: '#fff', // White
      fontSize: '20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Uncheck Robot Modal"
      style={customStyles}
    >
      <h2>Please confirm you are not a robot</h2>
      <div style={customStyles.buttonContainer}>
        <button style={customStyles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default UncheckRobotModal;
