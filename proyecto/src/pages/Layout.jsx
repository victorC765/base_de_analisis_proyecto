import { Outlet, Link } from "react-router-dom";
import logo from "../assets/turismo.png";
import "../styles/navega.css";
const Layout = () =>{
 return <div>
    <nav  className="nab"> 
    <div className="ssd">
    <img src={logo} width="60" height="60"/>
       <h1 className="titulo">Gestion de Paquetes Turisticos</h1>
       </div>
       <div>
         <Link to="/actividad"><button className="fill">Actividad</button></Link>
            <Link to="/incidente"><button className="fill">incidentes</button></Link>
            </div>  
    </nav>
    <hr />
    <Outlet />
 </div>;
}

export default Layout;