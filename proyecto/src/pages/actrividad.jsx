import { useState, useEffect } from "react";
import {
  Modal,
  ModalFooter,
  Table,
  ModalBody,
  FormFeedback,
  ModalHeader,
  Label,
  ButtonGroup,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import "../styles/incidetes.css";
import ima from "../assets/lista-de-quehaceres.png";
import CambiosActividad from "../components/cambiosActividad";

export default function Actividad(args) {
  //variable de la modal para ingresar actividad
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [modalc, setModalc] = useState(false);
  //variable para abrir la modal de edicion
  const toggleca = () => setModalc(!modalc);

  //variable que almacena los datos de la tabla y lo envia a la modal de edicion
  const [data, setData] = useState([]);
  const [selectedRowData, setSelectedRowData] = useState(null);

  const [actividad, setActividad] = useState("");
  const [catego, setCatego] = useState("");
  const [descripcionac, setDescripcionac] = useState("");
  const [ubicacionac, setUbicacionac] = useState("");
  const [horaci, setHoraci] = useState("");
  const [horacfc, setHoracfc] = useState("");
  const [pt, setPt] = useState("");
  const [paquete, setPaquete] = useState("");

  const todosLosCamposLlenos =
    actividad !== "" &&
    catego !== "" &&
    descripcionac !== "" &&
    ubicacionac !== "" &&
    horaci !== "" &&
    horacfc !== "" &&
    pt !== "";

  useEffect(() => {
    fetch("http://localhost:3000/pepe")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/pts")
      .then((response) => response.json())
      .then((paquete) => setPaquete(paquete))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="cen">
      {/*contenedor de la tabla de actividades*/}
      <div className="kin">
        <div className="hjkl">
          <img
            width="70"
            height="70"
            src="https://img.icons8.com/color/48/skiing.png"
            alt="skiing"
          />
          <h1>Actividades</h1>
        </div>
        <div className="ta">
          <div className="coin">
            <div>
              <button onClick={toggle} className="ov-btn-slide-top">
                Agregar
              </button>
            </div>
            <div>
              <form action="/pepe" method="get">
                <Input  type="select" name="buscar" id="buscar">
                  <option value="">selecione un paquete turistico</option>
                  {paquete &&
                    paquete.map((item, index) => (
                      <option key={index} value={item.id_Paquete_Turistico}>
                        {item.nombre}
                      </option>
                    ))}
                </Input>
                <button type="submit" className="ov-btn-slide-top">
                  Buscar
                </button>
              </form>
            </div>
          </div>
          <Table hover striped>
            <thead className="table-primary" size="lg">
              <tr>
                <th>#</th>
                <th>Actividad</th>
                <th>Descripción</th>
                <th>Lugar</th>
                <th>Hora Inicio</th>
                <th>Hora Fin</th>
                <th>Estado</th>
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
                  <td>{item.estado}</td>

                  <td>
                    <ButtonGroup>
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
                        <img
                          width="30"
                          height="30"
                          src="https://img.icons8.com/cotton/64/edit--v1.png"
                          alt="edit--v1"
                        />
                      </button>
                    </ButtonGroup>
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
                  <Label>
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/dusk/64/sorting-answers.png"
                      alt="sorting-answers"
                    />
                    Categoria
                  </Label>
                  <Input
                    type="select"
                    name="catego"
                    onChange={(e) => setCatego(e.target.value)}
                    invalid={catego === ""}
                    valid={catego !== ""}
                  >
                    <option value="1">deportiva</option>
                    <option value="2">recreacion</option>
                    <option value="3">alimentacion</option>
                    <option value="4">riesgo</option>
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
                  <Label>
                    {" "}
                    <img
                      width="35"
                      height="35"
                      src="https://img.icons8.com/clouds/100/swimming.png"
                      alt="swimming"
                    />
                    Actividad:
                  </Label>
                  <Input
                    type="text"
                    name="actividad"
                    value={actividad}
                    onChange={(e) => setActividad(e.target.value)}
                    invalid={actividad === ""}
                    valid={actividad !== ""}
                  />
                  <FormFeedback invalid>
                    tienes que llenar este campo
                  </FormFeedback>
                  <FormFeedback valid>
                    {" "}
                    campo rellenado correctamente
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label>
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-description-copywriting-flaticons-lineal-color-flat-icons-2.png"
                      alt="external-description-copywriting-flaticons-lineal-color-flat-icons-2"
                    />
                    Descripción:
                  </Label>
                  <Input
                    type="textarea"
                    name="descripcionac"
                    onChange={(e) => setDescripcionac(e.target.value)}
                    value={descripcionac}
                    invalid={descripcionac === ""}
                    valid={descripcionac !== ""}
                  />
                  <FormFeedback invalid>
                    tienes que llenar este campo
                  </FormFeedback>
                  <FormFeedback valid>
                    {" "}
                    campo rellenado correctamente
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label>
                    {" "}
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/cotton/64/location--v1.png"
                      alt="location--v1"
                    />{" "}
                    Ubicación:
                  </Label>
                  <Input
                    type="text"
                    name="ubicacionac"
                    value={ubicacionac}
                    onChange={(e) => setUbicacionac(e.target.value)}
                    invalid={ubicacionac === ""}
                    valid={ubicacionac !== ""}
                  />
                  <FormFeedback invalid>
                    tienes que llenar este campo
                  </FormFeedback>
                  <FormFeedback valid>
                    {" "}
                    campo rellenado correctamente
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label>
                    {" "}
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/dusk/64/clock--v1.png"
                      alt="clock--v1"
                    />
                    hora inicio:
                  </Label>
                  <Input
                    type="time"
                    name="horaci"
                    value={horaci}
                    onChange={(e) => setHoraci(e.target.value)}
                    invalid={horaci === ""}
                    valid={horaci !== ""}
                  />
                  <FormFeedback invalid>
                    tienes que llenar este campo
                  </FormFeedback>
                  <FormFeedback valid>
                    {" "}
                    campo rellenado correctamente
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label>
                    {" "}
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/dusk/64/clock--v1.png"
                      alt="clock--v1"
                    />
                    hora final:
                  </Label>
                  <Input
                    type="time"
                    name="horacfc"
                    onChange={(e) => setHoracfc(e.target.value)}
                    value={horacfc}
                    invalid={horacfc === ""}
                  >
                    {" "}
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
                  <Label>paquete turistico:</Label>
                  <Input
                    type="select"
                    name="pt"
                    onChange={(e) => setPt(e.target.value)}
                    invalid={pt === ""}
                    valid={pt !== ""}
                  >
                    <option value="1">Morrocoi</option>
                    <option value="2">Margarita</option>
                    <option value="3">Avila</option>
                  </Input>
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
            <ModalFooter className="custom-modalfooter-ac">
              <Button
                color="success"
                onClick={toggle}
                disabled={!todosLosCamposLlenos}
                type="submit"
              >
                Registrar
              </Button>{" "}
              <Button color="secondary" onClick={toggle}>
                Cancelars
              </Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    </div>
  );
}
