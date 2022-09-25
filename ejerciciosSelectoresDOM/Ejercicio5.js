//a
console.log('Modulos de primero')
const modulosPrimero = document.querySelector('ul');
const modulos = modulosPrimero.querySelectorAll('li');
console.log(modulos)

//b
console.log('Modulo sistemas informáticos')
console.log(modulosPrimero.querySelector('li:nth-child(3)'));

//c
console.log('Modulo anterior a sistemas informáticos');
console.log(modulosPrimero.querySelector('li:nth-child(2)'));


//d
console.log('Horas anteriores a sistemas informáticos')
console.log(modulosPrimero.querySelectorAll('li:nth-child(-n + 2)'));

//e
console.log('Con href');
console.log(modulosPrimero.querySelectorAll('a[href]'));

//f
console.log('Sin href');
console.log(modulosPrimero.querySelectorAll('a:not([href])'));

//g
console.log('Contiene mod');
console.log(modulosPrimero.querySelectorAll('a[href*="mod"]'));

//h
console.log('Empiezan por mod');
console.log(modulosPrimero.querySelectorAll('a[href^="mod"]'))

//i
console.log('Termina en .html');
console.log(modulosPrimero.querySelectorAll('a[href$=".html"]'));

//j
console.log('Horas de segundo');
const modulosSegundo = document.querySelectorAll('ul');
console.log(modulosSegundo[1].querySelectorAll('li'));

//k


//h
console.log('Seleccionar modulos impares');
console.log(modulosSegundo[1].querySelectorAll('li:nth-of-type(odd)'));
