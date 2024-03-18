import mysql from 'mysql'
const connection = mysql.createConnection({
 host: 'localhost', // o el host de tu base de datos
 user: 'root', // reemplaza 'tu_usuario' con tu usuario de MySQL
 password: '', // reemplaza 'tu_contraseña' con tu contraseña de MySQL
 database: 'actividades_incidencias' // reemplaza 'tu_base_de_datos' con el nombre de tu base de datos
});

connection.connect((err) => {
 if (err) throw err;
 console.log('Conectado a la base de datos MySQL!');
 
});

export default connection