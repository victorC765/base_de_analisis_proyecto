import { useState,  useEffect  } from "react";
import inc from "../assets/incidente.png"
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

  const [data, setData] = useState([]);

 useEffect(() => {
    fetch('http://localhost:3000/inci')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
 }, []);
return(
  
  <div >
    <div className="cen">
      <div className="ta">

        <h1>Incidentes</h1>
          
    <div className="m">
    <Label>Paquete Turistico:</Label>
      <Input type="select" name="pt" placeholder="pt" id="pt">
        <option>Morrocoi</option>
        </Input>
        </div>
        <Table size="sm">
          <thead>
            <tr className="table-dark">
              <th className="p-4">descripción</th>
              <th className="p-4">fecha de reporte</th>
              <th className="p-4">hora</th>
                
              <th className="p-4">accción</th>
            </tr>
          </thead>
          <tbody>
          {data.map((item, index) => (
          <tr key={index}>
              <td>{item.descripcion_incidente}</td>
              <td>{item.fecha}</td>
              <td>{item.hora}</td>
              <td>{item.ubicacion}</td>
            </tr>
          ))}
        </tbody>
        </Table>
        <button className="ov-btn-slide-top" onClick={toggle}>
        Crear
      </button>
      </div>
      
      </div>
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
          <div className="gh">
          <img src={inc} width="35" height="35" /><h3 className="hen">Registrar Incidente</h3>
          </div>
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