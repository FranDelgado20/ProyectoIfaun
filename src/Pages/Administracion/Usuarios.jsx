import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import {
  Button,
  Container,
  Form,
  FormGroup,
  InputGroup,
  Spinner,
} from "react-bootstrap";
import EditModalComp from "../../components/EditModalComp";
import Swal from "sweetalert2";
import ComentarioSwitch from "../../components/ComentarioSwitch";
import SwitchSuscripción from "../../components/SwitchSuscripción";
const Usuarios = ({ usuarios, obtenerUsuarios, setUsuarios, usuariosAux }) => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  // const [usuariosAux, setUsuariosAux] = useState(usuarios)
  const [search, setSearch] = useState("");
  const buscador = (ev) => {
    const { value } = ev.target;
    setSearch(value.toLowerCase());
  };

  const deleteUser = (id, role) => {
    if (role === "admin") {
      return Swal.fire({
        icon: "error",
        title: "No es posible eliminar un usuario administrador",
        showConfirmButton: false,
        timer: 2000,
      });
    }
    Swal.fire({
      title: "¿Estás seguro de eliminar permanentemente este usuario?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_BACK_URL_DEPLOY}/user/${id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const res = await response.json();
          if (res.status === 200) {
            Swal.fire({
              title: res.msg,
              icon: "success",
              showConfirmButton: false,
              timer: 2000,
            });
            obtenerUsuarios();
          }
        } catch (error) {
          Swal.fire({
            title: "No se pudo eliminar el usuario",
            text: error,
            icon: "error",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      }
    });
  };
  useEffect(() => {
    if (search) {
      const resultados = usuariosAux.filter((user) =>
        user.fullName.toLowerCase().includes(search)
      );
      setUsuarios(resultados);
    } else setUsuarios(usuariosAux);
  }, [search, usuariosAux]);
  return (
    <Container fluid>
      <FormGroup className="d-flex justify-content-center my-3">
        <InputGroup className="widthBuscador">
          <InputGroup.Text>
            <i className="bi bi-search"></i>
          </InputGroup.Text>
          <Form.Control
            placeholder="Buscar usuario..."
            type="search"
            onChange={buscador}
          />
        </InputGroup>
      </FormGroup>

      {usuarios.length > 0 ? (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Nombre y Apellido</th>
              <th>Correo Electrónico</th>
              <th>Rol</th>
              <th>Estado de suscripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios?.map((user) => (
              <tr key={user._id}>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "user" ? (
                    <>
                      <i className="bi bi-person-fill"></i> Usuario
                    </>
                  ) : (
                    <>
                      <i className="bi bi-person-fill-gear"></i> Administrador
                    </>
                  )}
                </td>
                <td>
                  {user.role === "user" && <SwitchSuscripción user={user} />}
                </td>
                <td className="text-center">
                  <EditModalComp
                    user={user}
                    obtenerUsuarios={obtenerUsuarios}
                  />

                  <Button
                    variant="danger"
                    className="my-2 mx-2  button_modify_delete"
                    onClick={() => deleteUser(user._id, user.role)}
                  >
                    <i className="bi bi-trash3-fill"></i> Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : usuarios.length === 0 && search ? (
        <h3 className="text-center mt-5">
          No existen resultados para su búsqueda
        </h3>
      ) : (
        <div className="d-flex justify-content-center mt-5 ">
          <Spinner animation="border" role="status" className="me-3">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <p>Cargando información del usuario...</p>
        </div>
      )}
    </Container>
  );
};

export default Usuarios;
