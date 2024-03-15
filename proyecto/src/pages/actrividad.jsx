

import { useState, useEffect } from "react";

import { Modal, ModalFooter,Table, ModalBody, ModalHeader, Label, FormGroup, Input, Button } from 'reactstrap';
import "../styles/incidetes.css";

export default function Actividad(args) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  

  return (
    <div className="cen">
    <div className="ta">
    
      <h1>Actividades</h1>
      <Table dark>
        <thead>
          <tr>
            <th>Actividad</th>
            <th>Descripción</th>
            <th>Ubicación</th>
          </tr>
        </thead>
        <tbody>
      
    </tbody>
      </Table>
      <Button onClick={toggle} color="primary">Agregar</Button>
     
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
          <h3>nueva actividad</h3>
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
        <ModalFooter>
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