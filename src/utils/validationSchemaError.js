import * as yup from "yup";
export const errorRegister = yup.object().shape({
  fullName: yup.string().required("Campo nombre y apellido obligatorio"),

  email: yup
    .string()
    .required("Campo correo electrónico obligatorio")
    .email("Formato de correo electrónico inválido"),
  pass: yup.string().required("Campo contraseña obligatorio"),
  rPass: yup.string().required("Campo repetir contraseña obligatorio"),
});
export const errorCambiarContraseña = yup.object().shape({
  actualPass: yup.string().required("Campo contraseña actual obligatorio"),
  pass: yup.string().required("Campo nueva contraseña obligatorio"),
  rPass: yup.string().required("Campo repetir nueva contraseña obligatorio"),
});
export const errorLogin = yup.object().shape({
  email: yup
    .string()
    .required("Campo correo electrónico obligatorio")
    .email("Formato de correo electrónico inválido"),
  pass: yup.string().required("Campo contraseña obligatorio"),
});
