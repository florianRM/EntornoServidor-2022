const nombre = document.querySelector('[name = "firstname"]');
nombre.value = 'Florian';

const favDay = document.querySelector('[name = "fav_day"]');
favDay.querySelectorAll('option')[2].setAttribute('selected', '');

const labelFirstName = document.getElementsByName('first_name_label');
labelFirstName[0].textContent = 'Tu nombre';

const favDayNameValue = document.getElementsByName('fav_day');
console.log(favDayNameValue[0].getAttribute('name'));

const sex = document.getElementsByName('sex');
sex[0].removeAttribute('checked');
sex[1].setAttribute('checked', '');

const form = document.querySelectorAll('form');
form[0].setAttribute('name', 'personal_info');
form[1].setAttribute('name', 'job_info');

const h1Personal = document.createElement('h1');
const h1Trabajo = document.createElement('h1');
h1Personal.appendChild(document.createTextNode('Entrevista personal'));
form[0].appendChild(h1Personal);
h1Trabajo.appendChild(document.createTextNode('Entrevista de trabajo'));
form[1].appendChild(h1Trabajo);

/* Por hacer
const br = document.createElement('br');
form[0].childNodes[14].textContent = 'Gender';
*/

form.forEach((value, key) => form[key].classList.add('form'));



