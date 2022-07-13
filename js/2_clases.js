// 2. CLASES

class Curso {
    constructor(titulo, dificultad){
        this.titulo = titulo;
        this.dificultad = dificultad;

        this.lecciones = [];
    }

    agregarLeccion(leccion){
        this.lecciones.push(leccion)
    }
    eliminarUltimaLeccion(){
        this.lecciones.pop()
    }
}

let cursoHTML = new Curso('HTML', 'novato');

console.log(cursoHTML.lecciones);

cursoHTML.agregarLeccion('etiqueta body');
cursoHTML.agregarLeccion('insertar imagenes');

console.log(cursoHTML.lecciones);

// --------------- Ejemplo----------------------

const IVA = 1.12;

class Item{
    constructor(precio, cantidad, impuestos){
        this._precio = precio;
        this._cantidad = cantidad;
        this._impuestos = impuestos;
    }
    calcularTotal(){
        return total = this._precio * this._cantidad * this._impuestos;
    }
    get precio(){
        return this._precio;
    }
    set precio(newPrecio){
        this._precio = newPrecio
    }
}

const item1 = {
    precio: 15,
    cantidad: 2,
    impuestos: IVA,
    calcularTotal: function(){
        return total = this.precio * this.cantidad * this.impuestos;
    }
}

console.log(item1.calcularTotal())

const item2 = new Item(30, 4, IVA)

console.log(item2.calcularTotal())
// const item2 = {
//     precio: 25,
//     cantidad: 3,
//     impuestos: IVA_REDUCIDO
// }

const factura = {
    item1: item1,
    item2: item2
}

delete item1.precio;

console.log(item2.precio)
item2.precio = 50;
console.log(item2.precio)