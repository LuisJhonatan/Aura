export function proyecto(i) {
    const $proyecto = document.querySelector(".button_category"),
        $button = $proyecto.querySelectorAll(".btn-proyecto"),
        $proyectos = document.querySelectorAll(".proyecto");
    // Elimina la clase 'active' del botón y del proyecto actualmente activos
    const currentActiveButton = $proyecto.querySelector('.btn-proyecto.active');
    const currentActiveProyecto = document.querySelector('.proyecto.active');
    if (currentActiveButton) currentActiveButton.classList.remove('active');
    if (currentActiveProyecto) currentActiveProyecto.classList.remove('active');
    // Agrega la clase 'active' al botón y al proyecto correspondientes al índice
    $button[i].classList.add('active');
    $proyectos[i].classList.add('active');
}