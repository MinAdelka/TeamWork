window.addEventListener('DOMContentLoaded', () => {
    const   toggleMenu = (item) => {
        item.classList.toggle('hide');
    };
    const   logo = document.querySelector('.logo'),
            menu = document.querySelector('.menu__list');

    toggleMenu(menu);
    logo.addEventListener('click', () => toggleMenu(menu));
});