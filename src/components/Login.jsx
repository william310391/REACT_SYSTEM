import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUsuario } from "../reducers/usuarioSlice";
import { Acceso, GetMenu } from "../api/ApiUsuario";
import { InvokeEnpoitUseEffect } from "../utils/ApiUtils";
import { addAccesos } from "../reducers/accesosSlice";

function Login() {
  document.body.style = "background-color: #B0BEC5";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialForm = {
    cuenta: "",
    contrasena: "",
  };
  const [form, setForm] = useState(initialForm);

  const acceso = async () => {
    let res = await Acceso(form);
    if (!res.resultadoIndicador) {
      MensajeError(res.resultadoDescripcion);
      return;
    }
    dispatch(addUsuario(res.data));
    const accesoD = await GetMenu({ id: res.data.id });
    dispatch(addAccesos(accesoD.data));



    navigate("/Principal");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (form.cuenta == "" || form.contrasena == "") {
      dispatch(addUsuario(null));
      MensajeError("Debe ingresar una cuenta y una contraseña");
      return;
    }
    acceso();
    // console.log(acceso())
  };

  const handleChangen = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  let isOpenCollapse = false;
  const handleOnFocus = (e) => {
    if (isOpenCollapse == true) {
      var myCollapse = document.getElementById("collapse_error");
      var bsCollapse = new bootstrap.Collapse(myCollapse, {
        toggle: true,
        show: false,
        hide: true,
      });
      isOpenCollapse = false;
    }
  };
  const MensajeError = (mensaje) => {
    if (!isOpenCollapse) {
      isOpenCollapse = true;
      let myCollapse = document.getElementById("collapse_error");
      let bsCollapse = new bootstrap.Collapse(myCollapse, {
        toggle: true,
        show: true,
      });
    }
    document.getElementById("div_mensaje").innerHTML = mensaje;
  };
  return (
    <>
      <div className="container container-login">
        <div className="px-1 px-md-5 px-lg-1 px-xl-5 py-5">
          <div className="card card0 border-0">
            <div className="row d-flex align-middle">
              <div className="col-lg-6 ocultar-div">
                <div className="border-line container text-center h-100 d-flex justify-content-center align-items-center">
                  <div className="">
                    <img
                      src="https://i.imgur.com/uNGdWHi.png"
                      className="image"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <form>
                  <div className="card2 card border-0 px-4 py-5">
                    <div className="row mb-4 px-3">
                      <h6 className="mb-0 mr-4 mt-2"></h6>
                    </div>
                    <div className="row">
                      <h4 className="text-end">Login</h4>
                    </div>
                    <div className="row px-3">
                      <h6 className="mb-0 text-sm">
                        <label className="mb-1">Usuario</label>
                      </h6>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Ingrese Usuario"
                        name="cuenta"
                        onChange={handleChangen}
                        onFocus={handleOnFocus}
                        required
                      />
                    </div>
                    <br />
                    <div className="row px-3">
                      <h6 className="mb-0 text-sm">
                        <label className="mb-1">Contraseña</label>
                      </h6>
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Ingrese Contraseña"
                        name="contrasena"
                        onChange={handleChangen}
                        onFocus={handleOnFocus}
                        autoComplete="true"
                        required
                      />
                    </div>
                    <br />
                    <div className="collapse" id="collapse_error">
                      <div
                        className="card card-body bg-danger text-light"
                        id="div_mensaje"
                      >
                        Error
                      </div>
                    </div>
                    <div className="row mb-3 px-3 pt-3">
                      <button
                        type="submit"
                        onClick={handleLogin}
                        className="btn btn-blue text-center btn-primary"
                        id="btn_acceder"
                      >
                        Iniciar Sesión
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="bg-blue py-4">
              <div className="row px-3">
                <small className="ml-4 ml-sm-5 mb-2">
                  Copyright &copy; 2023. Mula SAC rights reserved.
                </small>
                <div className="social-contact ml-4 ml-sm-auto">
                  <span className="fa fa-facebook mr-4 text-sm"></span>
                  <span className="fa fa-google-plus mr-4 text-sm"></span>
                  <span className="fa fa-linkedin mr-4 text-sm"></span>
                  <span className="fa fa-twitter mr-4 mr-sm-5 text-sm"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
