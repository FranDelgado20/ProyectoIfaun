import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Button, Container, InputGroup } from "react-bootstrap";
import { Formik } from "formik";
import { errorRegister } from "../utils/validationSchemaError";

const RegisterPage = () => {
  const [viewPass, setViewPass] = useState(false);
  const [viewrPass, setViewrPass] = useState(false);
  const handleView = () => {
    setViewPass(!viewPass);
  };
  const handleView2 = () => {
    setViewrPass(!viewrPass);
  };
  return (
    <Container>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          numberPhone: "",
          pass: "",
          rPass: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={errorRegister}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <Form>
            <h3>Creá tu cuenta</h3>
            <hr />
            <Form.Group className="mb-3">
              <Form.Label>Nombre y Apellido</Form.Label>
              <InputGroup>
                <InputGroup.Text id="groupEmail">
                  <i class="bi bi-person"></i>
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  name="fullName"
                  value={values.fullName}
                  onChange={handleChange}
                  placeholder="Ingrese su nombre completo"
                  className={
                    errors.fullName && touched.fullName && "is-invalid"
                  }
                />
              </InputGroup>
              <small className="text-danger">
                {errors.fullName && touched.fullName && errors.fullName}
              </small>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <i class="bi bi-envelope-at"></i>
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  placeholder="Enter email"
                  className={errors.email && touched.email && "is-invalid"}
                />
              </InputGroup>
              <small className="text-danger">
                {errors.email && touched.email && errors.email}
              </small>
            </Form.Group>
            <Form.Group>
              <Form.Label>Teléfono</Form.Label>
              <InputGroup>
                <InputGroup.Text id="groupEmail">
                  <>
                    <i class="bi bi-telephone"></i>
                  </>
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  name="numberPhone"
                  onChange={handleChange}
                  value={values.numberPhone}
                  placeholder="+54 000 0000000"
                  maxLength={13}
                  className={
                    errors.numberPhone && touched.numberPhone && "is-invalid"
                  }
                />
              </InputGroup>
              <small className="text-danger">
                  {errors.numberPhone && touched.numberPhone && errors.numberPhone}
                </small>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text>
                  <i class="bi bi-shield-lock-fill"></i>
                </InputGroup.Text>
                <Form.Control
                  type={!viewPass ? "password" : "text"}
                  name="pass"
                  onChange={handleChange}
                  value={values.pass}
                  placeholder="**********"
                  className={errors.pass && touched.pass && "is-invalid"}
                />
                <Button variant="light" onClick={handleView}>
                  <i
                    className={!viewPass ? "bi bi-eye-slash" : "bi bi-eye"}
                  ></i>
                </Button>
              </InputGroup>
              <small className="text-danger">
                  {errors.pass && touched.pass && errors.pass}
                </small>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Repetir Contraseña</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text>
                  <i class="bi bi-shield-lock-fill"></i>
                </InputGroup.Text>
                <Form.Control
                  type={!viewrPass ? "password" : "text"}
                  name="rPass"
                  onChange={handleChange}
                  value={values.rPass}
                  placeholder="**********"
                  className={errors.rPass && touched.rPass && "is-invalid"}
                />
                <Button variant="light" onClick={handleView2}>
                  <i
                    className={!viewrPass ? "bi bi-eye-slash" : "bi bi-eye"}
                  ></i>
                </Button>
              </InputGroup>
              <small className="text-danger">
                  {errors.rPass && touched.rPass && errors.rPass}
                </small>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Registrarse
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default RegisterPage;
