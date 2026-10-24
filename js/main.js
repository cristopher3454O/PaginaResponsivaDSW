document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btn-menu');
    const menuLista = document.getElementById('menu-lista');

    btnMenu.addEventListener('click', () => {
        menuLista.classList.toggle('activo');
    });
});