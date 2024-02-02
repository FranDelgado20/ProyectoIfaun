import { Formik } from "formik";
import React, { useEffect, useState } from "react";
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
import EditModalComp from "../../components/EditModalComp";

const MiPerfil = ({ usuario, obtenerUsuario }) => {
  const [checked, setChecked] = useState(false);

  const token = JSON.parse(sessionStorage.getItem("token"));

  const handleSwitch = () => setChecked(!checked);

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
        obtenerUsuario();
      }
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
        <Col sm={12} className="my-2">
          <div className="d-flex justify-content-center">
            <Form.Check
              type="switch"
              label="Editar información de usuario"
              className="mb-3"
              onChange={handleSwitch}
            />
          </div>
        </Col>
        <Col className="text-center my-2" lg={6} md={12} sm={12}>
          <Image src={usuario.img} thumbnail className="img-fluid" />
          {checked && (
            <>
              <hr />
              <EditModalComp
                type={"image"}
                user={usuario}
                obtenerUsuario={obtenerUsuario}
              />
            </>
          )}
        </Col>
        <Col lg={6} md={12} sm={12} className="my-2">
          {checked ? (
            <Formik
              initialValues={{ fullName: usuario.fullName }}
              onSubmit={(values) => editarNombre(values)}
            >
              {({ values, handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="nameId">
                    <Form.Label>Nombre y apellido</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <i className="bi bi-person-circle"></i>
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        onChange={handleChange}
                        value={values.fullName}
                        name="fullName"
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="emailId">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <i className="bi bi-envelope-at-fill"></i>
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        defaultValue={usuario.email}
                        disabled
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="subId">
                    <Form.Label>Estado de la suscripción</Form.Label>
                    {!usuario.estadoCuenta ? (
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
                    ) : (
                      <InputGroup>
                        <InputGroup.Text>
                          <i className="bi bi-check2 text-success"></i>
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          defaultValue={"Suscripción Activada"}
                          disabled
                        />
                      </InputGroup>
                    )}
                  </Form.Group>
                  <hr />
                  <Button className="w-100 button_modify" variant="info" type="submit">
                    <i className="bi bi-floppy "></i> Guardar Cambios
                  </Button>
                </Form>
              )}
            </Formik>
          ) : (
            <Form>
              <Form.Group className="mb-3" controlId="nameId">
                <Form.Label>Nombre y apellido</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <i className="bi bi-person-circle"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    defaultValue={usuario.fullName}
                    disabled
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="emailId">
                <Form.Label>Correo Electrónico</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <i className="bi bi-envelope-at-fill"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    defaultValue={usuario.email}
                    disabled
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="subId">
                <Form.Label>Estado de la suscripción</Form.Label>
                {!usuario.estadoCuenta ? (
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
                ) : (
                  <InputGroup>
                    <InputGroup.Text>
                      <i className="bi bi-check2 text-success"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      defaultValue={"Suscripción Activada"}
                      disabled
                    />
                  </InputGroup>
                )}
              </Form.Group>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MiPerfil;
