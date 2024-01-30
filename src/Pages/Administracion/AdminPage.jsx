import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Usuarios from "./Usuarios";
import Comentarios from "./Comentarios";
import { Container, Spinner } from "react-bootstrap";
import Swal from "sweetalert2";
import clienteAxios, { config } from "../../utils/axios";
const AdminPage = () => {
  const [comentarios, setComentarios] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  const token = JSON.parse(sessionStorage.getItem("token"));

  const obtenerUsuarios = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACK_URL_LOCAL}/user`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        }
      );
      const res = await response.json()
      setUsuarios(res.allUsers);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "¡Al parecer hubo un error!",
        text: error,
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };

  const obtenerComentarios = async () => {
    try {
      const res = await clienteAxios.get("/comentarios", config);
      setComentarios(res.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "¡Al parecer hubo un error!",
        text: error,
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };

  useEffect(() => {
    obtenerUsuarios();
    obtenerComentarios();
  }, []);

  return (
    <Container fluid className="my-3">
      <Tabs
        defaultActiveKey="usuarios"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="usuarios" title="Usuarios">
          {usuarios.length > 0 ? (
            <Usuarios usuarios={usuarios} obtenerUsuarios={obtenerUsuarios} />
          ) : (
            <div className="d-flex">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              <p>Cargando información del usuario...</p>
            </div>
          )}
        </Tab>
        <Tab eventKey="comentarios" title="Comentarios">
          {usuarios.length > 0 ? (
            <Comentarios comentarios={comentarios} obtenerComentarios={obtenerComentarios} />
          ) : (
            <div className="d-flex">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              <p>Cargando comentarios...</p>
            </div>
          )}
        </Tab>
        {/* <Tab eventKey="longer-tab" title="Loooonger Tab">
        Tab content for Loooonger Tab
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab> */}
      </Tabs>
    </Container>
  );
};

export default AdminPage;
