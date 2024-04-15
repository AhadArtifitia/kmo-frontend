import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

const StyledModal = styled(Modal)`
  overlay {
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border: none;
    border-radius: 8px;
    padding: 20px;
    width: 80%;
    max-width: 400px;
    margin: auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #555;
`;

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
`;

const ImagePopup = ({ show, handleClose }) => {
  return (
    <StyledModal isOpen={show} onRequestClose={handleClose} contentLabel="Image Popup">
      <CloseButton onClick={handleClose}>×</CloseButton>
      <img src="../../images/2024.jpg" alt="Popup Image" />
    </StyledModal>
  );
};

export default ImagePopup;
