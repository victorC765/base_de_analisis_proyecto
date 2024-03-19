import { Outlet, Link } from "react-router-dom";
import logo from "../assets/turismo.png";
import "../styles/navega.css";
import { NavbarBrand } from "reactstrap";
const Layout = () =>{
 return <div>
    <nav  className="nab"> 
    <div className="ssd">
    <img src={logo} width="60" height="60"/>
       <NavbarBrand href="/"><h1 className="titulo">Gestion de Paquetes Turisticos</h1></NavbarBrand>
       </div>
       <div>
         <Link to="/actividad"><button className="fill">Actividad</button></Link>
            <Link to="/incidente"><button className="fill">incidentes</button></Link>
            <Link to="/p">p</Link>
            </div>  
    </nav>
    <hr />
    <Outlet />
 </div>;
}

export default Layout;