import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Usuarios from "./Usuarios";
import Comentarios from "./Comentarios";
import { Spinner } from "react-bootstrap";
import Swal from "sweetalert2";
import clienteAxios, { config } from "../../utils/axios";
const AdminPage = () => {
  const [comentarios, setComentarios] = useState([]);

  const [usuarios, setUsuarios] = useState([]);
  const obtenerUsuarios = async () => {
    try {
      const resGetUsers = await clienteAxios.get("/user");
      setUsuarios(resGetUsers.data.allUsers);
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "¡Al parecer hubo un error!",
        text: error.response.data.msg,
      });
    }
  };
  const obtenerComentarios = async () => {
    try {
      const resGetComments = await clienteAxios.get("/comentarios", config);
      setComentarios(resGetComments.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(comentarios);
  useEffect(() => {
    obtenerUsuarios();
    obtenerComentarios();
  }, []);
  return (
    <>
      <Tabs
        defaultActiveKey="usuarios"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="usuarios" title="Usuarios">
          {Object.keys(usuarios).length > 0 ? (
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
          {Object.keys(usuarios).length > 0 ? (
            <Comentarios comentarios={comentarios} />
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
    </>
  );
};

export default AdminPage;
