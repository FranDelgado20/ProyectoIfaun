import { Formik } from "formik";
import React, { useState } from "react";
import { Form, FormCheck } from "react-bootstrap";
import clienteAxios, { config } from "../utils/axios";
import Swal from "sweetalert2";
const ComentarioSwitch = ({ comment }) => {
  const [mostrarSwitch, setMostrarSwitch] = useState(
    comment.mostrar === "Si" ? true : false
  );

  const handleSwitchChange = async () => {
    setMostrarSwitch(!mostrarSwitch);

    if (!mostrarSwitch) {
      try {
        await clienteAxios.put(
          `/comentarios/${comment._id}`,
          {
            mostrar: mostrarSwitch,
          },
          config
        );
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "¡Al parecer hubo un error!",
          showConfirmButton: false,
          timer: 2500,
          text: error.response.data.msg,
        });
      }
    } else {
      try {
        await clienteAxios.delete(
          `/comentarios/${comment._id}`,
          {
            mostrar: "No",
          },
          config
        );
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "¡Al parecer hubo un error!",
          showConfirmButton: false,
          timer: 2500,
          text: error.response.data.msg,
        });
      }
    }
  };

  return (
    <Formik
      initialValues={{ mostrar: mostrarSwitch }}
      onSubmit={({ setSubmitting }) => {
        setSubmitting(false);
      }}
    >
      <Form className="d-flex justify-content-center">
        <FormCheck
          type="switch"
          id={`custom-switch-${comment.id}`}
          label={!mostrarSwitch ? "No" : "Si"}
          checked={mostrarSwitch}
          onChange={handleSwitchChange}
        />
      </Form>
    </Formik>
  );
};
export default ComentarioSwitch;
