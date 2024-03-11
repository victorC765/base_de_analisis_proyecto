import { useState } from "react";
import {
  Modal,
  Table,
  ModalFooter,
  ModalBody,
  ModalHeader,
  Label,
  FormGroup,
  Input,
  Option,
  Button
} from "reactstrap";
import "../styles/incidetes.css"
export default function Actividad(args) {
    const [modal, setModal] = useState(false);
  const toggle = () => {setModal(!modal); }

  const handleSubmit = () => {
    
    toggle(); 
    // Add any additional logic for handling
  };
  return(
    <>
    <div >
        <div className="ta">
            <h1>Actividades</h1>
        <Table>
                <thead>
                    <tr className="table-dark">
                        <th className="p-4">Actividad</th>
                        <th className="p-4">d</th>
                        <th className="p-4">Fecha</th>
                        <th className="p-4">Hora</th>
                        <th className="p-4">cumplimiento</th>
                        <th className="p-4">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                    </tr>
                </tbody>
            </Table>
            <Button onClick={toggle} color="primary">agregar</Button>
            </div>
            <Modal
        isOpen={modal}
        toggle={toggle}
        {...args}
        centered
        backdropClassName="custom-backdrop-ac" // Clase personalizada para el backdrop
        contentClassName="custom-modal-content-ac">

        <ModalHeader className="custom-modalHead-ac" toggle={toggle}>
          <h3>Registrar Incidente</h3>
        </ModalHeader>
        <ModalBody>
            <div className="contain">
          <FormGroup>
              <Label>Actividad</Label>
              <Input type="select" name="actividad">
               <option value="1">refrigerio</option>
               <option value="2">kareoke</option>
               <option value="3">parada</option>
               <option value="4">almuerzo</option>
              </Input>
          </FormGroup>
          <FormGroup>
            <Label>Descripción</Label>
            <Input type="textarea" name="descripcion" />
          </FormGroup>
          <FormGroup>
            <Label>Ubicación</Label>
            <Input type="text" name="ubicacion" />
          </FormGroup>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit} >
            Registrar
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
        </div>
        </>
  )
}