import { Formik } from "formik";
import React, { useState } from "react";
import { Form, FormCheck } from "react-bootstrap";
import clienteAxios, { config } from "../utils/axios";
import Swal from "sweetalert2";

const SwitchSuscripción = ({ user }) => {
  const [estadoCuentaSwitch, setEstadoCuentaSwitch] = useState(
    user.estadoCuenta
  );
  const handleSwitchChange = async () => {
    setEstadoCuentaSwitch(!estadoCuentaSwitch);

    try {
      const resEdit = await clienteAxios.put(
        `/user/${user._id}`,
        {
          estadoCuenta: !estadoCuentaSwitch,
        },
        config
      );
      console.log(resEdit);
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
