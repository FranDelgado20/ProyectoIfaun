import axios from "axios";

const token = JSON.parse(sessionStorage.getItem('token'))
const clienteAxios = axios.create({
    baseURL: import.meta.env.VITE_BACK_URL_DEPLOY
})

export const config = {
    headers:{
        "Content-Type" : "application/json",
        Authorization: `Bearer ${token}`
    }
}

export default clienteAxios