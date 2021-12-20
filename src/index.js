// Este archivo se denomina entrie point
const express = require('express');
const datos = require('./datos')

const app = express();

const product = require('./api/product');

const port = 8043;

app.use(express.json()); //cuando envien un objeto lo podemos leer.

app.use('/api', product);




app.listen(port, ()=> {
    console.log('Server run port: ' + port)
});