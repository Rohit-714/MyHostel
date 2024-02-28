import React, { useState } from 'react';
import '../CSS/Contact.css';
import StaffModal from './StaffModal'; 

const Contact = () => {
    const [showStaffModal, setShowStaffModal] = useState(false);
    const [selectedStaff, setSelectedStaff] = useState(null);
  
    
    const handleOpenStaffModal = (staff) => {
      setSelectedStaff(staff);
      setShowStaffModal(true);
    };
  
    
    const handleCloseStaffModal = () => {
      setSelectedStaff(null);
      setShowStaffModal(false);
    };
  

    const staffMembers = [
        { 
          name: 'Sudha Vashishta', 
          position: 'Owner', 
          contactNo: '123-456-7890',
          description: 'Sudha Vashishta is the owner of our hostel management system. She oversees all operations and ensures smooth functioning of the hostel.' 
        },
        { 
          name: 'Shobha Sharma', 
          position: 'Warden', 
          contactNo: '987-654-3210',
          description: 'Shobha Sharma is the warden of our hostel. She is responsible for the well-being and discipline of the students residing in the hostel.' 
        },
        { 
          name: 'Vishal Thakur', 
          position: 'Cook', 
          contactNo: '123-456-7890',
          description: 'Vishal Thakur is one of our cooks. He prepares delicious and nutritious meals for the hostel residents.' 
        },
        { 
          name: 'Vinay Sharma', 
          position: 'Cook', 
          contactNo: '987-654-3210',
          description: 'Vinay Sharma is another cook in our hostel. He assists Vishal Thakur in preparing meals for the residents.' 
        },
        { 
          name: 'Rishabh Thakur', 
          position: 'Manager', 
          contactNo: '123-456-7890',
          description: 'Rishabh Thakur is the manager of our hostel. He handles administrative tasks and ensures smooth functioning of the hostel.' 
        },
        { 
          name: 'Ganesh Ravade', 
          position: 'Assistant Manager', 
          contactNo: '987-654-3210',
          description: 'Ganesh Ravade assists the manager in various administrative tasks and oversees day-to-day operations of the hostel.' 
        },
        { 
          name: 'Jayesh Karma',  
          position: 'Housekeeper', 
          contactNo: '123-996-7890',
          description: 'Jayesh Karma is responsible for maintaining cleanliness and hygiene in the hostel premises. He ensures that all areas are kept neat and tidy.' 
        },
        { 
          name: 'Harshit Sitole', 
          position: 'Security Guard', 
          contactNo: '987-654-0010',
          description: 'Harshit Sitole is the security guard of our hostel. He ensures the safety and security of the residents and the hostel premises.' 
        }
      ];
      
 
  return (
    <div>
      <div className="contactContainer">
        <h1>Contact Us</h1>
        <p>Feel free to contact any of our staff members for assistance:</p>
        <div className="staffList">
          {staffMembers.map((staff, index) => (
            <div key={index} className="staffMember" onClick={() => handleOpenStaffModal(staff)}>
              <h2>{staff.name}</h2>
              <p>{staff.position}</p>
              <p>Contact No: {staff.contactNo}</p>
            </div>
          ))}
        </div>
      </div>

       {/* Render StaffModal if selectedStaff is not null */}
       {selectedStaff && (
        <StaffModal
          showStaffModal={showStaffModal}
          handleCloseStaffModal={handleCloseStaffModal}
          staff={selectedStaff}
        />
      )}
    </div>
  );
};

export default Contact;
