export function carousel(i, carousel) {
    const $slides = carousel.querySelectorAll(".proyecto"),
        $dots = carousel.querySelectorAll(".dot_proyecto");
    // Elimina la clase 'active' de la imagen y el punto actuales
    const currentActiveImage = carousel.querySelector('.proyecto.active');
    const currentActiveDot = carousel.querySelector('.dot_proyecto.active');
    if (currentActiveImage) currentActiveImage.classList.remove('active');
    if (currentActiveDot) currentActiveDot.classList.remove('active');

    // Agrega la clase 'active' a la imagen y el punto correspondientes al índice
    $slides[i].classList.add('active');
    $dots[i].classList.add('active');
}