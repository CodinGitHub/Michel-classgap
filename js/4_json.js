// 4 JSON

// Partiendo del siguiente objeto:

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null
};

// Se lo puede convervir a JSON usando stringify

let json = JSON.stringify(student);

// console.log(json)
// console.log(student)

let objetoJson = JSON.parse(json)

// console.log(json)

// console.log(objetoJson)

// Manejo de Errores:

// try {
//   lalala; // error, la variable no está definida!
// } catch (err) {
//   console.log(err.stack)
// }

// Ejemplo práctico
// Se tiene esta respuesta de la red: 

let response = '{"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"spouse":null}'

try {
  let responseJson = JSON.parse(response) 
  alert(responseJson.address) 
} catch (error) {
  alert('mil disculpas, hubo un rpoblema con el recurso de red')
  alert(error.name)
}


