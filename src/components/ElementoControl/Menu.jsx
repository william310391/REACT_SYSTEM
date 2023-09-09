import { Link } from "react-router-dom";

function Menu({ data }) {
  const dropdown = (data) => {
    if (data != undefined) {
      return data.menus.map((menu, key) => {
        return (
          <li className="nav-item dropdown" key={key}>
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {menu.nombre}
            </a>
            <ul className="dropdown-menu">
              {
                // dropdownItem(e.paginas)
                menu.paginas.map((pagina, key) => {
                  return (
                    <li key={key}>
                      <Link to={`${menu.url}${pagina.url}`} className="dropdown-item">
                        {pagina.nombre}
                      </Link>
                    </li>
                  );
                })
              }
            </ul>
          </li>
        );
      });
    }
  };

  const dropdownItem = (items) => {
    if (items != undefined) {
      return items.map((e, key) => {
        return (
          <li key={key}>
            <Link to="/Mantenimiento/GestionUsuario" className="dropdown-item">
              {" "}
              {e.nombre}
            </Link>
          </li>
        );
      });
    }
  };

  return <>{dropdown(data)}</>;
}

export default Menu;
