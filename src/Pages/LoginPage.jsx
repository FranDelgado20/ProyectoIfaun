import React, { useState } from "react";
import { Formik } from "formik";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { errorLogin } from "../utils/validationSchemaError";
import clienteAxios from "../utils/axios";

const LoginPage = () => {
  const navigate = useNavigate()
  const [viewPass, setViewPass] = useState(false);
  const handleViewPass = () => setViewPass(!viewPass);
  const loginAccount = async (values) => {
    try {
      const resLogin = await clienteAxios.post("/user/login", {
        email: values.email,
        pass: values.pass,
      });
      if (resLogin?.data?.token) {
        sessionStorage.setItem("token", JSON.stringify(resLogin.data.token));
        sessionStorage.setItem(
          "idUser",
          JSON.stringify(resLogin.data.userExist._id)
        );
        sessionStorage.setItem(
          "role",
          JSON.stringify(resLogin.data.userExist.role)
        );
        resLogin.data?.userExist?.role === "user"
          ? navigate("/")
          : navigate("/admin");
     
      } else {
        Swal.fire({
          icon: "error",
          title: "¡Oh no!",
          text: "Usuario y/o contraseña incorrectos",
        });
      }
    } catch (error) {
      console.log(error)
      // Swal.fire({
      //   position: "center",
      //   icon: "error",
      //   title: "¡Al parecer hubo un error!",
      //   text: error.response.data.msg,
      // });
    }
  };
  return (
    <Container className="my-5">
      <div className="d-flex justify-content-center mb-5">
        <Formik
          initialValues={{
            email: "",
            pass: "",
          }}
          onSubmit={(values) => loginAccount(values)}
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
