// RoomDetailsPage.js

import React from 'react';
import singleSeaterImage from '../Images/img7.jpg';
import doubleSeaterImage from '../Images/img3.jpg';
import threeSeaterImage from '../Images/img4.jpg';
import fourSeaterImage from '../Images/img5.jpg';
const RoomDetailsPage = () => {
  // Define room data
  const rooms = [
    { type: 'Single Seater', rent: '10,000/-', description: 'A cozy single seater room perfect for those seeking privacy and tranquility during their stay. The room is equipped with a comfortable bed, study table, wardrobe, and an attached bathroom.', image: singleSeaterImage },
    { type: 'Double Seater', rent: '7,500/-', description: 'Our double seater room is ideal for couples or friends traveling together. Enjoy the spaciousness and comfort of this room, complete with two beds, individual study areas, ample storage, and a shared bathroom.', image: doubleSeaterImage },
    { type: 'Three Seater', rent: '6,500/-', description: 'Our three seater room offers a balance of affordability and comfort, making it an excellent choice for small groups or families. Each occupant has their own bed and designated space, with shared amenities including study areas, storage, and bathroom facilities.', image: threeSeaterImage },
    { type: 'Four Seater', rent: '5,500/-', description: 'Experience the camaraderie of our four seater room, perfect for larger groups or budget-conscious travelers. This room features four beds arranged in a spacious layout, along with communal study spaces, storage options, and shared bathroom facilities.', image: fourSeaterImage }
  ];

  return (
    <div className="container">
      <h2 className="mt-5 mb-4">Room Details</h2>
      <div className="row">
        {rooms.map((room, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card h-100">
            <img src={room.image} className="card-img-top" alt={room.type} />
              <div className="card-body">
                <h4 className="card-title">{room.type}</h4>
                <h5 className="card-title">{room.rent}</h5>
                <p className="card-text">{room.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomDetailsPage;
