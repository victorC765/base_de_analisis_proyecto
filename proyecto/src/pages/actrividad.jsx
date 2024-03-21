import { useState, useEffect } from "react";

import {
  Modal,
  ModalFooter,
  Table,
  ModalBody,
  ModalHeader,
  Label,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import "../styles/incidetes.css";
import ima from "../assets/lista-de-quehaceres.png";
import CambiosActividad from "./cambiosActividad";
export default function Actividad(args) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [modalc, setModalc] = useState(false);
  const toggleca = () => setModalc(!modalc);
  const [data, setData] = useState([]);
  const [selectedRowData, setSelectedRowData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/pepe")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="cen">
      <div className="kin">
      <div className="hjkl">
        <h1>Actividades</h1>
        </div>
      <div className="ta">
      
        <div className="coin">
          <div className="m">
            <Label>Paquete Turistico:</Label>
            <Input type="select" name="pt" placeholder="pt" id="pt">
              <option>Morrocoi</option>
            </Input>
          </div>
          <div>
            <button onClick={toggle} className="ov-btn-slide-top">
              Agregar
            </button>
          </div>
          <div>
            <input
              className="bus"
              type="text"
              name="buscar"
              id="buscar"
              placeholder="🔍 buscar"
            />
          </div>
        </div>
        <Table>
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Actividad</th>
              <th>Descripción</th>
              <th>Lugar</th>
              <th>Hora Inicio</th>
              <th>Hora Fin</th>
              <th>Accion</th>
              {/* Agrega más columnas según los datos que estés manejando */}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id_actividades_ejecucion}>
                <td>{item.id_actividades_ejecucion}</td>
                <td>{item.actividad}</td>
                <td>{item.descripcion_actividad}</td>
                <td>{item.lugar}</td>
                <td>{item.hora_incio}</td>
                <td>{item.hora_fin}</td>
                <td>
                
                  <CambiosActividad
                    isOpen={modalc}
                    toggleca={toggleca}
                    selectedRowData={selectedRowData}
                  ></CambiosActividad>
                  <button
                  className="ebut"
                    onClick={() => {
                      setSelectedRowData(item);
                      toggleca();
                    }}
                  >
                    <img width="30" height="30" src="https://img.icons8.com/cotton/64/edit--v1.png" alt="edit--v1"/>
                  </button>
                </td>
                {/* Asegúrate de reemplazar 'id_Actividades_Ejecucion', 'actividad', etc., con los nombres reales de las columnas de tu base de datos */}
              </tr>
            ))}
          </tbody>
        </Table>
        </div>
      </div>

      <div>
        <Modal
          isOpen={modal}
          toggle={toggle}
          {...args}
          centered
          backdropClassName="custom-backdrop-ac" // Clase personalizada para el backdrop
          contentClassName="custom-modal-content-ac"
        >
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
                <img width="30" height="30" src="https://img.icons8.com/dusk/64/sorting-answers.png" alt="sorting-answers"/>
                  <Label>Categoria</Label>
                  <Input type="select" name="catego">
                    <option value="1">deportiva</option>
                    <option value="2">recreacion</option>
                    <option value="3">alimentacion</option>
                    <option value="4">riesgo</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                <img width="35" height="35" src="https://img.icons8.com/clouds/100/swimming.png" alt="swimming"/>
                  <Label> Actividad:</Label>
                  <Input type="text" name="actividad" />
                </FormGroup>
                <FormGroup>
                <img width="30" height="30" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-description-copywriting-flaticons-lineal-color-flat-icons-2.png" alt="external-description-copywriting-flaticons-lineal-color-flat-icons-2"/>
                  <Label>Descripción</Label>
                  <Input type="textarea" name="descripcionac" />
                </FormGroup>
                <FormGroup>
                <img width="30" height="30" src="https://img.icons8.com/cotton/64/location--v1.png" alt="location--v1"/>
                  <Label> Ubicación</Label>
                  <Input type="text" name="ubicacionac" />
                </FormGroup>
                <FormGroup>
                <img width="30" height="30" src="https://img.icons8.com/dusk/64/clock--v1.png" alt="clock--v1"/>
                  <Label>   hora inicio:</Label>
                  <Input type="time" name="horaci" />
                </FormGroup>
                <FormGroup>
                <img width="30" height="30" src="https://img.icons8.com/dusk/64/clock--v1.png" alt="clock--v1"/>
                  <Label>   hora final:</Label>
                  <Input type="time" name="horacfc">
                    {" "}
                  </Input>
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
              <Button color="danger" type="submit" onClick={toggle}>
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
  );
}
