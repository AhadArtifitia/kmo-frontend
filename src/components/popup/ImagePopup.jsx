import React from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai"; 
import img from "../../images/2024.jpg";

const ImagePopup = ({ show, handleClose }) => {
  const closeButtonStyle = {
    position: "absolute",
    top: "20px", // Adjust top position as needed
    right: "5px", // Adjust right position as needed
    border: "none",
    cursor: "pointer",
    fontSize: "40px",
    color: "#fff",
    zIndex: "1", 
    background: "none", 
  };

  return (
    <Modal
      isOpen={show}
      onRequestClose={handleClose}
      contentLabel="Image Popup"
      style={{
        content: {
          backgroundColor: "transparent",
          border: "none",
          padding: 0,
          width: "auto",
          maxWidth: "70vw", 
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        },
        overlay: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <img
        src={img}
        alt="Popup Image"
        style={{
          maxWidth: "60%",
          maxHeight: "60%",
        }}
        className="popup-image"
      />
      <AiOutlineClose style={{ ...closeButtonStyle,left:"80%" }} onClick={handleClose} />
    </Modal>
  );
};

export default ImagePopup;
