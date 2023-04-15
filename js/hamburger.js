function toggleMenu() {
    var menu = document.querySelector('.hamburger-menu');
    var sidebarContainer = document.querySelector('.sidebar');
    var body = document.querySelector('body');
    menu.classList.toggle('open');
    sidebarContainer.classList.toggle('show');
    body.classList.toggle('no-scroll');
}

function toggleMenusecond() {
    var menu = document.querySelector('.hamburger-menu-block');
    var sidebarContainer = document.querySelector('.sidebar');
    var body = document.querySelector('body');
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.left-section-block');
    menu.classList.toggle('open');
    sidebarContainer.classList.toggle('show');
    body.classList.toggle('no-scroll');
    navbar.classList.toggle('transparent');
    logo.classList.toggle('left-section-nonblock');

}