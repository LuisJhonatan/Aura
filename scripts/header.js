export  function header() {
    const d = document,
    $header = d.getElementById("header");
    let content = "";

    content = `
        <header class=header>
        <section class="container">
            <div class="logo">
                <a href="inicio.html">
                    <img class="img-logo" src="../assets/Logo/logo_blanco.avif" alt="Portada">
                </a>
            </div>
            <button class="btn-nav">
                <img class="img1" src="/assets/Svg/open.svg" alt="Abrir">
                <img class="img2 none" src="/assets/Svg/close.svg" alt="Cerrar">
            </button>
            <nav class="nav-bar">
                <a href="inicio.html">Inicio</a>
                <a href="nosotros.html">Nosotros</a>
                <a href="proyectos.html">Proyectos</a>
                <a href="contactenos.html">Contáctenos</a>
                <div class="line">
                    <a href="https://www.facebook.com/people/AURA-Dise%C3%B1o-Interiores/100090153188356/" target="_blank"><img src="../assets/Svg/facebook.svg" alt="Facebook"></a>
                    <a href="https://www.instagram.com/aura_decointeriores/" target="_blank"><img src="../assets/Svg/instagram.svg" alt="Instagram"></a>
                </div>
            </nav>
        </section>
        </header>
    `;

    return content;
}