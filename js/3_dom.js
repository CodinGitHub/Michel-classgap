let card = document.getElementById('card');

card.addEventListener('click', (event)=>{
    if (event.target.className === 'image'){
        console.log('Accion cuando se presiona la imagen')
    } 
});