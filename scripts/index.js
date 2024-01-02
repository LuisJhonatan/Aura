import { header } from "./header.js"
import { navBar } from "./navBar.js";
import { carousel } from "./carousel.js";
import { changeSlide } from "./direction.js";
import { proyecto } from './proyectos.js'; 
// import { contactForm } from "./contactform.js";


const $header = document.getElementById("header");

document.addEventListener("DOMContentLoaded", async () => {
    $header.outerHTML = await header();
    document.querySelector(".carousel") && carousel(0);
    document.querySelector(".carousel") && tamWindows(document.querySelector(".carousel"));
    document.querySelector(".contactenos-container") && tamWindows(document.querySelector(".contactenos-container"));
    document.querySelector(".contenido-proyectos") && tamWindows(document.querySelector(".contenido-proyectos"));
    // contactForm();
})

document.addEventListener("click", (e) => {
    if(e.target.matches(".btn-nav *")){
        navBar();
    }
    if(e.target.matches(".carousel-dot")){
        let i = parseInt(e.target.dataset.item);
        carousel(i);
    }
    if(e.target.matches(".proyecto div h2")){
        const $modal = document.querySelectorAll(".modal");
        let arrayModal = Array.from($modal);
        let elementoCategory2 = arrayModal.find(function(element) {
            return element.id.charAt(element.id.length - 1) === e.target.id.charAt(e.target.id.length - 1);
        });
        elementoCategory2.classList.toggle("active");
    }
    if (e.target.matches(".carousel-arrow-left *")){
        const $proyectos = document.querySelector(".contenido-proyectos"),
        $proyecto = $proyectos.querySelector(".proyecto.active"),
        $category = $proyecto.querySelector("h2");
        console.log($category.id.charAt($category.id.length-1))
        changeSlide("left", $category.id.charAt($category.id.length-1));
    }
    if(e.target.matches(".carousel-arrow-right *")){
        const $proyectos = document.querySelector(".contenido-proyectos"),
        $proyecto = $proyectos.querySelector(".proyecto.active"),
        $category = $proyecto.querySelector("h2");
        console.log($category.id.charAt($category.id.length-1))
        changeSlide("right", $category.id.charAt($category.id.length-1));
    }
    if(e.target.matches(".btn-close *")){
        const $modal = document.querySelector(".modal.active");
        $modal.classList.toggle("active");
    }
    if(e.target.matches(".btn-proyecto")){
        let i = parseInt(e.target.dataset.item);
        proyecto(i);
    }
});

function tamWindows($content) {
    $content.style.height = `${window.innerHeight}px`;
}