// El resto de tareas no se detiene mientras se ejecuta la tarea tres.

// console.log('Tarea uno');
// setTimeout(()=>console.log('Tarea dos'),3000);
// console.log('Tarea tres');

// Hacer la llamada depende de Javascript, pero el tiempo de respuesta no.

// console.time('timer');
// setTimeout(()=>console.timeEnd('timer'),3000);

// ----------------------------> CAllBACKS

// function sum(num1, num2){
//     return num1 + num2;
// }

// function res(num1, num2){
//     return num1 - num2
// }

// function calc(num1, num2, callback){
//     return callback(num1, num2);
// }

// console.log(calc(2,3,sum));
// console.log(calc(5,8,res));


// function saludar(name){
//     console.log("Hola " + name);
// }

// setTimeout(saludar, 2000, 'David');



// ----------------------------> peticiones HTTP


// const API = "https://api.escuelajs.co/api/v1/products";

// function fecthData(urlApi, callback){
//     const req = new XMLHttpRequest();

//     req.open('GET', urlApi, true);
//     req.onreadystatechange = function(event){
//         if(req.readyState === 4){
//             if(req.status === 200){
//                 callback(null, JSON.parse(req.responseText))
//             }else{
//                 const error = new Error('Error' + urlApi);
//                 return callback(error, null);
//             }
//         }
//     }
//     req.send();
// }

// fecthData(API)

// req.open("GET", "https://api.escuelajs.co/api/v1/products");

// req.onload = () => {
//     console.log('OK', req.status);
//     console.log(req.response)
// };

// req.onerror = () =>{
//     console.log('error');
// }

// req.send();

// ----------------------------> PROMESAS

const peticion = fetch("https://pokeapi.co/api/v2/ability/1");
console.log('cargando');

// peticion.then((response, reject)=>{
//     console.log(response)
//     console.log(reject)
// })

peticion.then()
peticion.catch()
peticion.finally(()=>{
    console.log('done');
})