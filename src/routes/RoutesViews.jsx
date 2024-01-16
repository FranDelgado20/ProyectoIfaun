import { Route, Routes } from "react-router-dom";
import React from 'react'
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";

const RoutesViews = () => {
  return (
    <Routes>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
    </Routes>
  )
}

export default RoutesViews