import { Route, Routes } from "react-router-dom";
import React from "react";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import HomePage from "../Pages/HomePage";
import ContactPage from "../Pages/ContactPage";
import AdminPage from "../Pages/Administracion/AdminPage";
import PrivateRoutes from "../components/PrivateRoutes";

const RoutesViews = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />

      <Route
        path="/admin"
        element={
          <PrivateRoutes role={"admin"}>
            <AdminPage />
          </PrivateRoutes>
        }
      ></Route>
    </Routes>
  );
};

export default RoutesViews;
