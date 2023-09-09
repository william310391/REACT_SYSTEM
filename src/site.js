
var Validar = {
  Panel: function (panel) {
    let resultado = true;
    let respuesta = true;
    const form = document.querySelectorAll(
      `div.${panel} input,textarea,select`
    );
    form.forEach((e) => {

      if (e.classList.contains("vNumerico")) {
        respuesta = this.Input(e, "vNumerico");
        resultado = (resultado && respuesta);
      }

      if (e.classList.contains("vTexto")) {
        respuesta = this.Input(e, "vTexto");
        resultado = (resultado && respuesta);
      }
      if (e.classList.contains("vCorreo")) {
        respuesta = this.Input(e, "vCorreo");
        resultado = (resultado && respuesta);
      }
    });
    return resultado;
  },

  Input: function (e, Validacion) {
    let respuesta = true;

    let required = e.attributes.required == undefined ? false : true;
    let value = e.value;

    e.classList.remove("is-invalid");
    e.classList.remove("is-valid");

    if (e.classList.contains(Validacion) && required) {
      switch (Validacion) {
        case "vNumerico":
          respuesta = this.vNumerico.metodo(value);
          break;
        case "vTexto":
          respuesta = this.vTexto.metodo(value);
          break;
        case "vCorreo":
          respuesta = this.vCorreo.metodo(value);
          break;
        default:
          respuesta = true;
      }
      this.MostrarValidacion(respuesta, e);
    }
    return respuesta;
  },
  InputEvento: function (e, Validacion, evento) {
    const funcion = () => {
      this.Input(e , Validacion);
    };
    e.addEventListener(evento, funcion());
  },

  MostrarValidacion: function (respuesta, elemento) {
    if (respuesta) {
      elemento.classList.add("is-valid");
    } else {
      elemento.classList.add("is-invalid");
    }
  },
  vNumerico: {
    onKeyDown: function (event) {
      var regex = new RegExp("^[0-9]+$");
      var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
      if (!regex.test(key)) {
        event.preventDefault();
        return false;
      }
    },
    metodo: function (value) {
      const validRegex = /^[0-9]+$/;
      if (value.match(validRegex)) {
        return true;
      } else {
        return false;
      }
    },
  },
  vTexto: {
    onKeyDown: function (event) {
      var regex = new RegExp("^[a-zA-Z ]+$");
      var key = String.fromCharCode(
        !event.charCode ? event.which : event.charCode
      );
      if (!regex.test(key)) {
        event.preventDefault();
        return false;
      }
    },
    metodo: function (value) {
      var validRegex = /^[a-zA-Z ]+$/;
      if (value.match(validRegex)) {
        return true;
      } else {
        return false;
      }
    },
  },
  vCorreo: {
    metodo: function (value) {
      const validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (value.match(validRegex)) {
        return true;
      } else {
        return false;
      }
    },
  },
};