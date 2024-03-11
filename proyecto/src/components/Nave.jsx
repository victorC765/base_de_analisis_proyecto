import { Routes, Route } from "react-router-dom";
import "../styles/incidetes.css"
import Layout from "../pages/Layout";
import {Button} from "reactstrap";
import Incidente from "../pages/incidente";
import { NavbarBrand } from "reactstrap";
import imagen from '/isla.png';
import Actividad from "../pages/actrividad";

function Nave() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary">
        <div className="container-fluid">
          
          <NavbarBrand href="/"> <div className="gh"><img src={imagen} alt="Mi imagen" width="50" height="50"/><h2 className="cb">control de paquete turistico</h2> </div></NavbarBrand>
         
         
           
      </div>
       
      </nav>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="actividad" element={<Actividad/>} />
          <Route path="incidente" element={<Incidente />} />
        </Route>
      </Routes>
     
    </div>
  );
}

export default Nave;
