import * as yup from "yup";
export const errorRegister = yup.object().shape({
  fullName: yup.string().required("Campo nombre y apellido obligatorio"),

  email: yup
    .string()
    .required("Campo correo electrónico obligatorio")
    .email("Formato de correo electrónico inválido"),
  pass: yup.string().required("Campo contraseña obligatorio"),
  rPass: yup.string().required("Campo repetir contraseña obligatorio"),
  numberPhone: yup
    .string()
    .matches(/^\+54\d{3}\d{7}$/, "Formato de número de teléfono inválido")
    .required("Campo número de teléfono obligatorio"),
});
export const errorLogin = yup.object().shape({
  email: yup
    .string()
    .required("Campo correo electrónico obligatorio")
    .email("Formato de correo electrónico inválido"),
  pass: yup.string().required("Campo contraseña obligatorio"),
});
