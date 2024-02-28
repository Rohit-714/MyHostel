import React from "react";
import "../CSS/Navbar.css";
import { Link } from "react-router-dom";
import img from "../Images/img3.jpg";
import Footer from "./Footer";
class HomePage extends React.Component {
  render() {
    return (
      <div className="wholePage">
        <div className="image-container" style={{ cursor: "pointer" }}>
          <Link to="/room-detail-page">
            <img
              src="https://img.freepik.com/free-photo/furniture-background-clean-wall-wood_1253-666.jpg?w=826&t=st=1708335971~exp=1708336571~hmac=5ca2a0641b7c3811770935766a621b3f57b974c13f8c7b1e0dd851bfb8b926c2"
              width="900px"
              height="500px"
              alt="Hostel Banner"
              style={{ borderRadius: "15px", marginLeft: "400px" }}
            />
          </Link>
          <Link to="/room-detail-page" style={{ textDecoration: "none" }}>
            <h2 className="card-title" style={{ marginLeft: "750px" }}>
              Room Details
            </h2>
          </Link>
          <p className="card-text" style={{ marginLeft: "600px" }}>
            rooms available, such as single rooms, double rooms, dormitories,
            suites, etc.
          </p>
        </div>

        <div style={{ marginTop: "100px" }}>
          <h2 style={{ marginLeft: "800px" }}>Services</h2>
        </div>

        <div className="container">
          <div className="row row-cols-1 row-cols-lg-3 g-4">
            <div className="col mycontainer">
              <div className="card h-100">
                <Link
                  to="/fur-room-detail-page"
                  className="card-link"
                  style={{ display: "block" }}
                >
                  <img
                    src={img}
                    className="card-img-top"
                    alt="Furnished Rooms"
                    style={{
                      borderRadius: "15px",
                      height: "200px",
                      objectFit: "cover",
                      marginTop: "60px",
                    }}
                  />
                </Link>
                <div className="card-body">
                  <Link
                    to="/fur-room-detail-page"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <h5 className="card-title" style={{ marginLeft: "10px" }}>
                      Furnished Rooms
                    </h5>
                  </Link>
                  <p className="card-text" style={{ marginLeft: "10px" }}>
                    Click on the image to explore different furnished room
                    options.
                  </p>
                </div>
              </div>
            </div>

            <div className="col mycontainer">
              <div className="card h-100">
                <a href="#" className="card-link" style={{ marginTop: "30px" }}>
                  \
                  <Link
                    to="/wifi-detail-page"
                    className="card-link"
                    style={{ display: "block" }}
                  >
                    <img
                      src="https://st3.depositphotos.com/15954128/33961/i/450/depositphotos_339615494-stock-photo-smart-city-and-wireless-communication.jpg"
                      className="card-img-top"
                      alt="WIFI"
                      style={{
                        borderRadius: "15px",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                  </Link>
                </a>
                <div className="card-body">
                  <Link
                    to="/wifi-detail-page"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <h5 className="card-title">WIFI</h5>
                  </Link>
                  <p className="card-text" style={{ marginLeft: "10px" }}>
                    High-speed WIFI connectivity available throughout the
                    premises.
                  </p>
                </div>
              </div>
            </div>

            <div className="col mycontainer">
              <div className="card h-100">
                <a href="#" className="card-link" style={{ marginTop: "60px" }}>
                  <Link
                    to="/mess-detail"
                    className="card-link"
                    style={{ display: "block" }}
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmBEYr4BBy_Y4M3TJ6LQO-Y6jCJDoXGJdahg&usqp=CAU"
                      className="card-img-top"
                      alt="Mess"
                      style={{
                        borderRadius: "15px",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                  </Link>
                </a>
                <div className="card-body">
                  <Link
                    to="/wifi-detail-page"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <h5 className="card-title">Mess</h5>
                  </Link>
                  <p className="card-text" style={{ marginLeft: "10px" }}>
                    Healthy and delicious meals served at the hostel mess.
                  </p>
                </div>
              </div>
            </div>

            <div className="col  mycontainer">
              <div className="card h-100">
                <a href="#" className="card-link" style={{ marginTop: "30px" }}>
                  <Link
                    to="/housekeeping"
                    className="card-link"
                    style={{ display: "block" }}
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ2ZG2b3T-gwUBvu3GkC4o2536KuuLRZoJlg&usqp=CAU"
                      className="card-img-top"
                      alt="Housekeeping"
                      style={{
                        borderRadius: "15px",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                  </Link>
                </a>
                <div className="card-body">
                  <Link
                    to="/wifi-detail-page"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <h5 className="card-title">Housekeeping</h5>
                  </Link>
                  <p className="card-text" style={{ marginLeft: "10px" }}>
                    Regular housekeeping services to maintain cleanliness and
                    hygiene.
                  </p>
                </div>
              </div>
            </div>

            <div className="card h-100 mycontainer">
              <a href="#" className="card-link" style={{ marginTop: "30px" }}>
                <Link
                  to="/laundary-detail"
                  className="card-link"
                  style={{ display: "block" }}
                >
                  <img
                    src="https://media-cdn.tripadvisor.com/media/photo-s/1b/48/63/93/laundry-room.jpg"
                    className="card-img-top"
                    alt="Laundry"
                    style={{
                      borderRadius: "15px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </Link>
              </a>
              <div className="card-body">
                <Link
                  to="/laundary-detail"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <h5 className="card-title">Laundry Facility</h5>
                </Link>
                <p className="card-text" style={{ marginLeft: "10px" }}>
                  Our hostel provides laundry facilities for the convenience of
                  our residents.
                </p>
              </div>
            </div>

            <div className="col  mycontainer">
              <div className="card h-100">
                <a href="#" className="card-link" style={{ marginTop: "30px" }}>
                <Link
                  to="/warden"
                  className="card-link"
                  style={{ display: "block" }}
                >
                  <img
                    src="https://rkmvshimla.edu.in/images/hostel/full4.jpg"
                    className="card-img-top"
                    alt="Warden"
                    style={{
                      borderRadius: "15px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  </Link>
                </a>
                <div className="card-body">
                <Link
                  to="/laundary-detail"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <h5 className="card-title">Warden</h5>
                  </Link>
                  <p className="card-text" style={{ marginLeft: "10px" }}>
                    Friendly and supportive wardens available 24/7 for
                    assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery section */}
        <div className="gallery-container" style={{ cursor: "pointer" }}>
          <h1
            className="gallery-title"
            style={{ marginTop: "150px", marginLeft: "800px" }}
          >
            Gallery
          </h1>
          <div className="row">
            <div className="col mycontainer">
              <div className="card h-100">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtSNgjauwBke4PJJVC0Vk6FpMmRASYLGuAKw&usqp=CAU"
                  alt="Gallery Image 1"
                  className="card-img-top"
                  style={{
                    borderRadius: "15px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">Captured Memories</h5>
                  <p>
                    Explore our gallery filled with captured memories,
                    showcasing the vibrant life of our hostel community.
                  </p>
                </div>
              </div>
            </div>
            <div className="col mycontainer">
              <div className="card h-100">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0cIDKEwmEhDEtC6xr-mo6-3MjBRQptVIZl18jL9TB91AjjaYNVzfTw-rZdh8dTQOSmA&usqp=CAU"
                  alt="Gallery Image 2"
                  className="card-img-top"
                  style={{
                    borderRadius: "15px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">Snapshot of Happiness</h5>
                  <p>
                    Dive into our gallery and witness a snapshot of happiness,
                    where every picture tells a unique story of camaraderie and
                    joy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col mycontainer">
              <div className="card h-100">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv167_rELDSYOnIW3XgHqZVUVnuZ4h8MI7Sw&usqp=CAU"
                  alt="Gallery Image 3"
                  className="card-img-top"
                  style={{
                    borderRadius: "15px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">Moments to Cherish</h5>
                  <p>
                    Take a glimpse into moments to cherish forever. Our gallery
                    encapsulates the essence of unforgettable experiences within
                    our hostel walls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer/>
      </div>
    );
  }
}
export default HomePage;
