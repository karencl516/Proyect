const { request, response } = require('express');
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const todosRouter = require('./routes/ToDos')

const cors = require('cors')
const allowedOrigins = ["http://127.0.0.1:5500/"]

const server = express()
const port = 5002

server.use(express.json());
const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}
server.use(cors(corsOptions));

server.use('/api/v1', todosRouter);

dotenv.config();

mongoose
    .connect(process.env.MONGODB_CON)
    .then(() => console.log('Conectado a la base de datos'))
  .catch((err) =>
    console.log('Error al conectar a la base de datos, error: ' + err)
  );
server.listen(port, () => {
    console.log(`Servidor corriendo en localhost, en el puerto ${port}`);
  });