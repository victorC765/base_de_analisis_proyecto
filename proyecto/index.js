import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import db from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Define las rutas estáticas
app.use(express.static(path.join(__dirname, 'dist')));

// Asegúrate de que esta ruta esté definida antes de cualquier otra ruta que pueda coincidir con la solicitud
app.get('/pepe', (req, res) => {
   db.query('SELECT * FROM actividades_ejecucion', (err, results) => {
      if (err) {
          console.error('Error al ejecutar la consulta:', err);
          throw err;
      }
   
      res.json(results);
 });
});
app.get('/inci', (req, res) => {
   db.query('SELECT * FROM incidentes', (err, results) => {
      if (err) {
          console.error('Error al ejecutar la consulta:', err);
          throw err;
      }
   
      res.json(results);
 });
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/regiac",function(req,res)
  {
      const { catego, actividad, descripcionac, ubicacionac, horaci, horacfc, pt } = req.body;
      let inyec="INSERT INTO `actividades_ejecucion`(  `actividad`, `descripcion_actividad`, `lugar`, `hora_incio`, `hora_fin`, `Paquete_Turistico_id_Paquete_Turistico`, `categoria_id_categoria`, `Bitacora_id_Bitacora`, `cumplimiento_id_cumplimiento`) VALUES ('"+actividad+"','"+descripcionac+"','"+ubicacionac+"','"+horaci+"','"+horacfc+"','"+pt+"','"+catego+"','1','1')"
      db.query(inyec,function(error){
          if(error){
              console.log(error);
          }else{
              console.log("Registro exitoso");
          }      
      });
      
      
  }
)
// Example of an update endpoint in Express
app.put('/actualizar-actividad', (req, res) => {
    const { id_Actividades_Ejecucion, actividad, descripcion_actividad, lugar, hora_incio, hora_fin, Paquete_Turistico_id_Paquete_Turistico, categoria_id_categoria, Bitacora_id_Bitacora, cumplimiento_id_cumplimiento } = req.body;
    // Realiza la operación de actualización en la base de datos
    // Este es un marcador de posición para tu lógica de actualización de base de datos real
    db.query('UPDATE `actividades_ejecucion` SET `id_actividades_ejecucion`=?,`actividad`=?,`descripcion_actividad`=?,`lugar`=?,`hora_incio`=?,`hora_fin`=?,`Paquete_Turistico_id_Paquete_Turistico`=?,`categoria_id_categoria`=?,`Bitacora_id_Bitacora`=?,`cumplimiento_id_cumplimiento`=? WHERE id_actividades_ejecucion = '+id_Actividades_Ejecucion+'', [id_Actividades_Ejecucion, actividad, descripcion_actividad, lugar, hora_incio, hora_fin, Paquete_Turistico_id_Paquete_Turistico, categoria_id_categoria, Bitacora_id_Bitacora, cumplimiento_id_cumplimiento, ], (error, resultados) => {
        if (error) {
            console.error('Error actualizando datos:', error);
            res.status(500).send('Error actualizando datos');
        } else {
            res.status(200).send('Datos actualizados exitosamente');
        }
    });
});

app.post("/validar",function(req,res)

  {
    const { incidente, descripcion, fecha, hora, ubicacion } = req.body;
    let inyec="INSERT INTO `incidentes`( `descripcion_incidente`, `Paquete_Turistico_id_Paquete_Turistico`, `tipo_incidencia_id_tipo_incidencia`, `fecha`, `hora`, `ubicacion`) VALUES ('"+descripcion+"','1','"+incidente+"','"+fecha+"','"+hora+"','"+ubicacion+"')"
    db.query(inyec,function(error){
      if(error){
          console.log(error);
      }else{
          console.log("Registro exitoso");
      }      
  });
  })

// Ahora define la ruta que maneja todas las solicitudes
app.get('*', (req, res) => {
 res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


// Tus otras rutas van aquí...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(`Servidor corriendo en el puerto ${PORT}`);
});