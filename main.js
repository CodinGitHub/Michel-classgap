// Declaración 

// Objetos vacios
let user = new Object();
let user1 = {};

// Objetos con valores
let user3 = {
    name: 'Jhon',
    age: 23
}

// Acceder a los valores: Notacion de punto
// console.log(user3.name);

// Para agregar propiedades
user3.lastName = 'Perez';
// console.log(user3.lastName)

// Para borrar un propiedad (delete)
delete user3.lastName;
// console.log(user3.lastName)

// Propiedades con mas de una palabra
let user4 = {
    name: 'Jhon',
    age: 23,
    'is member': true
}
// console.log(user4['is member'])

// Se puede tener una COMA COLGANTE con los objetos
/*
let user5 = {
    name: "John",
    age: 30
  };
  
  let key = prompt("¿Qué te gustaría saber acerca del usuario?", "name");
  
  // acceso por medio de una variable
  alert( user5[key] ); // John (si se ingresara "name")
*/
  // PROPIEDADES CALCULAS
  // let fruit = prompt("¿Qué fruta comprar?", "manzana");
/*
let bag = {
  [fruit]: 5, // El nombre de la propiedad se obtiene de la variable fruit
};
*/
// alert( bag.manzana );

// Atajo para valores de propiedad
function makeUser(name, age) {
    return {
      name: name,
      age: age,
      // ...otras propiedades
    };
  }
  
  let user5 = makeUser("John", 30);
  // alert(user5.name); // John

// La prueba de propiedad existente, el operador “in”
let user6 = { name: "John", age: 30 };

// alert( "age" in user6 );    // mostrará "true", porque user.age sí existe
// alert( "blabla" in user6 ); // mostrará false, porque user.blabla no existe

// ejercicio 1

const user7 = {};
user7.value1 = 'one';
user7.value2 = 'two';
user7.value3 = 'three';
user7.value4 = 'four';
user7.value5 = 'five';

delete user7.value4

console.log(user7)

let propiedad = 'surname'

// for (let key in user7)

const IVA = 1.12;

const item1 = {
  precio: 15,
  cantidad: 3,
  impuesto: IVA,
  calcularTotal: function (){
    return this.precio * this.cantidad * this.impuesto
  }
}

console.log(item1.calcularTotal());

const item2 = {
  precio: 3,
  cantidad: 10,
  impuesto: IVA,
  calcularTotal: function (){
    return this.precio * this.cantidad * this.impuesto
  }
}

let factura = {
  item1: item1,
  item2: item2,
  calcularTotal: ()=>{
    return item1.calcularTotal()  + item2.calcularTotal()
  }
}

console.log(factura.calcularTotal());