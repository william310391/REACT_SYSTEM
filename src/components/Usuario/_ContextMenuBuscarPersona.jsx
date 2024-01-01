//import React from 'react'

function _ContextMenuBuscarPersona(dato) {
  return (  
    <div className="btn-group">
      <i
        className="bi bi-gear-wide"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      ></i>
      <ul className="dropdown-menu dropdown-menu-end">
        <li>
          <a className="dropdown-item" href="#">
            Action {dato.id}
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Another action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Separated link
          </a>
        </li>
      </ul>
    </div>  
  )
}

export default _ContextMenuBuscarPersona
