import Toast, { ToastShow } from "./ElementoControl/Toast";
import { useState } from "react";

function Principal() {

  const initialForm = {
    email: "",
    numero: "",
    descripcion:""
  };

  const [form, setForm] = useState(initialForm);
  const handleChangen = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }


  const btnToastClick = () => {
    if (!Validar.Panel("requires-validation")) {
      ToastShow({
        titulo: "Aviso",
        tituloStyle: "bg-danger",
        mensaje: "existen campos por validar",
      });
      return
    }
    ToastShow({
      titulo: "Aviso",
      tituloStyle: "bg-primary",
      mensaje: "datos completos",
    });
    console.log(form);


  };

  return (
    <>
      <div className="requires-validation">
        <div className="mb-3">
          <label className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            onBlur={(e) => {
              Validar.InputEvento(
                e.target,
                "vCorreo",
                "blur"
              );
            }}
            className="form-control vCorreo"
            placeholder="name@example.com"
            value={form.email}
            onChange={handleChangen}
            required
          />
          <div className="invalid-feedback">Formato de correo incorrecto</div>
        </div>

        <div className="mb-3">
          <label className="form-label">
            numero
          </label>
          <input
            name="numero"
            type="text"
            onKeyPress={(e) => {
              Validar.vNumerico.onKeyDown(e);
            }}
            onBlur={(e) => {
              Validar.InputEvento(
                e.target,
                "vNumerico",
                "blur"
              );
            }}      
            className="form-control vNumerico"
            placeholder="ingrese numero"
            value={form.numero}
            onChange={handleChangen}
            required
          />
          <div className="invalid-feedback">error numerico</div>
        </div>

        <div className="mb-3">
          <label className="form-label">
            Descripcion
          </label>
          <textarea
            name="descripcion"
            className="form-control vTexto"
            rows="3"
            onBlur={(e) => {
              Validar.InputEvento(
                e.target,
                "vTexto",
                "blur"
              );
            }}
            onKeyPress={(e) => {
              Validar.vTexto.onKeyDown(e);
            }}
            value={form.descripcion}
            onChange={handleChangen}
            required
          ></textarea>
          <div className="invalid-feedback">
            Please enter a message in the textarea.
          </div>
        </div>
      </div>

      <button
        type="button"
        className="btn btn-primary"
        id="liveToastBtn"
        onClick={btnToastClick}
      >
        Show live toast
      </button>

      <Toast />
    </>
  );
}

export default Principal;
