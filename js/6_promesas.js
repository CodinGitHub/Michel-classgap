const options = {
    method: 'GET'
}


const request = fetch("http://127.0.0.1:5500/datos.json", options)
.then(response => response.json())
.then(data=>{console.log(data.nombre)})



const nameElement = document.querySelector('.title');
const imageElement = document.querySelector('.image');
const aboutElement = document.querySelector('.about');


// const promesaVacia = new Promise(()=>{});

// console.log(promesaVacia)

const promesa = fetch('https://pokeapi.co/api/v2/pokemon/35/');

aboutElement.innerText = 'cargando...'

promesa
.then(res => res.json())

.then(resJson => {
    nameElement.innerText = resJson.name
    imageElement.src = resJson.sprites.other['official-artwork'].front_default
})
.catch(error => console.log('El API responde con este error: ' + error))
.finally(aboutElement.innerText = 'CARGADO')