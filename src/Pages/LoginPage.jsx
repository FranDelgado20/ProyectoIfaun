import React, { useState } from "react";
import { Formik } from "formik";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { errorLogin } from "../utils/validationSchemaError";

const LoginPage = () => {
  const [viewPass, setViewPass] = useState(false);

  const handleViewPass = () => setViewPass(!viewPass);

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-center mb-5">
        <Formik
          initialValues={{
            email: "",
            pass: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={errorLogin}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <Form className="w-75">
              <h3>Ingresá a tu cuenta</h3>
              <hr />
              <Form.Group className="mb-3" controlId="emailId">
                <Form.Label>Correo electrónico</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="groupEmail">
                    <i className="bi bi-envelope-at-fill"></i>
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="name@example.com"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
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
                    placeholder="***********"
                    type={!viewPass ? "password" : "text"}
                    name="pass"
                    value={values.pass}
                    onChange={handleChange}
                    className={errors.pass && touched.pass && "is-invalid"}
                  />
                  <Button variant="light" onClick={handleViewPass}>
                    <i
                      className={!viewPass ? "bi bi-eye-slash" : "bi bi-eye"}
                    ></i>
                  </Button>
                </InputGroup>
                <small className="text-danger">
                  {errors.pass && touched.pass && errors.pass}
                </small>
              </Form.Group>
              <hr />
              <div className="d-flex justify-content-between">
                <Link to={"/register"} className="noTienesCuentaButton">
                  ¿Aún no tienes cuenta? Registrate aquí
                </Link>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                  Iniciar sesión
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default LoginPage;
