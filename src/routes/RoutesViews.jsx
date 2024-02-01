import { Route, Routes } from "react-router-dom";
import React from "react";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import HomePage from "../Pages/HomePage";
import ContactPage from "../Pages/ContactPage";
import AdminPage from "../Pages/Administracion/AdminPage";
import PrivateRoutes from "../components/PrivateRoutes";
import MiCuentaPage from "../Pages/MiCuenta/MiCuentaPage";
import Error404 from "../Pages/Error404";

const RoutesViews = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/error" element={<Error404 />} />

      <Route
        path="/miCuenta"
        element={
          <PrivateRoutes role={"user"}>
            <MiCuentaPage />
          </PrivateRoutes>
        }
      />
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
