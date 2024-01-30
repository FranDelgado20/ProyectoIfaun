import { Formik } from "formik";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const Comentarios = ({ comentarios }) => {
  const mostrarComentario = async (values) => {
    try {
    } catch (error) {}
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre y Apellido</th>
          <th>Comentario y Fecha de publicación</th>
          <th>Publicado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {comentarios.map((comments) => (
          <tr>
            <td>{comments.nombreUsuario}</td>
            <td>
              {comments.comentario} - {comments.fecha}
            </td>
            <td className="d-flex justify-content-around">
              {comments.mostrar}
              <Formik
                initialValues={{ mostrar: comments.mostrar }}
                onSubmit={(values) => mostrarComentario(values)}
              >
                {({ values, handleChange, handleSubmit }) => (
                  <Form>
                    {comments.mostrar === "No" ? (
                      <Form.Check
                        name="mostrar"
                        
                        value={values.mostrar}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        type="switch"
                        id="custom-switch"
                      />
                    ) : (
                      <Form.Check
                        name="mostrar"
                        checked={true}
                        value={values.mostrar}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        type="switch"
                        id="custom-switch"
                      />
                    )}
                  </Form>
                )}
              </Formik>
            </td>
            <td>@mdo</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Comentarios;
