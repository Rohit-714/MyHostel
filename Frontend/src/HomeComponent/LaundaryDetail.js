import React from 'react';
import '../CSS/LaundaryDetail.css';

const LaundryDetail = () => {
  return (
    <div className='full_containerr'>
    <div className="laundry-details-container">
      <h2>Laundry Facility Details</h2>
      <div className="details" style={{marginTop: "37px"}}>
        <p><strong>Operating Hours:</strong> Monday to Friday: 9:00 AM to 6:00 PM</p>
        <p><strong>Services:</strong> Washing, Drying, Ironing</p>
        <p><strong>Cost:</strong> Washing: $2 per load, Drying: $1 per load, Ironing: $0.50 per item</p>
        <p><strong>Instructions:</strong> Please separate your clothes into whites, colors, and delicates before using the laundry facilities.</p>
        <p><strong>Contact Information:</strong> For any inquiries, please contact the hostel front desk.</p>
      </div>
    </div>
    </div>
  );
}

export default LaundryDetail;
