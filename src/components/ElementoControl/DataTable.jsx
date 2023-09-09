import { useEffect, useState } from "react";

function DataTable({ data, columns, buscador }) {
  
  buscador = buscador == undefined ? false : buscador;

  const initialForm = {
    search: "",
  };

  const [form, setForm] = useState(initialForm);
  const [dataFiltro, setDataFiltro] = useState(data);
  const [cbResult, setCbResult] = useState(10);
  const [nroPagina, setNroPagina] = useState(1);

  useEffect(() => {
    setDataFiltro(data);
    setNroPagina(1);
  }, [data])
  

  const handleChangen = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value }); 
    if (e.target.value === "") {
      setDataFiltro(data);
      setNroPagina(1);
    } else {
      setDataFiltro(rowFilter(data, columns, e.target.value));
    }
  };
  const handkeChangenResult = (e) => {
    setNroPagina(1)
    setCbResult(Number(e.target.value));
  };

  const rowFilter = (data, columns, value) => {
    let resultado = data;
    let isResultado = false;
    const search = new RegExp(value, "i");
    columns.map((column) => {
      let encontro = false;
      if (encontro == false) {
        data.map((row) => {
          if (encontro == false) {
            if (row.hasOwnProperty(column.DataField)) {
              let temp = resultado.filter((x) =>
                search.test(x[column.DataField])
              );
              if (temp.length) {
                // console.log(value,column.DataField,temp)
                encontro = true;
                isResultado = encontro;
                resultado = temp;

                return;
              }
            }
          }
        });
      }
    });
    if (!isResultado) {
      setNroPagina(0);
      resultado = [];
    } else {
      setNroPagina(1);
    }
    return resultado;
  };

  const getValorRow = (row, DataField, key) => {
    if (row.hasOwnProperty(DataField)) {
      return <td key={key}>{row[DataField]}</td>;
    }
  };

  const cargarCabecera = (columns) => {
    return (
      <tr>
        {columns.map((column, key) => {
          return (            
            <th width={column.width} key={key}>              
              {column.Header}
            </th>
          );
        })}
      </tr>
    );
  };
  const cargarfilas = (data, columns) => {
    let filtro = data;
    if (data.length > 0) {      
      filtro = data.slice(nroPagina - 1, nroPagina * cbResult + cbResult - 1);
      // console.log('llego',filtro.slice(0,1),dataFiltro)      
    }

    return (
      <>
        {filtro.length > 0 ? (
          filtro.map((row, key) => {
            return (
              <tr key={key}>
                {columns.map((column, key) => {
                  return getValorRow(row, column.DataField, key);
                })}
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="100%" className="text-center">
              <b>No se encontraron registros coincidentes</b>
            </td>
          </tr>
        )}
      </>
    );
  };

  const cargarPaginacion = (data) => {
    let paginas = [];
    if (data.length > 0) {
      let mod = data.length % cbResult;
      let dividir = data.length / cbResult;
      if (mod > 0) {
        dividir += 1;
      }
      // console.log(cbResult, data.length,mod)
      for (let i = 1; i <= dividir; i++) {
        paginas.push({ nro: i, active: true }); 
      }
  
    }
// console.log(previo,next)
    return (
      <nav className="row" aria-label="Page navigation">
        <div className="col-auto me-auto">Total de registro {data.length}</div>
        <div className="col-auto">
          <ul className="pagination justify-content-end">
            <li className={`page-item ${nroPagina>1 ? "" : "disabled"}`}>
              <a
                className="page-link text-dark"
                href="#"
                aria-disabled="true"

                onClick={() => {  
                  setNroPagina(nroPagina - 1);
                }}
              >
                Previous
              </a>
            </li>
            {paginas.map((pagina, index) => {
              return (
                <li
                  className={`page-item ${
                    pagina.nro == nroPagina  ? "active text-white" : ""
                  }`}
                  key={index}
                >
                  <a
                    className="page-link"
                    href="#"
                    onClick={() => {  
                      setNroPagina(pagina.nro);                  
                    }}
                  >
                    {pagina.nro}
                  </a>
                </li>
              );
            })}
            <li className={`page-item ${nroPagina< paginas.length ? "" : "disabled"}`}>
              <a
                className="page-link text-dark"
                href="#"                
                onClick={() => {  
                  setNroPagina(nroPagina + 1);
                }}
              >
                Next
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };

  return (
    <>   
      <br />
      <div className="row">
        <div className="col-auto me-auto">
          <select
            className="form-select form-select-sm mb-3"
            aria-label="Small select example"
            onChange={handkeChangenResult}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <div className="col-auto" style={{display: buscador ? "block": "none"}}>          
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="basic-addon1">
              <i
                className="bi bi-search"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></i>
            </span>
            <input
              type="text"
              className="form-control"
              name="search"
              onChange={handleChangen}
              placeholder="search"
              aria-label="search"
            />
          </div>
        </div>
      </div>

      <div className="table-responsive-sm">
        <table className="table table-sm table-hover table-bordered">
          <thead>{cargarCabecera(columns)}</thead>
          <tbody>{cargarfilas(dataFiltro, columns)}</tbody>
        </table>
      </div>
      {dataFiltro.length > 0 ? cargarPaginacion(dataFiltro) : ""}
    </>
  );
}

export default DataTable;
