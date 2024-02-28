import React from "react";
import '../CSS/WifiDetailPage.css'
const wifiDetails = [
  { floor: "1st Floor", password: "firstfloor123" },
  { floor: "2nd Floor", password: "secondfloor123" },
  { floor: "3rd Floor", password: "thirdfloor123" },
  { floor: "Mess", password: "messpass123" }
];

class WifiDetailsPage extends React.Component {
  render() {
    return (
      <div className="wifi-details-container">
        <h2>WIFI Details</h2>
        {wifiDetails.map((detail, index) => (
          <div key={index} className="wifi-detail-card">
            <h3>{detail.floor}</h3>
            <p>Password: {detail.password}</p>
          </div>
        ))}
        <div className="appreciation-message">
          <h5>Appreciation Message</h5>
          <b><p>We would like to extend our sincere appreciation to the owner of the hostel for providing these excellent facilities to our residents. Your dedication to ensuring a comfortable and convenient living environment is commendable.</p></b>
          <img src="https://media.npr.org/assets/artslife/books/2010/12/365-thank-yous/thanks_wide-88835f4809eb2c5bf7f24bea6d46a14f4d6dd2e7-s1400-c100.jpg" style={{ width: '30%', height: '60%', marginTop: "60px" }} alt="Thank You" />
        </div>
      </div>
    );
  }
}

export default WifiDetailsPage;
