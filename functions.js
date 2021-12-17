// var planta = 'rosa';
// const animal = 'gatito';
// var persona = 'hernan';
// console.log('.--------------.------------.');
// if (planta == 'rosa') {
//     let planta = 'margarita';
//     const animal = 'pato';
//     console.log(animal);
    
//     console.log(planta);
//     console.log(animal);
    
// }else {
//     var planta = 'Malbon';
//     var persona = 'Carlos';
    
//     console.log(planta);
//     console.log(persona);
// }

// console.log('.--------------.------------.')
// console.log(planta)
// console.log(animal)
// console.log(persona)

// let animales = [
//     {id: 1, nombre: 'lobo'}, 
//     {id: 2, nombre: 'vaca'}, 
//     {id: 3,nombre: 'vaca'}
// ];

// // let animalesFiltrados = animales.filter(a => a.nombre == 'vaca')
// let animalesFiltrados = animales.find(a => a.nombre == 'vaca')

// console.log(animales )
// console.log('-----------' )
// console.log(animalesFiltrados )

// let mascota = {
//     nombre: 'Rober',
//     // presentacion: function() {
//     presentacion: ()=> {
//         return `Mi nombre es : ${this.nombre}`
//     }
// }
// console.log(mascota.presentacion())

// let objeto = [{color: 'negro'}, 1.5 , 'Carlos'];

// let algo = [...objeto];

// console.log(algo);
// objeto[0].color = 'blanco';
// console.log(algo);

// console.log(...objeto);

let a = 'Hola';
let b = a;
b += '!!!!';
console.log('---primitivos----')
console.log(a)
console.log(b)

const objeto = {color:"negro", alto: 2};
console.log('Color original-- ', objeto)
let o = objeto.color;
o+='verde';

console.log('Asigno VERDE a copia')
console.log('objeto original : ', objeto)
console.log('valor asignado : ', o)
objeto.color = 'blanco';
console.log('Asigno BLANCO a objeto.color---')
console.log('---color de OBJETO:--', objeto)
console.log('valor asignado: ', o)


