import Layout from "../components/Shared/Layout";
import GestionUsuario from "../components/Usuario/GestionUsuario";


export const getComponent = (menus) => {
  const array=[] ;
  menus.map((menu) => {
    menu.paginas.map((pagina) => {
      const url = `${menu.url}${pagina.url}`;
      const acceso = rutas.filter((ruta) => ruta.url == url);
      array.push(...acceso);
    });
  });
  return array;
};

const rutas = [
  {
    url: "/Mantenimiento/GestionUsuario",
    component: <Layout children={<GestionUsuario />} />,
  },
  {
    url: "/Mantenimiento/GestionUsuario222",
    component: <Layout children={<GestionUsuario />} />,
  },
];
