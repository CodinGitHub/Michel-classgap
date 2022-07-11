let busqueda = 'edad';


let user = {
    edad: 23,
    nombre: 'David',
    aprellido: 'Ruiz',
    'es miembro': true,
    [domicilio]: 'Calle 15'
}

let domicilio = prompt('Escribe tu domicilio');

console.log(user['es miembro']);