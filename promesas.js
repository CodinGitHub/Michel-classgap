
// const promesaVacia = new Promise(()=>{});

// console.log(promesaVacia)

const promesa = fetch('http://127.0.0.1:5500/datos.json');

console.log(promesa)

promesa
// .then(res => res.json())
// .then(resJson => console.log(resJson))
.catch(error => console.log(error))
.finally()