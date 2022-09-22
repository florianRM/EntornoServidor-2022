const numEnlaces = document.querySelectorAll('a');
const parrafo = document.querySelectorAll('p');
let contador = 0;

console.log(numEnlaces.length);

console.log(numEnlaces[numEnlaces.length - 2].href);

numEnlaces.forEach((value, key) => {
    if(numEnlaces[key].href === "http://prueba/") {
        contador++;
    }
});
console.log(contador);

console.log(parrafo[2].getElementsByTagName('a').length);
