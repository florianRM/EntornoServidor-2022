const texto = document.querySelector('input');
const boton = document.querySelector('button');

boton.addEventListener('click', () => {
    texto.addEventListener('keyup', (e) => {
        console.log(e);
        console.log(texto.value);
        console.log(`Has pulsado la tecla ${e.key}`)
    })
})
