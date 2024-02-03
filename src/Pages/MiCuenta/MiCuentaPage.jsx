import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import MiPerfil from "./MiPerfil";
import clienteAxios from "../../utils/axios";
import { Spinner } from "react-bootstrap";
import Seguridad from "./Seguridad";
const MiCuentaPage = () => {
  const [usuario, setUsuario] = useState({});

  const idUser = JSON.parse(sessionStorage.getItem("idUser"));
  const token = JSON.parse(sessionStorage.getItem("token"));

  const obtenerUsuario = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_BACK_URL_DEPLOY}/user/${idUser}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const res = await response.json()
    setUsuario(res.oneUser)
  };
  useEffect(() => {
    obtenerUsuario();
  }, []);
  return (
    <Tabs defaultActiveKey="perfil" id="fill-tab-example" className="mb-3" fill>
      <Tab
        eventKey="perfil"
        title={
          <>
            <i className="bi bi-person-circle"></i> Mi perfil
          </>
        }
      >
        {Object.keys(usuario).length > 0 ? (
          <MiPerfil usuario={usuario} obtenerUsuario={obtenerUsuario} />
        ) : (
          <div className="d-flex">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <p>Cargando información del usuario...</p>
          </div>
        )}
      </Tab>
      <Tab
        eventKey="seguridad"
        title={
          <>
            <i className="bi bi-shield-lock"></i> Configuración de seguridad
          </>
        }
      >
        {Object.keys(usuario).length > 0 ? (
          <Seguridad usuario={usuario} />
        ) : (
          <div className="d-flex">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <p>Cargando información del usuario...</p>
          </div>
        )}
      </Tab>
    </Tabs>
  );
};

export default MiCuentaPage;
