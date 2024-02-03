import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Formik } from "formik";
import clienteAxios, { config } from "../utils/axios";
import Swal from "sweetalert2";

const EditModalComp = ({ user, obtenerUsuario, type }) => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const token = JSON.parse(sessionStorage.getItem("token"));

  const handleClose = () => {
    setShow(false);
    setImage(null);
    setError("");
  };
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
          title: resEdit.msg,
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
  const handleImage = (ev) => {
    const file = ev.target.files[0];
    setImage(file);
    setError("");
  };

  const editImg = async () => {
    if (!image) return setError("Debes seleccionar un archivo primero");

    const formData = new FormData();
    formData.append("file", image);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACK_URL_DEPLOY}/user/upload/${user._id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );
      const res = await response.json();
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: res.msg,
          timer: 2000,
          showConfirmButton: false
        });
        handleClose();
        obtenerUsuario();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "¡Al parecer hubo un error!",
        text: error,
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };
  return (
    <>
      {type === "user" ? (
        <>
          <button onClick={handleShow} className="my-2 mx-2 button_modify">
            <i className="bi bi-pencil-fill"></i> Editar
          </button>
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
                      <button className="button_modify" onClick={handleSubmit}>
                        Guardar cambios
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </Modal.Body>
          </Modal>
        </>
      ) : type === "image" ? (
        <>
          <Button
            onClick={handleShow}
            variant="info"
            className="w-100 mb-3 button_modify"
          >
            <i className="bi bi-image "></i> Cambiar foto de perfil
          </Button>

          <Modal show={show} onHide={handleClose} backdrop="static">
            <Modal.Header closeButton>
              <Modal.Title>Actualizar foto de perfil</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <Form.Control
                type="file"
                name="file"
                onChange={handleImage}
                accept="image/*"
                className={`mb-3 ${error && "is-invalid"}`}
              />
              <small className={!error ? "d-none" : "text-danger"}>
                {error}
              </small>
              {image && (
                <>
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Previsualización"
                    className="img-fluid"
                  />
                  <hr />
                  <small>
                    Nota: La imagen será redimensionada a una resolución mas
                    pequeña
                  </small>
                </>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="info" onClick={editImg}>
                Guardar cambios
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default EditModalComp;
