import  { useState, useEffect } from "react";
import {
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  FormFeedback,
  Button,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
const FormularioActualizacion = ({ isOpen, toggleca, selectedRowData }) => {
  const [datosFormulario, setDatosFormulario] = useState({
    id_actividades_ejecucion: "",
    actividad: "",
    descripcion_actividad: "",
    lugar: "",
    hora_incio: "",
    hora_fin: "",
    Paquete_Turistico_id_Paquete_Turistico: "1",
    categoria_id_categoria: "",
    Bitacora_id_Bitacora: "1",
    cumplimiento_id_cumplimiento: "",
  });

  const todosLosCamposLlenos =
  datosFormulario.actividad !== "" &&
  datosFormulario.categoria_id_categoria !== "" &&
  datosFormulario.descripcion_actividad !== "" &&
  datosFormulario.lugar !== "" &&
  datosFormulario.hora_incio !== "" &&
  datosFormulario.hora_fin !== "" &&
  datosFormulario.pt !== "" &&
  datosFormulario.cumplimiento_id_cumplimiento !== ""
  ;



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
        "http://localhost:3000/actualizar-actividad",
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
        backdropClassName="custom-backdropca"
        contentClassName="custom-modal-content-ac"
      >
        <form onSubmit={manejarEnvio}>
          <ModalHeader className="custom-modalHead-ac" toggle={toggleca}>
          <div className="gh">
          <img width="50" height="50" src="https://img.icons8.com/fluency/48/refresh.png" alt="refresh"/>
            <h3>Cambios en Actividad</h3>
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
                      value={datosFormulario.id_actividades_ejecucion}
                      onChange={manejarCambio}
                    />

                    {/* Add form fields here to edit the row data */}
                  </div>
                )}
              </FormGroup>
              <FormGroup>
                <Label>
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/dusk/64/sorting-answers.png"
                    alt="sorting-answers"
                  />
                  Categoria:
                </Label>
                <Input
                  type="select"
                  name="categoria_id_categoria"
                  value={datosFormulario.categoria_id_categoria}
                  onChange={manejarCambio}
                  invalid={datosFormulario.categoria_id_categoria === ""}
                  valid={datosFormulario.categoria_id_categoria !== ""}
                >
                  <option value="">elija la categoria de actividad</option>
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
                  value={datosFormulario.actividad}
                  onChange={manejarCambio}
                  invalid={datosFormulario.actividad === ""}
                  valid={datosFormulario.actividad !== ""}
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
                  name="descripcion_actividad"
                  value={datosFormulario.descripcion_actividad}
                  onChange={manejarCambio}
                  invalid={datosFormulario.descripcion_actividad === ""}
                  valid={datosFormulario.descripcion_actividad !== ""}
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
                    src="https://img.icons8.com/cotton/64/location--v1.png"
                    alt="location--v1"
                  />{" "}
                  Ubicación:
                </Label>
                <Input
                  type="text"
                  name="lugar"
                  value={datosFormulario.lugar}
                  onChange={manejarCambio}
                  invalid={datosFormulario.lugar === ""}
                  valid={datosFormulario.lugar !== ""}
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
                    src="https://img.icons8.com/dusk/64/clock--v1.png"
                    alt="clock--v1"
                  />
                  Hora Inicio:
                </Label>
                <Input
                  type="time"
                  name="hora_incio"
                  value={datosFormulario.hora_incio}
                  onChange={manejarCambio}
                  invalid={datosFormulario.hora_incio === ""}
                  valid={datosFormulario.hora_incio !== ""}
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
                    src="https://img.icons8.com/dusk/64/clock--v1.png"
                    alt="clock--v1"
                  />
                  Hora fin:
                </Label>
                <Input
                  type="time"
                  name="hora_fin"
                  value={datosFormulario.hora_fin}
                  onChange={manejarCambio}
                  invalid={datosFormulario.hora_fin === ""}
                  valid={datosFormulario.hora_fin !== ""}
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
                  Paquete turistico:
                  <Input
                    type="select"
                    name="Paquete_Turistico_id_Paquete_Turistico"
                    value={
                      datosFormulario.Paquete_Turistico_id_Paquete_Turistico
                    }
                    onChange={manejarCambio}
                    invalid={datosFormulario.Paquete_Turistico_id_Paquete_Turistico === ""}
                    valid={datosFormulario.Paquete_Turistico_id_Paquete_Turistico !== ""}
                  > 
                   <option value="">seleccione un PT</option>
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
                </Label>
              </FormGroup>
              <FormGroup>
                <Label>
                  ESTADO:
                  </Label>
                  <Input
                    type="select"
                    name="cumplimiento_id_cumplimiento"
                    value={datosFormulario.cumplimiento_id_cumplimiento}
                    onChange={manejarCambio}
                    invalid={datosFormulario.cumplimiento_id_cumplimiento === ""}
                    valid={datosFormulario.cumplimiento_id_cumplimiento !== ""}
                    >
                    <option value="">seleccione un estado</option>
                    <option value="1">cumplido</option>
                    <option value="2">no cumplido</option>
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
            {/* Repite para cada campo */}
            <Button color="success" type="submit" onClick={toggleca} 
                disabled={!todosLosCamposLlenos}>
              Actualizar
            </Button>
            <Button color="secondary" onClick={toggleca}>Cancelar</Button>
          </ModalFooter>
        </form>
      </Modal>
    </>
  );
};

export default FormularioActualizacion;
