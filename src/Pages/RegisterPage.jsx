import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Button, Container, InputGroup } from "react-bootstrap";
import { Formik } from "formik";
import { errorRegister } from "../utils/validationSchemaError";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import clienteAxios, { config } from "../utils/axios";

const RegisterPage = () => {
  const [viewPass, setViewPass] = useState(false);
  const [viewrPass, setViewrPass] = useState(false);

  const handleViewPass = () => setViewPass(!viewPass);
  const handleViewRepeatPass = () => setViewrPass(!viewrPass);

  const createUser = async ({ fullName, email, pass, rPass }) => {
    if (pass !== rPass)
      return Swal.fire({
        title: "Las contraseñas no coinciden",
        text: "Revisa los datos ingresados",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
    try {
      const res = await clienteAxios.post(
        "/user",
        {
          fullName,
          email,
          pass,
        },
        config
      );

      if (res.status === 201) {
        Swal.fire({
          title: "¡Usuario registrado correctamente!",
          text: "Ya puedes iniciar sesión",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Al parecer hubo un error",
        text: error.response.data.msg,
        icon: "error",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-center">
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            pass: "",
            rPass: "",
          }}
          onSubmit={(values) => createUser(values)}
          validationSchema={errorRegister}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <Form className="w-75 fondo p-3 rounded-3">
              <h3>Creá tu cuenta</h3>
              <hr />
              <Form.Group className="mb-3" controlId="nameId">
                <Form.Label>Nombre y apellido</Form.Label>
                <InputGroup>
                  <InputGroup.Text id="groupName">
                    <i className="bi bi-person"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    placeholder="Ej: Juan Hernández"
                    className={
                      errors.fullName && touched.fullName && "is-invalid"
                    }
                  />
                </InputGroup>
                <small className="text-danger">
                  {errors.fullName && touched.fullName && errors.fullName}
                </small>
              </Form.Group>
              <Form.Group className="mb-3" controlId="emailId">
                <Form.Label>Correo electrónico</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <i className="bi bi-envelope-at"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    placeholder="name@example.com"
                    className={errors.email && touched.email && "is-invalid"}
                  />
                </InputGroup>
                <small className="text-danger">
                  {errors.email && touched.email && errors.email}
                </small>
              </Form.Group>
              <Form.Group className="mb-3" controlId="passId">
                <Form.Label>Contraseña</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="groupPass">
                    <i className="bi bi-key-fill"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type={!viewPass ? "password" : "text"}
                    name="pass"
                    onChange={handleChange}
                    value={values.pass}
                    placeholder="**********"
                    className={errors.pass && touched.pass && "is-invalid"}
                  />
                  <InputGroup.Text id="groupPass">
                    <button
                      type="button"
                      className="border-0 bg-transparent linkFooter"
                      onClick={handleViewPass}
                    >
                      <i
                        className={!viewPass ? "bi bi-eye-slash" : "bi bi-eye"}
                      ></i>
                    </button>
                  </InputGroup.Text>
                </InputGroup>
                <small className="text-danger">
                  {errors.pass && touched.pass && errors.pass}
                </small>
              </Form.Group>
              <Form.Group className="mb-3" controlId="repeatPassId">
                <Form.Label>Repetir contraseña</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="groupRepeatPass">
                    <i className="bi bi-key-fill"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type={!viewrPass ? "password" : "text"}
                    name="rPass"
                    onChange={handleChange}
                    value={values.rPass}
                    placeholder="**********"
                    className={errors.rPass && touched.rPass && "is-invalid"}
                  />
                  <InputGroup.Text id="groupRepeatPass">
                    <button
                      type="button"
                      className="border-0 bg-transparent linkFooter"
                      onClick={handleViewRepeatPass}
                    >
                      <i
                        className={!viewrPass ? "bi bi-eye-slash" : "bi bi-eye"}
                      ></i>
                    </button>
                  </InputGroup.Text>
                </InputGroup>
                <small className="text-danger">
                  {errors.rPass && touched.rPass && errors.rPass}
                </small>
              </Form.Group>
              <hr />
              <div className="d-flex justify-content-between">
                <Link to={"/login"} className="noTienesCuentaButton">
                  ¿Ya tienes cuenta? Inicia sesión aquí
                </Link>
                <button type="submit" className="button_modify" onClick={handleSubmit}>
                  Registrarse
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default RegisterPage;
