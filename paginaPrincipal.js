function actualizarReloj() {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');

    const tiempo = `${horas}:${minutos}:${segundos}`;
    document.getElementById('reloj').textContent = tiempo;
}

// Actualiza el reloj cada segundo
setInterval(actualizarReloj, 1000);

// Inicia el reloj
actualizarReloj();

document.addEventListener("DOMContentLoaded", function() {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach((carousel) => {
        const items = carousel.querySelector(".carousel-items");
        const points = carousel.querySelectorAll(".punto");
        let currentIndex = 0;

        points.forEach((point, index) => {
            point.addEventListener("click", () => {
                currentIndex = index;
                updateCarousel();
            });
        });

        function updateCarousel() {
            items.style.transform = `translateX(-${currentIndex * 100}%)`;
            points.forEach((point, idx) => {
                point.classList.toggle("activo", idx === currentIndex);
            });
        }

        updateCarousel();
    });
});
