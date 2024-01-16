import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Button, InputGroup } from "react-bootstrap";

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
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Nombre y Apellido</Form.Label>
        <InputGroup>
          <InputGroup.Text id="groupEmail">
            <i class="bi bi-person"></i>
          </InputGroup.Text>
          <Form.Control type="text" placeholder="Ingrese su nombre completo" />
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo Electrónico</Form.Label>
        <InputGroup>
          <InputGroup.Text>
            <i class="bi bi-envelope-at"></i>
          </InputGroup.Text>
          <Form.Control type="email" placeholder="Enter email" />
        </InputGroup>
      </Form.Group>
      <Form.Label>Teléfono</Form.Label>
      <InputGroup>
        <InputGroup.Text id="groupEmail">
          <>
            <i class="bi bi-telephone"></i>
          </>
        </InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="+54 000 0000000"
          maxLength={13}
        />
      </InputGroup>

      <Form.Group className="mb-3">
        <Form.Label>Contraseña</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text>
            <i class="bi bi-shield-lock-fill"></i>
          </InputGroup.Text>
          <Form.Control
            type={!viewPass ? "password" : "text"}
            name="pass"
            placeholder="**********"
          />
          <Button variant="light" onClick={handleView}>
            <i className={!viewPass ? "bi bi-eye-slash" : "bi bi-eye"}></i>
          </Button>
        </InputGroup>
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
            placeholder="**********"
          />
          <Button variant="light" onClick={handleView2}>
            <i className={!viewrPass ? "bi bi-eye-slash" : "bi bi-eye"}></i>
          </Button>
        </InputGroup>
      </Form.Group>

      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
  );
};

export default RegisterPage;
