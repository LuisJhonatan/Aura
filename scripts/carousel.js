let intervalId; // Guarda el ID del intervalo aquí
export function carousel(i) {
    const $carousel = document.querySelector(".carousel"),
        $slides = $carousel.querySelectorAll(".carousel-image"),
        $dots = $carousel.querySelectorAll(".carousel-dot");
    // Elimina la clase 'active' de la imagen y el punto actuales
    const currentActiveImage = $carousel.querySelector('.carousel-image.active');
    const currentActiveDot = $carousel.querySelector('.carousel-dot.active');
    if (currentActiveImage) currentActiveImage.classList.remove('active');
    if (currentActiveDot) currentActiveDot.classList.remove('active');

    // Agrega la clase 'active' a la imagen y el punto correspondientes al índice
    $slides[i].classList.add('active');
    $dots[i].classList.add('active');

    // Detén el intervalo anterior
    if (intervalId) clearInterval(intervalId);

    intervalId = setInterval(() => {
        $slides[i].classList.remove('active');
        $dots[i].classList.remove('active');
        i = (i + 1) % $slides.length;
        $slides[i].classList.add('active');
        $dots[i].classList.add('active');
    }, 3000);

}