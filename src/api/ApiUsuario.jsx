import { _axios } from "./ApiSeguridad";
import { PETICION_HTTP_GET, PETICION_HTTP_POST, URL_API_USUARIO } from "./ApiConstante";
import { InvokeEnpoit } from "../utils/ApiUtils";

const UsuarioApi = await _axios(URL_API_USUARIO);

export const FindAll = async () => {

  const datosPeticion = {
    getMethod: PETICION_HTTP_GET,
    enpoint: URL_API_USUARIO,
    peticion: '/findAll',
    params:{prueba:'aaaa'}
  }
  return await InvokeEnpoit(datosPeticion);
  };

export const Acceso = async (req) => {

  const datosPeticion = {
    getMethod: PETICION_HTTP_POST,
    enpoint: URL_API_USUARIO,
    peticion: '/login',
    params: req
  }
  return await InvokeEnpoit(datosPeticion);
}

export const GetMenu = async (req) => {

  const datosPeticion = {
    getMethod: PETICION_HTTP_POST,
    enpoint: URL_API_USUARIO,
    peticion: '/GetAccesoByIdUsuario',
    params: req
  }
  return await InvokeEnpoit(datosPeticion);
}


export const FindUsuarioByNombreCuenta = async (req) => {
  const datosPeticion = {
    getMethod: PETICION_HTTP_POST,
    enpoint: URL_API_USUARIO,
    peticion: '/findUsuarioByNombreCuenta',
    params: req
  }
  return await InvokeEnpoit(datosPeticion);
}

