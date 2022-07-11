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