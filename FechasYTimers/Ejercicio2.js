const fecha = document.querySelector('input');
const texto = document.querySelector('p');
const titulo = document.querySelector('h3');
const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
const mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

fecha.addEventListener('change', () => {
    const objetoFecha = fecha.valueAsDate;
    const annio = objetoFecha.getFullYear();
    const numeroMes = objetoFecha.getMonth()
    const diasMes = new Date(annio ,numeroMes + 1, 0).getDate();

    titulo.textContent = `${mes[numeroMes]} - ${annio}`;
    for(let i=1; i <= diasMes; i++) {
        let diaSemana = new Date(annio, numeroMes, i).getDay();
        if(i === diasMes) {
            texto.textContent += `${i}(${dias[diaSemana]})`; 
        } else {
            texto.textContent += `${i}(${dias[diaSemana]}), `; 
        }
    }
})