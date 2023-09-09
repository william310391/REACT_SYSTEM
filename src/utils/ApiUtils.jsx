import { PETICION_HTTP_DELETE, PETICION_HTTP_GET, PETICION_HTTP_POST, PETICION_HTTP_PUT } from "../api/ApiConstante";
import { _axios } from "../api/ApiSeguridad";
import { useEffect, useState } from "react";

export const InvokeEnpoit = async ({ getMethod, enpoint, peticion, params = {} }) => {
    try {
        const Api = await _axios(enpoint);
        let res = null;
        switch (getMethod) {
            case PETICION_HTTP_POST:
                res = await Api.post(peticion, params);
                break;
            case PETICION_HTTP_GET:
                console.log('llego')
                res = await Api.get(peticion, params);
                break;
            case PETICION_HTTP_PUT:
                res = await Api.put(peticion, params);
                break;
            case PETICION_HTTP_DELETE:
                res = await Api.delete(peticion, params);
                break;
        }
        return res.data;

    } catch (error) {
        // console.error(error)
        // console.log(error);
        return error.response.data
    }
}

export function InvokeEnpoitUseEffect(funcion,dataRes,control)
{
    const [data, setData] = useState({});

    useEffect(() => {
      async function AxiosData() {
        const res = await funcion(dataRes);
        setData(res);
      }
      AxiosData();
    }, [control]);
    return data;
}