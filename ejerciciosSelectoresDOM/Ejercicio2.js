const enlace = document.querySelector('#enlace');
const textoAdicional = document.querySelector('#adicional');

enlace.addEventListener('click', () => {
    textoAdicional.classList.replace('oculto', 'visible');
    enlace.classList.add('oculto');
}) 