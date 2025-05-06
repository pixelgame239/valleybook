// components/TrialReadModal.jsx
import React from "react";
import { Modal, Button } from "react-bootstrap";

const TrialReadModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Đọc thử</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          src={
            "https://drive.google.com/file/d/1aPIjZvmuoSWBRccnTLwETyDEHP5SWRkX/preview"
          }
          width="100%"
          height="500px"
          style={{ border: "none" }}
          title="Trial PDF"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TrialReadModal;
