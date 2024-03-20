import React, { useState,useEffect } from 'react';
import {
 Input,
 Label,
 Modal,
 ModalFooter,
 ModalHeader
} from "reactstrap";
const FormularioActualizacion = ({ isOpen, toggleca, selectedRowData }) => {
   
    
    const [datosFormulario, setDatosFormulario] = useState({
        id_actividades_ejecucion: '',
        actividad: '',
        descripcion_actividad: '',
        lugar: '',
        hora_incio: '',
        hora_fin: '',
        Paquete_Turistico_id_Paquete_Turistico: '1',
        categoria_id_categoria: '',
        Bitacora_id_Bitacora: '1',
        cumplimiento_id_cumplimiento: '1'
    });
    const manejarCambio = (evento) => {
        setDatosFormulario({
            ...datosFormulario,
            [evento.target.name]: evento.target.value,
        });
    };
    useEffect(() => {
        if (selectedRowData) {
          setDatosFormulario(prevState => ({
            ...prevState,
            ...selectedRowData
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
            const respuesta = await fetch('http://localhost:3000/actualizar-actividad', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(datos),
            });
    
            if (!respuesta.ok) {
                throw new Error('Error actualizando datos');
            }
    
            const resultado = await respuesta.json();
            console.log(resultado);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <>
        <Modal 
        isOpen={isOpen}
        toggleca={toggleca}
        
        >
        <form onSubmit={manejarEnvio}>
            <ModalHeader>
                <Label>Cambios en Actividad
                </Label>
            </ModalHeader>
            {/* Agrega campos de entrada para cada columna que desees actualizar */}
            {selectedRowData && (
      <div>
         <Input type="text" value={datosFormulario.id_actividades_ejecucion}  onChange={manejarCambio}/>
        {/* Add form fields here to edit the row data */}
      </div>
    )}
            <Label >Actividad:</Label>
            <Input type="text" name="actividad" value={datosFormulario.actividad} onChange={manejarCambio}/>
            <Label >Descripción</Label>
            <Input type="textarea" name='descripcion_actividad' value={datosFormulario.descripcion_actividad} onChange={manejarCambio} />
            <Label >Lugar</Label>
            <Input type="text" name='lugar' value={datosFormulario.lugar} onChange={manejarCambio} />
 
            <Label>
                Inicio:
                <Input type='time' name='hora_incio' value={datosFormulario.hora_incio} onChange={manejarCambio} />
            </Label>
            <Label>
                Hora fin:
                <Input type='time' name='hora_fin' value={datosFormulario.hora_fin} onChange={manejarCambio} />
            </Label>

            <Label>
    Paquete turistico:
    <Input type='select' name='Paquete_Turistico_id_Paquete_Turistico' value={datosFormulario.Paquete_Turistico_id_Paquete_Turistico} onChange={manejarCambio}>
        <option value="1">Morrocoi</option>    
    </Input>
</Label>
<Label>
    Categoria:
    <Input type='select' name='categoria_id_categoria' value={datosFormulario.categoria_id_categoria} onChange={manejarCambio}>
        <option value="1">deportiva</option>
        <option value="2">recreacion</option>
        <option value="3">alimentacion</option>
        <option value="4">riesgo</option>
    </Input>
</Label>
    <ModalFooter>
            {/* Repite para cada campo */}
            <Input type="submit" value="Actualizar" />
            </ModalFooter>

            <button onClick={toggleca}>cancelar</button>
        </form>
        </Modal>
        </>
    );
};

export default FormularioActualizacion;