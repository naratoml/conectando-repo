const { response } = require('express');
const express = require('express');
const datos = require('./datos')

const app = express();

const port = 8043;

app.use(express.json()); //cuando envien un objeto lo podemos leer.

let products = [
    {id: 1, name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    {id: 2, name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    {id: 3, name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    {id: 4, name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    {id: 5, name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    {id: 6, name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    {id: 7, name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    {id: 8, name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    {id: 9, name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    {id: 10, name: 'Monitor', price: 200, quantity: 3, colors: [] },
]

let id = products.length;

app.post('/products', (req, res)=> {
    let obj = req.body;
    products.push(obj);
    res.send('Agregado.');
});


app.get('/api/products', (req,res)=>{
    res.json({
        products
    })
})

app.get('/api/product/:id', (req, res)=> {
    let id = req.params.id;
    let product = products.find(p => p.id === Number(id));
    res.status(200).send({
        product
    })
})

app.post('/api/product', (req, res)=> {
    let obj = req.body;
    id++;
    obj.id = id;
    products.push(obj);
    res.status(200).send('Nuevo producto agregado.');
});

app.put('/api/product/:id', (req,res)=> {
    let id = req.params.id;
    let props = req.body;
    let product = products.find(p => p.id === Number(id));
    for (let property in props) {
        product[property] = props[property];
    }

    res.send(product);

})

app.delete('/api/product/:id',(req, res)=>{
    let id = req.params.id;
    products = products.filter(p => p.id !== Number(id));
    res.status(200).send(products);
});




app.listen(port, ()=> {
    console.log('Server run port: ' + port)
});