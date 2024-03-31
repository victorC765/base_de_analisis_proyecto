import { useState, useEffect } from "react";
import {
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  Button,
  FormFeedback,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import inc from "../assets/incidente.png";
const FormularioActualizacionIncidentes = ({
  isOpen,
  toggleca,
  selectedRowData,
}) => {
  const [datosFormulario, setDatosFormulario] = useState({
    id_incidentes: "",
    descripcion_incidente: "",
    ubicacion: "",
    Paquete_Turistico_id_Paquete_Turistico: "",
    incidente: "",
    hora: "",
    fecha: "",
    actividadesxincidente: "",
  });
  const todosLosCamposLlenos =
    datosFormulario.incidente !== "" &&
    datosFormulario.descripcion_incidente !== "" &&
    datosFormulario.fecha !== "" &&
    datosFormulario.hora !== "" &&
    datosFormulario.ubicacion !== "" &&
    datosFormulario.actividadesxincidente !== "" &&
    datosFormulario.Paquete_Turistico_id_Paquete_Turistico !== "" 
    ;

  const manejarCambio = (evento) => {
    setDatosFormulario({
      ...datosFormulario,
      [evento.target.name]: evento.target.value,
    });
  };
  const [paquete,setPaquete] = useState ("")
  useEffect(() => {
    fetch("http://localhost:3000/pts")
      .then((response) => response.json())
      .then((paquete) => setPaquete(paquete))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  useEffect(() => {
    if (selectedRowData) {
      setDatosFormulario((prevState) => ({
        ...prevState,
        ...selectedRowData,
      }));
    }
  }, [selectedRowData]);
  const manejarEnvio = async (evento) => {
    evento.preventDefault();
    // Llama a la función para enviar los datos al servidor
    actualizarDatos(datosFormulario);
  };
  const actualizarDatos = async (datos) => {
    try {
      const respuesta = await fetch(
        "http://localhost:3000/actualizar-incidente",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datos),
        }
      );

      if (!respuesta.ok) {
        throw new Error("Error actualizando datos");
      }

      const resultado = await respuesta.json();
      console.log(resultado);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const [act, setAct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/xd")
      .then((response) => response.json())
      .then((act) => setAct(act))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
      <Modal
        isOpen={isOpen}
        toggleca={toggleca}
        backdropClassName="custom-backdropinc"
        contentClassName="custom-modal-content"
      >
        <form onSubmit={manejarEnvio}>
          <ModalHeader className="custom-modalHead" toggle={toggleca}>
            <div className="gh">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/fluency/48/refresh.png"
                alt="refresh"
              />
              <h3>Editar Incidente</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="contain">
              <FormGroup>
                {/* Agrega campos de entrada para cada columna que desees actualizar */}
                {selectedRowData && (
                  <div>
                    <Label> Id:</Label>
                    <Input
                      type="text"
                      value={datosFormulario.id_incidentes}
                      onChange={manejarCambio}
                    />

                    {/* Add form fields here to edit the row data */}
                  </div>
                )}
              </FormGroup>
              <FormGroup>
                <img src={inc} width="35" height="35" />
                <Label>Incidente:</Label>
                <Input
                  type="select"
                  name="incidente" // Asegúrate de que el 'name' coincida con la clave en el estado
                  value={datosFormulario.incidente} // Asegúrate de que el valor inicial coincida con el tipo de valor esperado
                  onChange={manejarCambio}
                  invalid={datosFormulario.incidente === ""}
                  valid={datosFormulario.incidente !== ""}
                >
                  <option value="">Selecciona un incidente</option>
                  <option value={1}>
                    Incidentes relacionados con el transporte
                  </option>
                  <option value={2}>
                    Incidentes relacionados con el alojamiento
                  </option>
                  <option value={3}>
                    Incidentes relacionados con las actividades
                  </option>
                  <option value={4}>
                    Incidentes relacionados con la salud
                  </option>
                  <option value={5}>Otro</option>
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
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-description-copywriting-flaticons-lineal-color-flat-icons-2.png"
                  alt="external-description-copywriting-flaticons-lineal-color-flat-icons-2"
                />
                <Label>Descripción</Label>
                <Input
                  type="textarea"
                  name="descripcion_incidente"
                  rows="3"
                  value={datosFormulario.descripcion_incidente}
                  onChange={manejarCambio}
                  invalid={datosFormulario.descripcion_incidente === ""}
                  valid={datosFormulario.descripcion_incidente !== ""}
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
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/cotton/64/location--v1.png"
                  alt="location--v1"
                />
                <Label>Ubicación</Label>
                <Input
                  type="text"
                  name="ubicacion"
                  value={datosFormulario.ubicacion}
                  onChange={manejarCambio}
                  invalid={datosFormulario.ubicacion === ""}
                  valid={datosFormulario.ubicacion !== ""}
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
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/fluency/48/calendar--v1.png"
                  alt="calendar--v1"
                />
                <Label>Fecha:</Label>
                <Input
                  type="date"
                  name="fecha"
                  value={datosFormulario.fecha}
                  onChange={manejarCambio}
                  invalid={datosFormulario.fecha === ""}
                  valid={datosFormulario.fecha !== ""}
                ></Input>
                <FormFeedback invalid>
                  tienes que llenar este campo
                </FormFeedback>
                <FormFeedback valid>campo rellenado correctamente</FormFeedback>
              </FormGroup>

              <FormGroup>
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/dusk/64/clock--v1.png"
                  alt="clock--v1"
                />
                <Label>Hora:</Label>
                <Input
                  type="time"
                  name="hora"
                  value={datosFormulario.hora}
                  onChange={manejarCambio}
                  invalid={datosFormulario.hora === ""}
                  valid={datosFormulario.hora !== ""}
                ></Input>
                <FormFeedback invalid>
                  tienes que llenar este campo
                </FormFeedback>
                <FormFeedback valid>
                  {" "}
                  campo rellenado correctamente
                </FormFeedback>
              </FormGroup>
              <FormGroup>
              <Input  type="select" name="pt" value={datosFormulario.Paquete_Turistico_id_Paquete_Turistico} onChange={(e) => datosFormulario.Paquete_Turistico_id_Paquete_Turistico(e.target.value)}  invalid={datosFormulario.Paquete_Turistico_id_Paquete_Turistico === ""}
                  valid={datosFormulario.Paquete_Turistico_id_Paquete_Turistico!== ""} >
                  <option value="">selecione un paquete turistico</option>
                  {paquete &&
                    paquete.map((item, index) => (
                      <option key={index} value={item.id_Paquete_Turistico}>
                        {item.nombre}
                      </option>
                    ))}
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
                <Label>relaciona el incidente a una actividad</Label>
                <Input
                  type="select"
                  name="actividadesxincidente" // Asegúrate de que el 'name' coincida con la clave en el estado
                  value={datosFormulario.actividadesxincidente} // Asegúrate de que el valor inicial coincida con el tipo de valor esperado
                  onChange={manejarCambio}
                  invalid={datosFormulario.actividadesxincidente=== ""}
                  valid={datosFormulario.actividadesxincidente!== ""}
                >
                  <option value="">Selecciona </option>
                  {act && act.map((item, index) => (
                    <option key={index} value={item.id_actividades_ejecucion}>
                      {item.actividad}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </div>
          </ModalBody>
          <ModalFooter className="custom-modalfooter">
            {/* Repite para cada campo */}
            <Button
              color="success"
              type="submit"
              onClick={toggleca}
              disabled={!todosLosCamposLlenos}
            >
              Actualizar
            </Button>
            <Button color="secondary" onClick={toggleca}>
              Cancelar
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </>
  );
};

export default FormularioActualizacionIncidentes;
