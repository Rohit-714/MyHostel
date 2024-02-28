import React from 'react';
import '../CSS/Warden.css'

const Warden = () => {
  return (
    <div className='full_container'>
    <div className="warden-container">
      <div className="warden-card">
        <img
          src="https://rkmvshimla.edu.in/images/hostel/full4.jpg" 
          alt="Warden"
          className="warden-img"
        />
        <div className="warden-info">
          <h2>Shobha Sharma</h2> 
          <p><strong>Designation:</strong> Warden</p>
          <p><strong>Contact:</strong> +123-456-7890</p>
          <p><strong>Email:</strong> warden@shobha.com</p>
          <p>
            <strong>About:</strong>  Welcome to our Hostel Management System! We are dedicated to providing a seamless and efficient experience for managing hostel operations.
            Our system allows hostel administrators to easily manage room allocations, student details, staff information, feedback, and much more. With user-friendly interfaces and powerful features, hostel management becomes hassle-free and convenient.
            {/* Our mission is to streamline hostel management processes, enhance communication between administrators, staff, and students, and provide a comfortable and safe living environment for hostel residents.
            Our vision is to become the leading provider of hostel management solutions, known for innovation, reliability, and customer satisfaction. */}
          </p>
          <p>
            <strong>Responsibilities:</strong> 
            <ul>
              <li>Ensuring the safety and security of hostel residents.</li>
              <li>Addressing resident concerns and issues.</li>
              <li>Overseeing hostel facilities and maintenance.</li>
              <li>Organizing hostel events and activities.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Warden;
