export function navBar(){
    const $btn = document.querySelector(".btn-nav");
    const $navBar = document.querySelector(".nav-bar");

    $btn.firstElementChild.classList.toggle("none");
    $btn.lastElementChild.classList.toggle("none");
    $navBar.classList.toggle('is-active');
}