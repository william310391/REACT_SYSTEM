
import { Autenticacion } from '../api/ApiSeguridad';
import { FindAll} from '../api/ApiUsuario'

import React from 'react'

function Ejemplo() {

    const findAll = async () => {
        const res = await FindAll();
        console.log(res);
    }

    const aaa = async () => {
        await Autenticacion();
    }


  return (
    <div>
      <input type='submit' onClick={findAll} value='pruebaaa'></input>
      <input type='submit' onClick={aaa} value='prueba 222222'></input>
    </div>
  )
}

export default Ejemplo



