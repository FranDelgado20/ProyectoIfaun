import { Route, Routes } from "react-router-dom";
import React from 'react'
import RegisterPage from "../Pages/RegisterPage";

const RoutesViews = () => {
  return (
    <Routes>
        <Route path="/register" element={<RegisterPage/>}/>
    </Routes>
  )
}

export default RoutesViews