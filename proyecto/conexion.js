import express from 'express';
import path from 'path';
import mysql from 'mysql'; // Importa mysql2/promise para soporte de promesas

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Conexión con el manejador de db
let conexion;

async function connectDatabase() {
   try {
      conexion = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "actividades_incidencias"
      });
      console.log('Conexión a la base de datos establecida');
   } catch (error) {
      console.error('Error al conectar a la base de datos:', error);
      process.exit(1);
   }
  }
  connectDatabase();

  app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
 res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", function(req,res){
    res.render("validar");
})
app.get('/nose', async (req, res) => {


  // Consulta SELECT
  const actividades_ejecucion = await conexion.query('SELECT * FROM actividades_ejecucion');

  // Manejo de errores
  if (actividades_ejecucion.error) {
    throw actividades_ejecucion.error;
  }
console.log(actividades_ejecucion);
  // Enviar datos al front-end
  res.json(actividades_ejecucion);
 });




app.post("/regiac",function(req,res)
  {
      const { catego,actividad, descripcionac, ubicacionac, horaci, horacf, pt } = req.body;
      let inyec="INSERT INTO `actividades_ejecucion`(  `actividad`, `descripcion_actividad`, `lugar`, `hora_incio`, `hora_fin`, `Paquete_Turistico_id_Paquete_Turistico`, `categoria_id_categoria`, `Bitacora_id_Bitacora`, `cumplimiento_id_cumplimiento`) VALUES ('"+actividad+"','"+descripcionac+"','"+ubicacionac+"','"+horaci+"','"+horacf+"','"+pt+"','"+catego+"','1','1')"
      conexion.query(inyec,function(error){
          if(error){
              console.log(error);
          }else{
              console.log("Registro exitoso");
          }      
      });
  }
)
app.post("/validar",function(req,res)

  {
    const { incidente, descripcion, fecha, hora, ubicacion } = req.body;
    let inyec="INSERT INTO `incidentes`( `descripcion_incidente`, `Paquete_Turistico_id_Paquete_Turistico`, `tipo_incidencia_id_tipo_incidencia`, `fecha`, `hora`, `ubicacion`) VALUES ('"+descripcion+"','1','"+incidente+"','"+fecha+"','"+hora+"','"+ubicacion+"')"
    conexion.query(inyec,function(error){
      if(error){
          console.log(error);
      }else{
          console.log("Registro exitoso");
      }      
  });
  })
  
  
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`)
  });
  
  