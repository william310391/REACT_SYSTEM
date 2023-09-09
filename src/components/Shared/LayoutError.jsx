import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function LayoutError({ children }) {

  document.body.style = "background: none";
  const user = useSelector((state) => state.usuario.usuario);
  if (!user) {
    return <Navigate to="/" />;
  }

  return(
    <>
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          SYSTEM
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="navbar-toggler-icon"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
        </div>
      </div>
    </nav>

    <br />
    <div className="container">{children}</div>
  </>
  )

}

export default LayoutError;
