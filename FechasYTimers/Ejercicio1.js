const fecha = document.querySelector('input');
const parrafo = document.querySelector('p');
const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
const mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

fecha.addEventListener('change', () => {
    let objetoFecha = new Date(fecha.value);
    parrafo.textContent = `Hoy es ${dias[objetoFecha.getDay()]}, ${objetoFecha.getDate()} 
            de ${mes[objetoFecha.getMonth()]} 
            de ${objetoFecha.getFullYear()} y son las ${objetoFecha.getHours()}:${objetoFecha.getMinutes()} horas.`
})