const box = document.querySelector('#box');
const texto = document.querySelector('input');

//Ejercicio 1
box.addEventListener('mouseenter', () => box.classList.replace('box', 'boxEnter'));

box.addEventListener('mouseleave', () => box.classList.replace('boxEnter', 'box'));

box.addEventListener('mousedown', () => console.log('Has pulsado la caja'));

box.addEventListener('mouseup', () => console.log('Has soltado el botón izquierdo dentro de la caja'));

//Ejercicio 2
texto.addEventListener('keydown', (e) => console.log(`Has pulsado la tecla ${e.key}`))

texto.addEventListener('keyup', (e) => console.log(`Has soltado la tecla ${e.key}`))