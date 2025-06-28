// server.js
const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Tu archivo db.json
const middlewares = jsonServer.defaults();

server.use(cors());          // Habilita CORS para todas las rutas
server.use(middlewares);     // Middlewares por defecto (logger, static, etc.)
server.use(router);          // Usa el router con las rutas de json-server

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server corriendo en http://0.0.0.0:${PORT}`);
});
