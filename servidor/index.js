const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');

const {salvarObra, listarObras, limparObras} = require ('./obra.service');

const app = express ();
app.use (bodyParser.json ());
app.use (cors ({origin: true, credentials: true}));

app.route ('/api/obras').post (salvarObra);
app.route ('/api/obras').get (listarObras);
app.route ('/api/obras').delete (limparObras);

const HOST = 'localhost';
const PORT = 9000;

const httpServer = app.listen (PORT, HOST, () => {
  console.log (`Servidor rodando em http://${HOST}:${PORT}`);
});
