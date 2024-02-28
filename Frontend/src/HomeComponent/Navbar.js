// Navbar.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import RoomDetails from "./RoomDetails";
import CreateRequest from "./CreateRequest";
import UpdateDetail from "./UpdateDetails";
const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  // Function to show the modal
  const handleShowModal = () => {
    setShowModal(true);
  };

  // Function to hide the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowUpdateModal = () => {
    setShowUpdateModal(true);
  };

  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
  };

  //for create request
  const [showCreateRequest, setShowCreateRequest] = useState(false);

  const handleCreateRequestClick = () => {
    setShowCreateRequest(true);
  };

  const handleCloseCreateRequest = () => {
    setShowCreateRequest(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/homepage"
          style={{
            cursor: "pointer",
            color: "rgba(0, 0, 0, .9)",
            textDecoration: "none",
          }}
        >
          <b>Hostel Management</b>
        </Link>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ marginLeft: "900px" }}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" style={{ marginLeft: "15px" }}>
              <div>
                <Link
                  to="/homepage"
                  style={{
                    cursor: "pointer",
                    color: "rgba(0, 0, 0, .9)",
                    textDecoration: "none",
                  }}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </div>
            </li>

            <li className="nav-item" style={{ marginLeft: "10px" }}>
              <div
                className="nav-link"
                style={{
                  cursor: "pointer",
                  color: "rgba(0, 0, 0, .9)",
                }}
                onClick={handleShowModal} // Call the function to show modal
              >
                Room Details
              </div>
            </li>

            <li className="nav-item" style={{ marginLeft: "10px" }}>
              <div style={{ marginTop: "8px" }}>
                <Link
                  to="/create-request"
                  style={{
                    cursor: "pointer",
                    color: "rgba(0, 0, 0, .9)",
                    textDecoration: "none",
                  }}
                >
                  Create Request
                </Link>
              </div>
            </li>

            <li className="nav-item" style={{ marginLeft: "10px" }}>
              <div style={{ marginTop: "8px" }}>
                <Link
                  to="/feedback"
                  style={{
                    cursor: "pointer",
                    color: "rgba(0, 0, 0, .9)",
                    textDecoration: "none",
                  }}
                >
                  Feedback
                </Link>
              </div>
            </li>
            <li className="nav-item" style={{ marginLeft: "10px" }}>
              <div style={{ marginTop: "8px" }}>
                <Link
                  to="/contact"
                  style={{
                    cursor: "pointer",
                    color: "rgba(0, 0, 0, .9)",
                    textDecoration: "none",
                  }}
                >
                  Contact
                </Link>
              </div>
            </li>
            <li className="nav-item" style={{ marginLeft: "10px" }}>
              <div style={{ marginTop: "8px" }}>
                <Link
                  to="/about"
                  style={{
                    cursor: "pointer",
                    color: "rgba(0, 0, 0, .9)",
                    textDecoration: "none",
                  }}
                >
                  About
                </Link>
              </div>
            </li>
            <li className="nav-item" style={{ marginLeft: "10px" }}>
              <div
                className="nav-link"
                style={{
                  cursor: "pointer",
                  color: "rgba(0, 0, 0, .9)",
                }}
                onClick={handleShowUpdateModal} // Call the function to show Update Details Modal
              >
                Update Details
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Render the RoomDetails component */}
      <RoomDetails showModal={showModal} setShowModal={setShowModal} />

      {showCreateRequest && (
        <div className="overlay">
          <div className="overlay-content">
            <CreateRequest />
            <button onClick={handleCloseCreateRequest}>Close</button>
          </div>
        </div>
      )}

      <UpdateDetail
        show={showUpdateModal}
        handleClose={handleCloseUpdateModal}
      />
    </nav>
  );
};

export default Navbar;
