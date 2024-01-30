import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Formik } from "formik";
import clienteAxios, { config } from "../utils/axios";
const EditModalComp = ({ user, obtenerUsuarios }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const editarRol = async ({ role }) => {
    try {
      const resEdit = await clienteAxios.put(
        `/user/${usuario._id}`,
        {
          role,
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
        handleClose();
        obtenerUsuarios();
      }
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
    <>
      <Button variant="info" onClick={handleShow} className="my-2 mx-2">
        <i className="bi bi-pencil-fill"></i> Editar
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar la configuración de usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{ role: user.role }}
            onSubmit={(values) => editarRol(values)}
          >
            {({ values, handleChange, handleSubmit }) => (
              <Form>
                <Form.Group className="mb-3" controlId="roleId">
                  <Form.Label>Rol del usuario</Form.Label>
                  <InputGroup>
                    <InputGroup.Text id="groupRole">
                      <i className="bi bi-gear"></i>
                    </InputGroup.Text>
                    <Form.Select
                      name="role"
                      aria-label="Default select example"
                      value={values.role}
                      onChange={handleChange}
                    >
                      <option value={"user"}>Usuario</option>
                      <option value={"admin"}>Administrador</option>
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
                <hr />
                <div className="text-end">
                  <Button variant="info" onClick={handleSubmit}>
                    Guardar cambios
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditModalComp;
