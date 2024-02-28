// import React, { useState } from "react";
// import "../CSS/Navbar.css";
// import { Link } from "react-router-dom";
// import RoomDetails from "./RoomDetails";
// import CreateRequest from "./CreateRequest";
// import { Modal, Button } from "react-bootstrap"; // Import Bootstrap Modal and Button components

// const Navbar = () => {
//   const [showModal, setShowModal] = useState(false);

//   // Function to show the modal
//   const handleShowModal = () => {
//     setShowModal(true);
//   };

//   // Function to hide the modal
//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   //for create request
//   const [showCreateRequest, setShowCreateRequest] = useState(false);

//   const handleCreateRequestClick = () => {
//     setShowCreateRequest(true);
//   };

//   const handleCloseCreateRequest = () => {
//     setShowCreateRequest(false);
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#" style={{ marginRight: "900px" }}>
//             <b>Hostel Management</b>
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a
//                   className="nav-link active"
//                   aria-current="page"
//                   href="#"
//                   style={{ marginRight: "10px" }}
//                 >
//                   Home
//                 </a>
//               </li>

//               <li className="nav-item">
//                 {/* Replaced Link with a div */}
//                 <div
//                   className="nav-link"
//                   style={{
//                     cursor: "pointer",
//                     color: "rgba(0, 0, 0, .9)",
//                     marginRight: "10px",
//                   }}
//                   onClick={handleShowModal} // Call the function to show modal
//                 >
//                   Room Details
//                 </div>
//               </li>

//               <li>
//                 <div style={{ marginRight: "10px", marginTop: "8px" }}>
//                   <Link
//                     to="/create-request"
//                     style={{
//                       cursor: "pointer",
//                       color: "rgba(0, 0, 0, .9)",
//                       textDecoration: "none",
//                     }}
//                   >
//                     Create Request
//                   </Link>
//                 </div>
//               </li>

//               <li className="nav-item">
//               <div style={{ marginRight: "10px", marginTop: "8px" }}>
//                 <Link
//                   to="/feedback"
//                   style={{  cursor: "pointer", color: "rgba(0, 0, 0, .9)", textDecoration: "none", }}
//                 >
//                   Feedback
//                 </Link>
//                 </div>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link"
//                   href="#"
//                   style={{ color: "rgba(0, 0, 0, .9)", marginRight: "10px" }}
//                 >
//                   Contact
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link"
//                   href="#"
//                   style={{ color: "rgba(0, 0, 0, .9)", marginRight: "10px" }}
//                 >
//                   About
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link"
//                   href="#"
//                   style={{ color: "rgba(0, 0, 0, .9)", marginRight: "10px" }}
//                 >
//                   Update Details
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <div className="image-container">
//         <img
//           src="https://img.freepik.com/free-photo/furniture-background-clean-wall-wood_1253-666.jpg?w=826&t=st=1708335971~exp=1708336571~hmac=5ca2a0641b7c3811770935766a621b3f57b974c13f8c7b1e0dd851bfb8b926c2"
//           width="900px"
//           height="500px"
//           alt="Hostel Banner"
//           style={{ borderRadius: "15px", marginLeft: "400px" }}
//         />
//         <h2 className="card-title" style={{ marginLeft: "750px" }}>
//           Room Details
//         </h2>
//         <p className="card-text" style={{ marginLeft: "600px" }}>
//           rooms available, such as single rooms, double rooms, dormitories,
//           suites, etc.
//         </p>
//       </div>

//       <div style={{ marginTop: "100px" }}>
//         <h2 style={{ marginLeft: "800px" }}>Services</h2>
//       </div>

//       <div className="container">
//         <div className="row row-cols-1 row-cols-lg-3 g-4">
//           <div className="col mycontainer">
//             <div className="card h-100">
//               <a href="#" className="card-link" style={{ marginTop: "30px" }}>
//                 <img
//                   src="https://play-zelo-production.s3.ap-south-1.amazonaws.com/uploads/center/cover_photo/5ffff1f59a64d900010b5f12/PG_in_Adyar.jpeg"
//                   className="card-img-top"
//                   alt="Furnished Rooms"
//                   style={{ borderRadius: "15px" }}
//                 />
//               </a>
//               <div className="card-body">
//                 <h5 className="card-title">Furnished Rooms</h5>
//                 <p className="card-text">
//                   Modern and well-furnished rooms for comfortable living.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="col mycontainer">
//             <div className="card h-100">
//               <a href="#" className="card-link" style={{ marginTop: "30px" }}>
//                 <img
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaXqSqjYy4Dj04GX6gyIZBb2MdasojmLlSKQ&usqp=CAU"
//                   className="card-img-top"
//                   alt="WIFI"
//                   style={{ borderRadius: "15px" }}
//                 />
//               </a>
//               <div className="card-body">
//                 <h5 className="card-title">WIFI</h5>
//                 <p className="card-text">
//                   High-speed WIFI connectivity available throughout the
//                   premises.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="col mycontainer">
//             <div className="card h-100">
//               <a href="#" className="card-link" style={{ marginTop: "30px" }}>
//                 <img
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmBEYr4BBy_Y4M3TJ6LQO-Y6jCJDoXGJdahg&usqp=CAU"
//                   className="card-img-top"
//                   alt="Mess"
//                   style={{ borderRadius: "15px" }}
//                 />
//               </a>
//               <div className="card-body">
//                 <h5 className="card-title">Mess</h5>
//                 <p className="card-text">
//                   Healthy and delicious meals served at the hostel mess.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="col  mycontainer">
//             <div className="card h-100">
//               <a href="#" className="card-link" style={{ marginTop: "30px" }}>
//                 <img
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ2ZG2b3T-gwUBvu3GkC4o2536KuuLRZoJlg&usqp=CAU"
//                   className="card-img-top"
//                   alt="Housekeeping"
//                   style={{ borderRadius: "15px" }}
//                 />
//               </a>
//               <div className="card-body">
//                 <h5 className="card-title">Housekeeping</h5>
//                 <p className="card-text">
//                   Regular housekeeping services to maintain cleanliness and
//                   hygiene.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="card h-100  mycontainer">
//             <a href="#" className="card-link" style={{ marginTop: "30px" }}>
//               <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_SMnSuAHgDDOSfUsE202ZR595_pOG7tUyjg&usqp=CAU"
//                 className="card-img-top"
//                 alt="Warden"
//                 style={{ borderRadius: "15px" }}
//               />
//             </a>
//             <div className="card-body">
//               <h5 className="card-title">Food Facility</h5>
//               <p className="card-text">
//                 Our hostel offers a comprehensive food service, ensuring
//                 residents enjoy nutritious.
//               </p>
//             </div>
//           </div>

//           <div className="col  mycontainer">
//             <div className="card h-100">
//               <a href="#" className="card-link" style={{ marginTop: "20px" }}>
//                 <img
//                   src="https://rkmvshimla.edu.in/images/hostel/full4.jpg"
//                   className="card-img-top"
//                   alt="Warden"
//                   style={{ borderRadius: "15px" }}
//                 />
//               </a>
//               <div className="card-body">
//                 <h5 className="card-title">Warden</h5>
//                 <p className="card-text">
//                   Friendly and supportive wardens available 24/7 for assistance.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Gallery section */}
//       <div className="gallery-container">
//         <h1
//           className="gallery-title"
//           style={{ marginTop: "150px", marginLeft: "800px" }}
//         >
//           Gallery
//         </h1>
//         <div className="row">
//           <div className="col mycontainer">
//             <div className="card h-100">
//               <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtSNgjauwBke4PJJVC0Vk6FpMmRASYLGuAKw&usqp=CAU"
//                 alt="Gallery Image 1"
//                 className="card-img-top"
//                 style={{ borderRadius: "15px" }}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">Captured Memories</h5>
//                 <p>
//                   Explore our gallery filled with captured memories, showcasing
//                   the vibrant life of our hostel community.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col mycontainer">
//             <div className="card h-100">
//               <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0cIDKEwmEhDEtC6xr-mo6-3MjBRQptVIZl18jL9TB91AjjaYNVzfTw-rZdh8dTQOSmA&usqp=CAU"
//                 alt="Gallery Image 2"
//                 className="card-img-top"
//                 style={{ borderRadius: "15px" }}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">Snapshot of Happiness</h5>
//                 <p>
//                   Dive into our gallery and witness a snapshot of happiness,
//                   where every picture tells a unique story of camaraderie and
//                   joy.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col mycontainer">
//             <div className="card h-100">
//               <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv167_rELDSYOnIW3XgHqZVUVnuZ4h8MI7Sw&usqp=CAU"
//                 alt="Gallery Image 3"
//                 className="card-img-top"
//                 style={{ borderRadius: "15px" }}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">Moments to Cherish</h5>
//                 <p>
//                   Take a glimpse into moments to cherish forever. Our gallery
//                   encapsulates the essence of unforgettable experiences within
//                   our hostel walls.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Render the RoomDetails component */}
//       <RoomDetails showModal={showModal} setShowModal={setShowModal} />

//       {showCreateRequest && (
//         <div className="overlay">
//           <div className="overlay-content">
//             <CreateRequest />
//             <button onClick={handleCloseCreateRequest}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;


// //  {/* Render StaffModal if selectedStaff is not null */}
// {selectedStaff && (
//   <StaffModal
//     showStaffModal={showStaffModal}
//     handleCloseStaffModal={handleCloseStaffModal}
//     staff={selectedStaff}
//   />
// )}