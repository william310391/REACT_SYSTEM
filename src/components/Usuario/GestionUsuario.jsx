import { useState } from "react";
import { FindUsuarioByNombreCuenta } from "../../api/ApiUsuario";
import DataTable from "../ElementoControl/DataTable";

const menu = (dato) => {
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
  );
};

function GestionUsuario() {

  const initialForm = {
    buscadorUsuario: "j",
  };
  const columns=[
    { Header: "ID", DataField: "id", width: "8%" },
    { Header: "Nombre", DataField: "nombres", width: "10%" },
    { Header: "Nombre", DataField: "nombres", width: "10%" },
    { Header: "Apellidos", DataField: "apellidos", width: "60%" },
    { Header: "", DataField: "action", width: "2%" },
  ]

  const [form, setForm] = useState(initialForm);
  const [data, setData] = useState([])
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClickBuscar =async () => {

    const obtenerData = async (buscar) => {
      let res = [];
      res = await FindUsuarioByNombreCuenta({ buscar: buscar });
      if (res.resultadoIndicador) {
        return res.data;
      }
    };
    let buscar = document.getElementById("buscadorUsuario").value;
    let res = await obtenerData(buscar);
    let new_array = res.map((ele) => {
      return { ...ele, action: menu({ id: 11111 }) };
    });
    setData(new_array);
  };
  // handleClickBuscar();

  // data2()

  // const columns = [
  //   { Header: "ID", DataField: "id", width: "8%" },
  //   { Header: "DNI", DataField: "dni", width: "10%" },
  //   { Header: "Name", DataField: "name", width: "60%" },
  //   { Header: "Age", DataField: "age", width: "10%" },
  //   { Header: "", DataField: "action", width: "2%" },
  // ];
  // const data = [
  //   { id: 1, name: "John Doe", age: 25, dni: "70908379" },
  //   { id: 2, name: "Jane Smith", age: 30, dni: "70908378" },
  //   { id: 2, name: "Jane Salas", age: 10, dni: "70908377" },
  // ];
  // //data.map(obj => ( { ...obj, action: menu({ id: 11111 }) }))
  // let new_array = data.map((ele) => {
  //   return { ...ele, action: menu({ id: 11111 }) };
  // });

  return (
    <>
      <div className="card">
        <div className="card-header">Gestion de Usuario</div>
        <div className="card-body">
          <div className="row">
            <div className="card card-body">
              <div className="col-auto me-auto">
                <div className="input-group input-group-sm">
                  <input
                    type="text"
                    id='buscadorUsuario'
                    className="form-control"
                    name="buscadorUsuario"
                    // onChange={handleChange}
                    placeholder="Buscador"
                    aria-label="search"
                  />
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleClickBuscar}
                    onContextMenu={(e) => {
                      // e.preventDefault(); // prevent the default behaviour when right clicked
                      // // console.log("Right Click");
                      // let testDropdown = document.getElementById("testDropdown")
                      // bootstrap.Dropdown.getOrCreateInstance(testDropdown).toggle()

                    }}
                  >
                    <i className="bi bi-search" aria-expanded="false"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <DataTable data={data} columns={columns} buscador={false} />
        </div>
      </div>
    </>
  );
}

export default GestionUsuario;
