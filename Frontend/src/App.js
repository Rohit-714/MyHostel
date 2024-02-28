import React from 'react';
import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './Authentication/SignUp';
import Login from './Authentication/Login';
import Navbar from './HomeComponent/Navbar';
import RoomDetails from './HomeComponent/RoomDetails'; 
import CreateRequest from './HomeComponent/CreateRequest';
// import Feedback from './HomeComponent/Feedback';
import HomePage from './HomeComponent/HomePage';
import Contact from './HomeComponent/Contact';
import About from './HomeComponent/About';
import UpdateDetail from './HomeComponent/UpdateDetails';
import RoomDetailsPage from './HomeComponent/RoomDetailsPage'
import FurRommDetailsPage from './HomeComponent/FurRommDetailsPage';
import WifiDetailPage from './HomeComponent/WifiDetailPage'
import MessDetail from './HomeComponent/MessDetail';
import Housekeeping from './HomeComponent/HouseKeeping';
import LaundryDetail from './HomeComponent/LaundaryDetail';
import  Warden  from './HomeComponent/Warden';
import Feedback from './HomeComponent/Feedback';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/room-details/:roomId" element={<RoomDetails />} />
        <Route path="/create-request" element={<CreateRequest />} />
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/update-detail' element={<UpdateDetail/>}/>
        <Route path='/room-detail-page' element={<RoomDetailsPage/>}/>
        <Route path='/fur-room-detail-page' element={<FurRommDetailsPage/>}/>
        <Route path='/wifi-detail-page' element={<WifiDetailPage/>}/>
        <Route path='/mess-detail' element={<MessDetail/>}/>
        <Route path='/housekeeping' element={<Housekeeping/>}/>
        <Route path='/laundary-detail' element={<LaundryDetail/>}/>
        <Route path='/warden' element={<Warden/>}/>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
