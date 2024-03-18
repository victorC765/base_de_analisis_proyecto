

import { useState, useEffect } from "react";

import { Modal, ModalFooter,Table, ModalBody, ModalHeader, Label, FormGroup, Input, Button } from 'reactstrap';
import "../styles/incidetes.css";
import ima from "../assets/lista-de-quehaceres.png"
export default function Actividad(args) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  
  const [data, setData] = useState([]);

 useEffect(() => {
    fetch('http://localhost:3000/pepe')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
 }, []);

  return (
    <div className="cen">
    <div className="ta">
    <h1>Actividades</h1>
    <div className="coin">
   
    <div className="m">
    <Label>Paquete Turistico:</Label>
      <Input type="select" name="pt" placeholder="pt" id="pt">
        <option>Morrocoi</option>
        </Input>
        </div>
        
        <div >
       <input className="bus" type="text" name="buscar" id="buscar" placeholder="🔍 buscar"/>
        </div>
        </div>
      <Table >
      <thead>
        <tr>
          <th>ID</th>
          <th>Actividad</th>
          <th>Descripción</th>
          <th>Lugar</th>
          <th>Hora Inicio</th>
          <th>Hora Fin</th>
          {/* Agrega más columnas según los datos que estés manejando */}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id_Actividades_Ejecucion}</td>
            <td>{item.actividad}</td>
            <td>{item.descripcion_actividad}</td>
            <td>{item.lugar}</td>
            <td>{item.hora_incio}</td>
            <td>{item.hora_fin}</td>
            {/* Asegúrate de reemplazar 'id_Actividades_Ejecucion', 'actividad', etc., con los nombres reales de las columnas de tu base de datos */}
          </tr>
        ))}
      </tbody>
      </Table>
      <button onClick={toggle} className="ov-btn-slide-top">Agregar</button>
     
    </div>

     
        <div>
            <Modal
        isOpen={modal}
        toggle={toggle}
        {...args}
        centered
        backdropClassName="custom-backdrop-ac" // Clase personalizada para el backdrop
        contentClassName="custom-modal-content-ac">
        <form action="/regiac" method="post">
        
        <ModalHeader className="custom-modalHead-ac" toggle={toggle}>
        <div className="gh">
          <img src={ima} width="50" height="50"></img>
          <h3 className="hen">Nueva Actividad</h3>
          </div>
        </ModalHeader>
        <ModalBody>
            <div className="contain">
          <FormGroup>
              <Label>Categoria</Label>
              <Input type="select" name="catego" >
               <option value="1">deportiva</option>
               <option value="2">recreacion</option>
               <option value="3">alimentacion</option>
               <option value="4">riesgo</option>
              </Input>
          </FormGroup>
          <FormGroup>
            <Label> Actividad:</Label>
            <Input type="text" name="actividad" />
          </FormGroup>
          <FormGroup>
            <Label>Descripción</Label>
            <Input type="textarea" name="descripcionac" />
          </FormGroup>
          <FormGroup>
            <Label>Ubicación</Label>
            <Input type="text" name="ubicacionac" />
          </FormGroup>
          <FormGroup>
            <Label>hora inicio:</Label>
            <Input type="time" name="horaci">  </Input>
          </FormGroup>
          <FormGroup>
            <Label>hora final:</Label>
            <Input type="time" name="horacfc">  </Input>
          </FormGroup>
          <FormGroup>
            <Label>paquete turistico:</Label>
            <Input type="select" name="pt">   
            <option value="1">Morrocoi</option>    
            </Input>  
            </FormGroup>
          </div>
        </ModalBody>
        <ModalFooter className="custom-modalfooter-ac">
          <Button color="danger" type="submit" >
            Registrar
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
        </form>
      </Modal>
        </div>
        </div>
        
  )
}