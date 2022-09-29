const fechaInicio = document.querySelectorAll('input');

fechaInicio[0].addEventListener('change', () => {
    const fecha = fechaInicio[0].valueAsDate;
    const numeroDias = prompt('Introduzca los dias de retraso')

    const nuevaFecha = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());

    console.log(nuevaFecha.toDateString());
})