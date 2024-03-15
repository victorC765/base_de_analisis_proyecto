import { Routes, Route } from "react-router-dom";

import Layout from "../pages/Layout";

import Incidente from "../pages/incidente";

import Actividad from "../pages/actrividad";

function Nave() {
  return (
   <nav>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="actividad" element={<Actividad/>} />
          <Route path="incidente" element={<Incidente />} />
        </Route>
      </Routes>
      </nav>
 
  );
}

export default Nave;
