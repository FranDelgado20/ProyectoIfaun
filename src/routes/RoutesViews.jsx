import { Route, Routes } from "react-router-dom";
import React from 'react'
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import HomePage from "../Pages/HomePage";
import ContactPage from "../Pages/ContactPage";

const RoutesViews = () => {
  return (
    <Routes>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
    </Routes>
  )
}

export default RoutesViews