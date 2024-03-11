import { Outlet, Link } from "react-router-dom";
import { Button, ButtonGroup } from "reactstrap";

const Layout = () =>{
 return <div>
    <nav  className="flex"> 
         <ButtonGroup>
         <Link to="/actividad"><Button color="info">Actividad</Button></Link>
            <Link to="/incidente"><Button color="success">incidentes</Button></Link>
            </ButtonGroup>
    </nav>
    <hr />
    <Outlet />
 </div>;
}

export default Layout;