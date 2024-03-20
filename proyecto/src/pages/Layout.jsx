import { Outlet, Link } from "react-router-dom";
import logo from "../assets/turismo.png";
import "../styles/navega.css";
import ima from "../assets/lista-de-quehaceres.png";
import inc from "../assets/incidente.png";
import { NavbarBrand } from "reactstrap";
const Layout = () => {
  return (
    <div>
      <nav className="nab">
        <div className="ssd">
          <img src={logo} width="60" height="60" />
          <NavbarBrand href="/">
            <h1 className="titulo">Gestion de Paquetes Turisticos</h1>
          </NavbarBrand>
        </div>
        <div>
          <Link to="/actividad">
            <button id="butt" className="fill">
              {" "}
              <img src={ima} width="30" height="30"></img> Actividad
            </button>
          </Link>
          <Link to="/incidente">
            <button id="butt" className="fill">
              <img src={inc} width="30" height="30" />
              incidentes
            </button>
          </Link>
        </div>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
