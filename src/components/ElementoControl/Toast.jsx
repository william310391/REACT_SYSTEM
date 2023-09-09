import React from 'react'


export function ToastShow(option) {
  // console.log(document.getElementById("liveToast"))
  // console.log(document.getElementsByName("toastAlert")[0])
  // const toastLiveExample = document.getElementById("liveToast");
  const toastLiveExample = document.getElementsByName("toastAlert")[0];
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);

  toastLiveExample.querySelector(".me-auto").innerHTML = option.titulo;
  toastLiveExample.querySelector(".toast-body").innerHTML = option.mensaje;
  toastLiveExample.querySelector( ".toast-header").className = `toast-header ${option.tituloStyle} text-white`;
  toastBootstrap.show();
}

function Toast() {
  return (
    <div className="toast-container position-fixed top-0 end-0 p-3 mt-4">
    <div
      id="liveToast"
      name='toastAlert'
      className="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-header">
        <strong className="me-auto">Bootstrap</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div className="toast-body">
        Hello, world! This is a toast message.
      </div>
    </div>
  </div>
  )
}

export default Toast
