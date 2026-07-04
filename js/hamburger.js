/* ===== js / hamburger.js ===== */
function initHamburger() {
    const hamburger = document.querySelector('.js-hamburger');
    const menu = document.querySelector('.js-menu');
    const mask = document.querySelector('.js-mask');
    const menuLinks = document.querySelectorAll('.js-nav-item');

    if (!hamburger || !menu || !mask) return;

    const closeMenu = () => {
        hamburger.classList.remove('is-open');
        menu.classList.remove('is-open');
        mask.classList.remove('is-open');
        document.body.classList.remove('is-menu-open');
        hamburger.setAttribute('aria-expanded', 'false');
    };

    hamburger.addEventListener('click', () => {
        const isOpen = hamburger.classList.toggle('is-open');

        menu.classList.toggle('is-open', isOpen);
        mask.classList.toggle('is-open', isOpen);
        document.body.classList.toggle('is-menu-open', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    mask.addEventListener('click', closeMenu);

    menuLinks.forEach((link) => {
        link.addEventListener('click', closeMenu);
    });
}