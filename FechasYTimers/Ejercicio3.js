const campos = document.querySelectorAll('input');

campos[0].addEventListener('change', () => {
    const fechaInicio = campos[0].valueAsDate;
    const nuevaFecha = new Date(fechaInicio.getFullYear(), fechaInicio.getMonth(), fechaInicio.getDate());

    campos[1].addEventListener('keyup', (e) => {
        if(e.key != 'Backspace') {
            const diasRetraso = parseInt(campos[1].value);
            nuevaFecha.setDate(fechaInicio.getDate() + diasRetraso);
            console.log(`La fecha del pago es ${nuevaFecha.getDate()}-${nuevaFecha.getMonth()}-${nuevaFecha.getFullYear()}`);
        }
    })
})