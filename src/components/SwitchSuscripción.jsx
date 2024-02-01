import { Formik } from "formik";
import React, { useState } from "react";
import { Form, FormCheck } from "react-bootstrap";
import Swal from "sweetalert2";

const SwitchSuscripción = ({ user }) => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const [estadoCuentaSwitch, setEstadoCuentaSwitch] = useState(
    user.estadoCuenta
  );
  const handleSwitchChange = async () => {
    setEstadoCuentaSwitch(!estadoCuentaSwitch);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACK_URL_LOCAL}/user/${user._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ estadoCuenta: !estadoCuentaSwitch }),
        }
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
  };
  return (
    <Formik
      initialValues={{ switchEstadoCuenta: user.estadoCuenta }}
      onSubmit={({ setSubmitting }) => {
        setSubmitting(false);
      }}
    >
      <Form className="d-flex justify-content-center">
        <FormCheck
          type="switch"
          id={`custom-switch-${user._id}`}
          label={!estadoCuentaSwitch ? "No" : "Si"}
          checked={estadoCuentaSwitch}
          onChange={handleSwitchChange}
        />
      </Form>
    </Formik>
  );
};

export default SwitchSuscripción;
