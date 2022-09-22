const h2 = document.querySelectorAll('h2');

h2.forEach((value, key) => h2[key].style.color = 'red');

//2
const price = document.querySelectorAll('.details');
price[1].textContent = '$199.99';

//3
h2.forEach((value, key) => h2[key].textContent = 'Sanlúcar de Barrameda');

//4
const lista = document.querySelector('#vacations');
console.log(lista);

//5
const listaAmerica = document.querySelectorAll('.america');
console.log(listaAmerica);