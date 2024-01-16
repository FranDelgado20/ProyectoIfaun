import * as yup from 'yup'
export const errorRegister = yup.object().shape({
    fullName: yup.string().required('Este campo es OBLIGATORIO'),
    
    email: yup.string().required('Este campo es OBLIGATORIO').email('Formato incorrecto: debe contener @'),
    pass: yup.string().required('Este campo es OBLIGATORIO'),
    rPass: yup.string().required('Este campo es OBLIGATORIO'),
    numberPhone: yup.string()
    .matches(/^\+54\d{3}\d{7}$/, 'Formato Incorrecto').required('Este campo es OBLIGATORIO'),
})