import axios from "axios";
import { URL_API_SEGURIDAD } from "./ApiConstante";

export const Autenticacion = async () => {
    try {
        const Seguridad = axios.create({
            baseURL: URL_API_SEGURIDAD,
        });
    
        const json = {
            usuario: "Prueba2024",
            contrasena: "123456789",
        };       

        //console.log(URL_API_SEGURIDAD,"/Autenticacion", json)
        const res = await Seguridad.post("/Autenticacion", json);        
        return await res.data.data.token;   
    } catch (error) {
        console.error(error);
    }

}

export const _axios = async (url) => {
    const token = await Autenticacion();
    const UsuarioApi = axios.create({
        baseURL: url,
        headers: { Authorization: `Bearer ${token}` },
    });
    return UsuarioApi;
}
