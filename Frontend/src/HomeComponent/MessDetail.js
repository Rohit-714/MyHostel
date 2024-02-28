import React from 'react';
import '../CSS/MessDetail.css';

const menu = {
  Monday: ["Breakfast: Masala Dosa with Sambar and Chutney", "Lunch: Rajma Chawal", "Dinner: Palak Paneer"],
  Tuesday: ["Breakfast: Poha", "Lunch: Chole Bhature", "Dinner: Vegetable Biryani"],
  Wednesday: ["Breakfast: Aloo Paratha with Curd", "Lunch: Dal Tadka with Jeera Rice", "Dinner: Paneer Butter Masala with Naan"],
  Thursday: ["Breakfast: Idli with Coconut Chutney and Sambar", "Lunch: Baingan Bharta with Roti", "Dinner: Chicken Curry with Steamed Rice"],
  Friday: ["Breakfast: Upma", "Lunch: Aloo Gobi with Chapati", "Dinner: Tandoori Chicken with Mint Chutney"],
  Saturday: ["Breakfast: Poori Bhaji", "Lunch: Veg Pulao with Raita", "Dinner: Mutton Rogan Josh with Garlic Naan"],
  Sunday: ["Breakfast: Medu Vada with Coconut Chutney", "Lunch: Chicken Biryani", "Dinner: Vegetable Korma with Paratha"]
};

const MessDetail = () => {
  return (
    <div className='full_container'>
    <div className="menu-container">
      <h2 >Mess Menu</h2>
      <div className="menu-list">
        {Object.keys(menu).map((day, index) => (
          <div key={index} className="menu-item">
            <h3>{day}</h3>
            <ul>
              {menu[day].map((dish, idx) => (
                <li key={idx}>{dish}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default MessDetail;
