const { response } = require('express');
const express = require('express');
const datos = require('./datos')

const app = express();

const port = 8043;

app.get('/home', (request, response)=> {
    response.send("<h1>Hola Mundo</h1>")
});

app.get('/datos', (request, response)=>{
    response
        .status(200)
        .send(datos)
})

app.get('/producto', (request, response)=> {
    response.redirect("/error")
});

app.get('/error', (request, response)=> {
    response.json({
        status: 200,
        message: "not found"
    })
});

app.listen(port, ()=> {
    console.log('Server run port: ' + port)
});