import { useState,  useEffect  } from "react";

import {
  Modal,
  Table,
  ModalFooter,
  ModalBody,
  ModalHeader,
  Label,
  FormGroup,
  Input,
  Button
} from "reactstrap";


import "../styles/incidetes.css";

export default function Incidente(args) {
  const [modal, setModal] = useState(false);
  const toggle = () => {setModal(!modal);}

  const [incidentes, setIncidentes] = useState([]);

  
 useEffect(() => {
  fetch('/seleccion')
    .then(response => response.json())
    .then(data => setIncidentes(data))
    .catch(error => console.error('Error al obtener incidentes:', error));
}, []);
return(
  <div className="t">
      <div>
        <h1>Incidentes</h1>
        <Table>
          <thead>
            <tr className="table-dark">
              <th className="p-4">incidente</th>
              <th className="p-4">descripción</th>
              <th className="p-4"> causa</th>
              <th className="p-4">fecha de reporte</th>
              <th className="p-4">hora</th>
                
              <th className="p-4">accción</th>
            </tr>
          </thead>
          <tbody>
          {incidentes.map((incidentes, index) => (
            <tr key={index}>
              <td>{incidentes.descripcion_incidente}</td>
              <td>{incidentes.fecha}</td>
              <td>{incidentes.hora}</td>
              <td>{incidentes.ubicacion}</td>
            </tr>
          ))}
        </tbody>
        </Table>
      </div>
      <Button color="primary" variant="shadow" onClick={toggle}>
        Crear
      </Button>
    
      <Modal
        isOpen={modal}
        toggle={toggle}
        {...args}
        centered
        backdropClassName="custom-backdrop" // Clase personalizada para el backdrop
        contentClassName="custom-modal-content" 
       
        >
          <form action="/validar" method="post">
        <ModalHeader className="custom-modalHead" toggle={toggle}>
          <h3>Registrar Incidente</h3>
        </ModalHeader>
        
        <ModalBody>
            <div className="contain">
          <FormGroup>
            <Label>Incidente:</Label>
            <Input
              type="select"
              placeholder="incidente"
              name="incidente"
              id="incidente"
            >
              <option value="1">Incidentes relacionados con el transporte</option>
              <option value="2">Incidentes relacionados con el alojamiento</option>
              <option value="3">Incidentes relacionados con las actividades</option>
              <option value="4">Incidentes relacionados con la salud</option>
              <option value="5">Otro</option>
            </Input>
          </FormGroup>
          
          <FormGroup>
            <Label>Descripción</Label>
            <Input
              type="textarea"
              name="descripcion"
              rows="3"
              id="descripcion"
            />
          </FormGroup>
      
          <FormGroup>
            <Label>Ubicación</Label>
            <Input
              type="text"
              name="ubicacion"
              id="ubicacion"/>
          </FormGroup>
          <FormGroup>
            <Label>Fecha:</Label>
            <Input
              type="date"
              name="fecha"
              id="fecha"
            
            ></Input>
          </FormGroup>
         
          <FormGroup>
            <Label>Hora::</Label>
            <Input
              type="time"
              name="hora"
              rows="3"
              id="hora"
            ></Input>
          </FormGroup>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle} type="submit" >
            Registrar
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
       
        </ModalFooter>
        </form>
      
      </Modal>
    
    </div>
)

}