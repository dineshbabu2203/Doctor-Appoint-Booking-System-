import React from 'react'

import Home from '../pages/Home';
import Services from '../pages/Services';

import Signup from '../pages/Signup';
import Login from '../pages/Loginn';
import Contact from '../pages/Contact';
import Doctors from '../pages/doctor/Doctors';
import DoctorsDetails from '../pages/doctor/DoctorDetails';
import { Routes, Route } from 'react-router-dom';
import MyAccount from '../Dashboard/user-account/MyAccount';
import Dashboard from '../Dashboard/doctor-account/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import CheckoutSuccess from '../pages/CheckoutSuccess';


const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/doctors/:id" element={<DoctorsDetails/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/checkout-success" elements={<CheckoutSuccess/>}/>
        <Route path="/users/profile/me" element={<ProtectedRoute allowedRoles={['patient']}><MyAccount/></ProtectedRoute>}/>
        <Route path="/doctors/profile/me" element={<ProtectedRoute allowedRoles={['doctor']}><Dashboard/></ProtectedRoute>}/>
    </Routes>
  )
}

export default Routers
