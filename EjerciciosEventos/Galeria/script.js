const cuadrados = document.querySelector('#gallery');

cuadrados.addEventListener('click', (e) => {
    if(e.target.className != 'gallery') {
        e.target.classList.toggle('clickado');
    }
})

cuadrados.addEventListener('mouseover', (e) => {
    if(e.target.className != 'gallery') {
        e.target.classList.add('ratonDentro');
    }
});

cuadrados.addEventListener('mouseout', (e) => e.target.classList.remove('ratonDentro'));

