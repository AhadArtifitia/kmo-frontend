import React from "react";
import Modal from "react-modal";
import img from "../../images/2024.jpg";

const ImagePopup = ({ show, handleClose }) => {
  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "30px",
    color: "#fff",
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
          maxWidth: "80vw", 
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
      <button style={closeButtonStyle} onClick={handleClose}>
        ×
      </button>
      <img
        src={img}
        alt="Popup Image"
        style={{
          maxWidth: "60%",
          maxHeight: "60%",
        }}
        className="popup-image"
      />
    </Modal>
  );
};

export default ImagePopup;
