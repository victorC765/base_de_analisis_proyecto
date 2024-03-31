import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import db from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Define las rutas estáticas
app.use(express.static(path.join(__dirname, 'dist')));


let almacen = '';
// Asegúrate de que esta ruta esté definida antes de cualquier otra ruta que pueda coincidir con la solicitud
app.post("/regiac",function(req,res)
  {
    const {  id_Paquete_Turistico } = req.body;
    almacen =  id_Paquete_Turistico;
    
    res.send('Mensaje almacenado con éxito.');
    return almacen;
  })
    app.get('/pepe', (req, res) => {
       
        db.query('SELECT ae.id_actividades_ejecucion, ae.actividad, ae.descripcion_actividad, ae.lugar, ae.hora_incio, ae.hora_fin, ae.Paquete_Turistico_id_Paquete_Turistico, ae.categoria_id_categoria,cu.estado  FROM actividades_ejecucion ae JOIN cumplimiento cu ON cu.id_cumplimiento = ae.cumplimiento_id_cumplimiento WHERE  ae.Paquete_Turistico_id_Paquete_Turistico = "'+almacen+'" ', (err, results) => {
           if (err) {
               console.error('Error al ejecutar la consulta:', err);
               throw err;
           }
        
           res.json(results);
      });
     });
 
app.get('/pts', (req, res) => {
    db.query('SELECT * FROM `paquete_turistico` WHERE 1', (err, results) => {
       if (err) {
           console.error('Error al ejecutar la consulta:', err);
           throw err;
       }
    
       res.json(results);
  });
 });
app.get('/inci', (req, res) => {
   db.query('SELECT i.id_incidentes, i.descripcion_incidente, i.Paquete_Turistico_id_Paquete_Turistico, i.tipo_incidencia_id_tipo_incidencia, i.fecha, i.hora, i.ubicacion, ti.tipo_incidencia FROM incidentes i JOIN tipo_incidencia ti ON ti.id_tipo_incidencia = i.tipo_incidencia_id_tipo_incidencia ORDER BY i.id_incidentes ASC;', (err, results) => {
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
      let inyec="INSERT INTO `actividades_ejecucion`(  `actividad`, `descripcion_actividad`, `lugar`, `hora_incio`, `hora_fin`, `Paquete_Turistico_id_Paquete_Turistico`, `categoria_id_categoria`, `Bitacora_id_Bitacora`, `cumplimiento_id_cumplimiento`) VALUES ('"+actividad+"','"+descripcionac+"','"+ubicacionac+"','"+horaci+"','"+horacfc+"','"+pt+"','"+catego+"','"+pt+"','2')"
      db.query(inyec,function(error){
          if(error){
              console.log(error);
          }else{
              console.log("Registro exitoso");
          }      
      });
      
      
  }
)
app.put('/actualizar-incidente', (req, res) => {
    const { id_incidentes,incidente, descripcion_incidente, ubicacion, Paquete_Turistico_id_Paquete_Turistico,hora,fecha,incidentexactividad } = req.body;
    // Realiza la operación de actualización en la base de datos
    // Este es un marcador de posición para tu lógica de actualización de base de datos real
    db.query('UPDATE `incidentes` SET `id_incidentes`=?,`descripcion_incidente`=?,`Paquete_Turistico_id_Paquete_Turistico`=?,`tipo_incidencia_id_tipo_incidencia`=?,`fecha`=?,`hora`=?,`ubicacion`=? WHERE id_incidentes = '+id_incidentes+'', [id_incidentes,descripcion_incidente,Paquete_Turistico_id_Paquete_Turistico,incidente,fecha,hora,ubicacion ], (error, resultados) => {
        if (error) {
            console.error('Error actualizando datos:', error);
            res.status(500).send('Error actualizando datos');
        } else {
            res.status(200).send('Datos actualizados exitosamente');
        }
    });
    let inac="INSERT INTO `incidentes_x_actividades`(`id_incidentes_x_actividades_ejecucion`, `incidentes_id_incidentes`, `actividades_ejecucion_id_actividades_ejecución`)VALUES ('"+incidentexactividad +"','"+id_incidentes+"')"
    db.query(inac,function(error){
      if(error){
          console.log(error);
      }else{
          console.log("Registro exitoso");
      }      
  });

});

// Example of an update endpoint in Express
app.put('/actualizar-actividad', (req, res) => {
    const { id_actividades_ejecucion, actividad, descripcion_actividad, lugar, hora_incio, hora_fin, Paquete_Turistico_id_Paquete_Turistico, categoria_id_categoria, Bitacora_id_Bitacora, cumplimiento_id_cumplimiento } = req.body;
    // Realiza la operación de actualización en la base de datos
    // Este es un marcador de posición para tu lógica de actualización de base de datos real
    db.query('UPDATE `actividades_ejecucion` SET `id_actividades_ejecucion`=?,`actividad`=?,`descripcion_actividad`=?,`lugar`=?,`hora_incio`=?,`hora_fin`=?,`Paquete_Turistico_id_Paquete_Turistico`=?,`categoria_id_categoria`=?,`Bitacora_id_Bitacora`=?,`cumplimiento_id_cumplimiento`=? WHERE id_actividades_ejecucion = '+id_actividades_ejecucion+'', [id_actividades_ejecucion, actividad, descripcion_actividad, lugar, hora_incio, hora_fin, Paquete_Turistico_id_Paquete_Turistico, categoria_id_categoria, Bitacora_id_Bitacora, cumplimiento_id_cumplimiento, ], (error, resultados) => {
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