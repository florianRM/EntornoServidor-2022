//1
const modulosPrimero = document.querySelector('ul').querySelectorAll('li');
console.log(modulosPrimero);
//2
const sistemasInformaticos = modulosPrimero[2];

//3
modulosPrimero.forEach((value, key) => {
    if(modulosPrimero[key].textContent === 'Sistemas Informáticos') {
        modulosPrimero[key - 1];
        console.log(value);
    }
});

//4
let anteriores = [];

modulosPrimero.forEach((value, key) => {
    if(key <= sistemasInformaticos[key]) {
        anteriores.push(value);
    }
});
console.log(anteriores)