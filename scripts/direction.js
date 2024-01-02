import { carousel } from './carousel2.js';

export function changeSlide(direction, category) {
    const  $section = document.getElementById(`categoria-${category}`),
    $carousel = $section.querySelector(".slider"),
    $dots = $carousel.querySelectorAll(".dot_proyecto");
    console.log($section)
    const currentActiveDot = $carousel.querySelector('.dot_proyecto.active');

    let i = parseInt(currentActiveDot.dataset.item);

    // Comprueba si 'i' es un número
    if (isNaN(i)) {
        console.error(`Invalid slide index: ${i}`);
        return;
    }

    if (direction === 'left') {
        i = (i - 1 + $dots.length) % $dots.length;
    } else if (direction === 'right') {
        i = (i + 1) % $dots.length;
    }

    carousel(i, $carousel);
}
