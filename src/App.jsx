import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "./components/Principal";
import Layout from "./components/Shared/Layout";
import LayoutError from "./components/Shared/LayoutError";
import NotFound from "./components/Error/NotFound";
import { useSelector } from "react-redux";
import { getComponent } from "./utils/RutasUtils";

function App() {
  const rutas = () => {
    const { data } = useSelector((store) => store.accesos);
    if (data.menus != undefined) {
      const rutas = getComponent(data.menus);
      return rutas.map((ruta, key) => {
        return <Route path={ruta.url} element={ruta.component} key={key} />;
      });
    }
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route
            path="/Principal"
            element={<Layout children={<Principal />} />}
          />
          {rutas()}
          <Route path="*" element={<LayoutError children={<NotFound />} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
