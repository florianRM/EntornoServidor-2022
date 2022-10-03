const parrafo = document.querySelector('p');

function cronometro() {
    const fecha = new Date();
    parrafo.textContent = `Hoy es ${fecha.getDate()}-${fecha.getMonth()}-${fecha.getFullYear()} y son las ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
    requestAnimationFrame(cronometro);
}

requestAnimationFrame(cronometro);