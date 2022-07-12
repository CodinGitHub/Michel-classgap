const options = {
    method: 'GET'
}


const request = fetch("http://127.0.0.1:5500/datos.json", options)
.then(response => response.json())
.then(data=>{console.log(data.nombre)})