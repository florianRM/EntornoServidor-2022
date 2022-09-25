//1. Pon tu nombre al atributo value del campo first name
const nombre = document.querySelector('[name = "firstname"]');
nombre.value = 'Florian';

//2. Pon el valor a la pregunta Favorite Day of Week a Monday
const favDay = document.querySelector('[name = "fav_day"]');
favDay.querySelectorAll('option')[2].setAttribute('selected', '');

//3. Cambia la etiqueta de First name a 'Tu nombre'
const labelFirstName = document.getElementsByName('first_name_label');
labelFirstName[0].textContent = 'Tu nombre';

//4. Obtén el valor del atributo 'name' del campo Favorite Day of The Week
const favDayNameValue = document.getElementsByName('fav_day');
console.log(favDayNameValue[0].getAttribute('name'));

//5. Escoge la opción Female de la pregunta de género.
const sex = document.getElementsByName('sex');
sex[0].removeAttribute('checked');
sex[1].setAttribute('checked', '');

//6. Encuentra la primera form del documento y pon el atributo name = personal_info
const form = document.querySelectorAll('form');
form[0].setAttribute('name', 'personal_info');

//7. Encuentra la primera form del documento y pon el atributo name = job_info
form[1].setAttribute('name', 'job_info');

//8. Agrega un título h1 a cada una de las formas que diga 'Entrevista personal', 'Entrevista de trabajo' respectivamente
//Creamos los elementos h1
const h1Personal = document.createElement('h1');
const h1Trabajo = document.createElement('h1');

//Le añadimos el texto al h1 y se lo añadimos al primer form
h1Personal.appendChild(document.createTextNode('Entrevista personal'));
form[0].querySelector('label').before(h1Personal);

//Le añadimos el texto al segundo h1 y se lo añadimos al segundo form
h1Trabajo.appendChild(document.createTextNode('Entrevista de trabajo'));
form[1].before(h1Trabajo);

//9. Agrega un título a la pregunta Male/Female 'Gender'
const inputGenero = form[0].querySelector('input[name="sex"]');
inputGenero.before(document.createTextNode('Gender'), document.createElement('br'));

//10. Agrega una pregunta Email: con un input de tipo texto después de last name
const labelEmail = document.createElement('label');
labelEmail.appendChild(document.createTextNode('Email:'));
let inputEmail = document.createElement('input');
form[0].querySelector('input[name="lastname"]').after(document.createElement('br'), labelEmail, document.createElement('br'), inputEmail);

//11. Agrega la clase form a ambos formularios
form.forEach((value, key) => form[key].classList.add('form'));



