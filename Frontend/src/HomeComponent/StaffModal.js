import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const StaffModal = ({ showStaffModal, handleCloseStaffModal, staff }) => {
  return (
    <Modal show={showStaffModal} onHide={handleCloseStaffModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Staff Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <p>Name: {staff.name}</p>
        <p>Position: {staff.position}</p>
        <p>Contact No: {staff.contactNo}</p>
        <p>description: {staff.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseStaffModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default StaffModal;
