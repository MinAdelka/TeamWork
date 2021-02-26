window.addEventListener('DOMContentLoaded', () => {
    const   toggleMenu = (item) => {
        item.classList.toggle('hide');
    };
    const   logo = document.querySelector('.logo'),
            menu = document.querySelector('.menu__list'),
            descr = document.querySelector('.content__descr'),
            btn = document.querySelector('.login__btn'),
            username = document.querySelector('#username'),
            password = document.querySelector('#password');
    let     users = JSON.parse(localStorage.getItem('users'));

    if (menu != null && logo != null) {
        toggleMenu(menu);
        logo.addEventListener('click', () => toggleMenu(menu));
        if (users != null) {
            users.forEach((item) => {
                descr.innerHTML += `
                    <span>${item}</span>
                `;
            });
        }
    }
    if (btn != null) {
        btn.addEventListener('click', () => {
            if (users == null) {
                users = [];
            }
            users.push(username.value);
            localStorage.setItem('users', JSON.stringify(users));
        });
    }
});