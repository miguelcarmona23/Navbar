const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

function fixNav() {
    if (window.scrollY >= topOfNav);
}

window.addEventListener('scroll', fixNav);