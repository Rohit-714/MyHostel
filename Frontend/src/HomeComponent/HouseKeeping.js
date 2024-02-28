import React from 'react';
import '../CSS/HouseKeeping.css';

const Housekeeping = () => {
  return (
    <div className='full_container'>
    <div className="housekeeping-container">
      <h2>Housekeeping Services</h2>
      <div className="schedule">
        <h3>Cleaning Schedule</h3>
        <p>Monday: Vacuuming and Dusting</p>
        <p>Tuesday: Bathroom Cleaning</p>
        <p>Wednesday: Kitchen Cleaning</p>
        <p>Thursday: Changing Bed Linens</p>
        <p>Friday: General Tidying Up</p>
      </div>
      <div className="tasks-contact-wrapper">
        <div className="tasks">
          <h3>Additional Tasks</h3>
          <ul>
            <li>Emptying trash bins</li>
            <li>Mopping floors</li>
            <li>Window cleaning</li>
            <li>Laundry services</li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact Information</h3>
          <p>For any housekeeping-related inquiries, please contact:</p>
          <p>Phone: 123-456-7890</p>
          <p>Email: housekeeping@kepp.com</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Housekeeping;
