const tabla = document.querySelector('table');
const fila = document.querySelector('#fila');
const columna = document.querySelector('#columna');
const boton = document.querySelector('button');

//Genera la tabla de 10x10
for(let i=0; i < 2; i++) {
    const nuevaFila = document.createElement('tr');
    for(let j=0; j < 2; j++) {
        nuevaFila.appendChild(document.createElement('td'));
    }
    tabla.appendChild(nuevaFila);
}

function reiniciarTabla() {
    const columnasPintadas = tabla.querySelectorAll('td');
    let contador = 0;
    if(contador != columnasPintadas.length-1) {
        columnasPintadas.forEach((value) => {
            if(value.style.background === 'red') {
                contador ++;
            }
        })
    } 
    if(contador === columnasPintadas.length) {
        alert('¿Quiere reiniciar la tabla?')
        location.reload();
    }
}

boton.addEventListener('click', () => {
    const numFila = fila.value;
    const numColumna = columna.value;
    const posicionColorear = document.querySelectorAll('tr')[numFila - 1].querySelectorAll('td')[numColumna - 1];

    if((numFila < 1 || numFila > 10) || (numColumna < 1 && numColumna > 10)) {
        console.log('Los parámetros introducidos no son correctos');
    } else if(posicionColorear.style.background === 'red') {
        console.log('Este cuadrado ya esta pintado');
    } else {
        posicionColorear.style.background = 'red';
    }
    fila.value = '';
    columna.value = '';
    setTimeout(() => {
        reiniciarTabla();
    }, 2000)
})
