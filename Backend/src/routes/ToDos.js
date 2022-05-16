const express = require('express')
const router = express.Router()
const todoSchema = require('../models/todos')


router.post('/todos', (request,response)=> {
    //response.send('crear tarea');
    console.log('request:', request.body);
    const newTodo = todoSchema(request.body);
  newTodo
    .save()
    .then((data) => response.json({ success: data }))
    .catch((err) => response.json({ failured: err }))
});

module.exports = router;