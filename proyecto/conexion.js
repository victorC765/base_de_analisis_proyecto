import express from 'express';
import path from 'path';
import mysql from 'mysql2/promise'; // Importa mysql2/promise para soporte de promesas

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

// Sirve los archivos estáticos de la aplicación React
app.use(express.static(path.join(__dirname, 'dist')));

// Asegúrate de que todas las solicitudes se redirijan al archivo index.html
// para que React Router funcione correctamente
app.get('*', (req, res) => {
 res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Insertar incidentes a la base de datos
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get('/seleccion', async (req, res) => {
 try {
    const [results] = await conexion.execute('SELECT * FROM incidentes');
    res.json(results);
 } catch (error) {
    console.error('Error al obtener incidentes:', error);
    res.status(500).send('Error al obtener incidentes');
 }
});

app.post("/validar", async (req, res) => {
 const { incidente, descripcion, fecha, hora, ubicacion,actividad , descripcionac, ubicacionac, horaci, horacf, pt } = req.body;

 try {
    await conexion.execute(
      'INSERT INTO incidentes(descripcion_incidente, Paquete_Turistico_id_Paquete_Turistico, tipo_incidencia_id_tipo_incidencia, fecha, hora, ubicacion) VALUES (?, ?, ?, ?, ?, ?)',
      [descripcion, '1', incidente, fecha, hora, ubicacion]
    );
    console.log("Registro exitoso");
    res.status(200).send('Registro exitoso');
 } catch (error) {
    console.error('Error al registrar incidente:', error);
    res.status(500).send('Error al registrar incidente');
 }
   await conexion.execute(
     'INSERT INTO `actividades_ejecucion`( `actividad`, `descripcion_actividad`, `lugar`, `hora_incio`, `hora_fin`, `Paquete_Turistico_id_Paquete_Turistico`,  ) VALUES (?,?,?,?,?,?)',
     [actividad, descripcionac, ubicacionac, horaci, horacf, pt]
   );
   console.log("Registro exitoso :)");
   res.status(200).send('Registro exitoso');
 } catch (error) {
   console.error('Error al registrar actividad:', error);
   res.status(500).send('Error al registrar actividad');
 }
});

app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});