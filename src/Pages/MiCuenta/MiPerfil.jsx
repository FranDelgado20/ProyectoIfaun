import { Formik } from "formik";
import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import Swal from "sweetalert2";

const MiPerfil = ({ usuario, obtenerUsuario }) => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const [checked, setChecked] = useState(false);
  const handleSwitch = () => {
    setChecked(!checked);
  };
  const editarNombre = async ({ fullName }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACK_URL_LOCAL}/user/${usuario._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            fullName,
          }),
        }
      );
      const res = await response.json();
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "¡Usuario Editado!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      obtenerUsuario();
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "¡Al parecer hubo un error!",
        text: error,
        timer: 2500,
      });
    }
  };
  return (
    <Container>
      <Row>
        <Col className="text-center">
          {" "}
          <Image src={usuario.img} thumbnail width={350} />
          <hr />
          <Form.Group className="position-relative mb-3">
            <Form.Label>Modificar imágen</Form.Label>
            <Form.Control type="file" name="file" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Check
            type="switch"
            label="Editar información de usuario"
            className="mb-3"
            onChange={handleSwitch}
          />
          {checked ? (
            <Formik
              initialValues={{ fullName: usuario.fullName }}
              onSubmit={(values) => editarNombre(values)}
            >
              {({ values, handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre y Apellido</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={handleChange}
                      value={values.fullName}
                      name="fullName"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={usuario.email}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicSubscription"
                  >
                    <Form.Label>Estado de la suscripción</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <i className="bi bi-x-lg text-danger"></i>
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        defaultValue={"Suscripción Cancelada"}
                        disabled
                      />
                    </InputGroup>
                  </Form.Group>

                  <Button className="w-100" variant="primary" type="submit">
                    Guardar Cambios
                  </Button>
                </Form>
              )}
            </Formik>
          ) : (
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre y Apellido</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={usuario.fullName}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={usuario.email}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicSubscription">
                <Form.Label>Estado de la suscripción</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <i className="bi bi-x-lg text-danger"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    defaultValue={"Suscripción Cancelada"}
                    disabled
                  />
                </InputGroup>
              </Form.Group>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MiPerfil;
