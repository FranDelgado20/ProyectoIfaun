import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import clienteAxios, { config } from "../../utils/axios";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import { Formik } from "formik";
const Usuarios = ({ usuarios, obtenerUsuarios }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [usuario, setUsuario] = useState({});
  const obtenerUsuario = async (id) => {
    setShow(true);
    try {
      const resGetUser = await clienteAxios.get(`/user/${id}`);
      setUsuario(resGetUser.data.oneUser);
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "¡Al parecer hubo un error!",
        text: error.response.data.msg,
      });
    }
  };
  const editarRol = async (values) => {
    try {
      const resEdit = await clienteAxios.put(
        `/user/${usuario._id}`,
        {
          role: values.role,
        },
        config
      );
      if (resEdit.status === 200) {
        Swal.fire({
          icon: "success",
          title: "¡Usuario Editado!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      obtenerUsuarios();
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "¡Al parecer hubo un error!",
        text: error.response.data.msg,
      });
    }
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre y Apellido</th>
          <th>Correo Electrónico</th>
          <th>Rol</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {usuarios?.map((user) => (
          <tr key={user._id}>
            <td>{user.fullName}</td>
            <td>{user.email}</td>
            <td>
              {user.role === "user" ? (
                "Usuario"
              ) : (
                <>
                  {" "}
                  Administrador <i className="bi bi-person-fill-gear"></i>{" "}
                </>
              )}
            </td>
            <td className="d-flex justify-content-around">
              <Button variant="info" onClick={() => obtenerUsuario(user._id)}>
                Editar
                <i className="bi bi-pencil-square"></i>
              </Button>

              <Formik
                initialValues={{ role: usuario.role }}
                onSubmit={(values) => editarRol(values)}
              >
                {({ values, handleChange, handleSubmit }) => (
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>
                        Editar la configuración de usuario
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form.Select
                        name="role"
                        aria-label="Default select example"
                        value={values.role}
                        onChange={handleChange}
                      >
                        <option value={"user"}>
                          {usuario.role === "user"
                            ? "Usuario"
                            : "Administrador"}
                        </option>
                        <option value={"admin"}>
                          {usuario.role === "admin"
                            ? "Administrador"
                            : "Usuario"}
                        </option>
                      </Form.Select>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                      </Button>
                      <Button variant="primary" onClick={handleSubmit}>
                        Guardar Cambios
                      </Button>
                    </Modal.Footer>
                  </Modal>
                )}
              </Formik>
              <Button variant="danger">
                Eliminar <i className="bi bi-trash"></i>
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Usuarios;
