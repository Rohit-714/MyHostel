import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { API_BASE_URL } from "./apiConfig";

const RoomDetails = ({ showModal, setShowModal }) => {
  const [roomData, setRoomData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (showModal) {
      axios
        .get(`${API_BASE_URL}/rails/user_profile/rooms/room/1`, {
          headers: {
            'Content-Type': 'application/json'
          },
        })
        .then((response) => {
          console.log(response.data);  
          setRoomData(response.data);
          // debugger
          setError(null); 
        })
        .catch((error) => {
          console.error("Error fetching room details:", error);
          setError("Error fetching room details. Please try again.");
        });
    }
  }, [showModal]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Room Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <p>{error}</p>}
        {roomData ? (
          <>
            <p>Room Type: {roomData.roomType}</p>
            <p>Fees: {roomData.fees}</p>
            {/* <p>Capacity: {roomData.capacity}</p> */}
            <p>Description: {roomData.description}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RoomDetails;
