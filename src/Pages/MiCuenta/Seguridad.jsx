import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { errorCambiarContraseña } from "../../utils/validationSchemaError";
import Swal from "sweetalert2";

const Seguridad = ({ usuario }) => {
  const token = JSON.parse(sessionStorage.getItem("token"));

  const [viewPass, setViewPass] = useState(false);
  const [viewrPass, setViewrPass] = useState(false);
  const [viewActualPass, setViewActualPass] = useState(false);
  const handleViewPass = () => setViewPass(!viewPass);
  const handleViewRepeatPass = () => setViewrPass(!viewrPass);
  const handleViewActualPass = () => setViewActualPass(!viewActualPass);
  const editPass = async ({ actualPass, pass, rPass }) => {
    if (pass !== rPass) {
      return Swal.fire({
        title: "Las contraseñas nuevas no coinciden",
        text: "Revisa los datos ingresados",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
    }
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACK_URL_LOCAL}/user/editPass/${usuario._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            actualPass,
            pass,
          }),
        }
      );
      const res = await response.json();
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Contraseña modificada!",
          showConfirmButton: false,
          timer: 1500,
        });
      }else{
        Swal.fire({
            position: "center",
            icon: "error",
            title: "¡Al parecer hubo un error!",
            text: res.msg,
            timer: 2500,
          });
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
    <>
      <Container>
        <Formik
          initialValues={{
            actualPass: "",
            pass: "",
            rPass: "",
          }}
          onSubmit={(values) => editPass(values)}
          validationSchema={errorCambiarContraseña}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <Form className=" p-3 rounded-3">
              <Form.Group className="mb-3" controlId="passIdActual">
                <Form.Label>Contraseña actual</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="groupPass">
                    <i className="bi bi-key-fill"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type={!viewActualPass ? "password" : "text"}
                    name="actualPass"
                    onChange={handleChange}
                    value={values.actualPass}
                    placeholder="**********"
                    className={
                      errors.actualPass && touched.actualPass && "is-invalid"
                    }
                  />
                  <InputGroup.Text id="groupPass">
                    <button
                      type="button"
                      className="border-0 bg-transparent linkFooter"
                      onClick={handleViewActualPass}
                    >
                      <i
                        className={
                          !viewActualPass ? "bi bi-eye-slash" : "bi bi-eye"
                        }
                      ></i>
                    </button>
                  </InputGroup.Text>
                </InputGroup>
                <small className="text-danger">
                  {errors.actualPass && touched.actualPass && errors.actualPass}
                </small>
              </Form.Group>
              <Form.Group className="mb-3" controlId="passId">
                <Form.Label>Nueva contraseña</Form.Label>
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
                <Form.Label>Repetir nueva contraseña</Form.Label>
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
              <div className="d-flex justify-content-end">
                <Button variant="info" type="submit" onClick={handleSubmit}>
                <i className="bi bi-key-fill"></i> Cambiar contraseña
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default Seguridad;
