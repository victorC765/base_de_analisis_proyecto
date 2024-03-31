import { useState, useEffect } from "react";
import { format } from "date-fns";
import inc from "../assets/incidente.png";
import {
  Modal,
  Table,
  ModalFooter,
  ModalBody,
  ModalHeader,
  Label,
  FormFeedback,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import "../styles/incidetes.css";

import CambiosIncidente from "../components/cambiosIncidente";
export default function Incidente(args) {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

  const [data, setData] = useState([]);

  const [modalc, setModalc] = useState(false);
  const toggleca = () => setModalc(!modalc);
  const [selectedRowData, setSelectedRowData] = useState(null);

  const [incidente, setIncidente] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [hasError, setHasError] = useState(false);
  



  const todosLosCamposLlenos =
    incidente !== "" &&
    descripcion !== "" &&
    fecha !== "" &&
    hora !== "" &&
    ubicacion !== "" ;

 
  useEffect(() => {
    const fetchData = async () => {
      setHasError(false);
      try {
        const res = await fetch("http://localhost:3000/inci");
        const json = await res.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
    };
    fetchData();
  }, []);


  return (
    <div>
      <div className="cen">
        <div className="kin">
          <div className="keke">
          <img width="70" height="70" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-incident-emergency-services-flaticons-lineal-color-flat-icons-2.png" alt="external-incident-emergency-services-flaticons-lineal-color-flat-icons-2"/>
            <h1>Incidentes</h1>
          </div>
          <div className="ta">
            <div className="m">
              <button className="ov-btn-slide-top" onClick={toggle}>
                Crear
              </button>
            </div>
            <Table hover striped>
              <thead>
                <tr className="table-success" size="lg">
                  <th>#</th>
                  <th>incidente</th>
                  <th>descripción</th>
                  <th>fecha de reporte</th>
                  <th>hora</th>
                  <th>ubicacion</th>
                  <th>accción</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id_incidentes}>
                    <td>{item.id_incidentes}</td>
                    <td>{item.tipo_incidencia}</td>
                    <td>{item.descripcion_incidente}</td>
                    <td>{format(new Date(item.fecha), "dd/MM/yyyy")}</td>
                    <td>{item.hora}</td>
                    <td>{item.ubicacion}</td>
                    <td>
                      <CambiosIncidente
                        isOpen={modalc}
                        toggleca={toggleca}
                        selectedRowData={selectedRowData}
                      ></CambiosIncidente>
                      <button
                        className="ebuti"
                        onClick={() => {
                          setSelectedRowData(item);
                          toggleca();
                        }}
                      >
                        {" "}
                        <img
                          width="30"
                          height="30"
                          src="https://img.icons8.com/cotton/64/edit--v1.png"
                          alt="edit--v1"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
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
              <img src={inc} width="35" height="35" />
              <h3 className="hen">Registrar Incidente</h3>
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
                  value={incidente}
                  onChange={(e) => setIncidente(e.target.value)}
                  invalid={incidente === ""}
                  valid={incidente !== ""}
                  id="incidente"
                >
                  <option value="1">
                    Incidentes relacionados con el transporte
                  </option>
                  <option value="2">
                    Incidentes relacionados con el alojamiento
                  </option>
                  <option value="3">
                    Incidentes relacionados con las actividades
                  </option>
                  <option value="4">
                    Incidentes relacionados con la salud
                  </option>
                  <option value="5">Otro</option>
                </Input>
                <FormFeedback invalid>
                  tienes que llenar este campo
                </FormFeedback>
                <FormFeedback valid>
                  {" "}
                  campo rellenado correctamente
                </FormFeedback>
              </FormGroup>

              <FormGroup>
                <Label>Descripción</Label>
                <Input
                  type="textarea"
                  name="descripcion"
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  invalid={descripcion === ""}
                  valid={descripcion !== ""}
                  rows="3"
                  id="descripcion"
                />{" "}
                <FormFeedback invalid>
                  tienes que llenar este campo
                </FormFeedback>
                <FormFeedback valid>
                  {" "}
                  campo rellenado correctamente
                </FormFeedback>
              </FormGroup>

              <FormGroup>
                <Label>Ubicación</Label>
                <Input
                  type="text"
                  name="ubicacion"
                  value={ubicacion}
                  onChange={(e) => setUbicacion(e.target.value)}
                  invalid={ubicacion === ""}
                  valid={ubicacion !== ""}
                  id="ubicacion"
                />{" "}
                <FormFeedback invalid>
                  tienes que llenar este campo
                </FormFeedback>
                <FormFeedback valid>
                  {" "}
                  campo rellenado correctamente
                </FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label>Fecha:</Label>
                <Input
                  type="date"
                  name="fecha"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                  invalid={fecha === ""}
                  valid={fecha !== ""}
                  id="fecha"
                ></Input>{" "}
                <FormFeedback invalid>
                  tienes que llenar este campo
                </FormFeedback>
                <FormFeedback valid>
                  {" "}
                  campo rellenado correctamente
                </FormFeedback>
              </FormGroup>

              <FormGroup>
                <Label>Hora:</Label>
                <Input
                  type="time"
                  name="hora"
                  value={hora}
                  onChange={(e) => setHora(e.target.value)}
                  invalid={hora === ""}
                  valid={hora !== ""}
                  id="hora"
                ></Input>{" "}
                <FormFeedback invalid>
                  tienes que llenar este campo
                </FormFeedback>
                <FormFeedback valid>
                  {" "}
                  campo rellenado correctamente
                </FormFeedback>
              </FormGroup>
             
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={toggle}
              disabled={!todosLosCamposLlenos}
              type="submit"
            >
              Registrar
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
}
