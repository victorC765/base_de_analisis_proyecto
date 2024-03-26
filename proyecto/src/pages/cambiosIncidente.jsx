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

const FormularioActualizacionIncidentes = ({
  isOpen,
  toggleca,
  selectedRowData,
}) => {
  const [datosFormulario, setDatosFormulario] = useState({
    id_incidentes: "",
    descripcion_incidente: "",
    ubicacion: "",
    Paquete_Turistico_id_Paquete_Turistico: "1",
    incidente: "",
    hora: "",
    fecha: "",
  });
  const todosLosCamposLlenos =
  datosFormulario.incidente !== "" &&
  datosFormulario.descripcion_incidente!== "" &&
  datosFormulario.fecha !== "" &&
  datosFormulario.hora !== "" &&
  datosFormulario.ubicacion !== "";

  const manejarCambio = (evento) => {
    setDatosFormulario({
      ...datosFormulario,
      [evento.target.name]: evento.target.value,
    });
  };
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
  return (
    <>
      <Modal
        isOpen={isOpen}
        toggleca={toggleca}
        backdropClassName="custom-backdrop"
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
                <Label>Fecha:</Label>
                <Input
                  type="date"
                  name="fecha"
                  value={datosFormulario.fecha}
                  onChange={manejarCambio}
                  invalid={datosFormulario.fecha === ""}
                  valid={datosFormulario.fecha !== ""}></Input>
                 <FormFeedback invalid>
                  tienes que llenar este campo
                </FormFeedback>
                <FormFeedback valid>
                  campo rellenado correctamente
                </FormFeedback>
              </FormGroup>

              <FormGroup>
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
            </div>
          </ModalBody>
          <ModalFooter className="custom-modalfooter">
            {/* Repite para cada campo */}
            <Button color="success" type="submit" onClick={toggleca} disabled={!todosLosCamposLlenos}>
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
