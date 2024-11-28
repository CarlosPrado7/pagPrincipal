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

//-------------------------------------------SALDO DEL JUEGO--------------------------------------------------------------------
// --------------------------------------- Variables Globales ---------------------------------------
const saldoDisplay = document.getElementById("saldoPagina");
let saldo = 0;

//----------------------------------------Modal Retirar Dinero----------------------------------------
const modalRetirar = document.getElementById("modalRetirar");
const btnRetirar = document.getElementById("retirarDineroSaldo");
const closeModalRetirar = document.getElementById("closeModalRetirar");
const retirarDineroBtn = document.getElementById("retirarDinero");
const inputDineroRetirar = document.getElementById("inputRetirar");

// --------------------------------------- Modal Añadir Dinero ---------------------------------------
const modalAniadir = document.getElementById("modalAniadir");
const btnAniadir = document.getElementById("sumarDinero");
const closeModalAniadir = document.getElementById("closeModalAniadir");
const guardarDineroBtn = document.getElementById("guardarDinero");
const inputDinero = document.getElementById("inputDinero");

// --------------------------------------- Funciones ---------------------------------------

// Cargar saldo inicial de localStorage
function cargarSaldo() {
    const saldoGuardado = parseFloat(localStorage.getItem("saldo"));
    if (!isNaN(saldoGuardado)) {
        saldo = saldoGuardado;
        actualizarSaldoDisplay();
    }
}

// Actualizar el saldo en la página
function actualizarSaldoDisplay() {
    saldoDisplay.innerHTML = `<p>Tu Saldo: $${saldo.toFixed(2)}</p>`;
}

// --------------------------------------- Eventos ---------------------------------------

// Mostrar modal de añadir dinero al hacer clic en el icono
btnAniadir.addEventListener("click", () => {
    modalAniadir.style.display = "flex";
});

btnRetirar.addEventListener("click", ()=>{
    modalRetirar.style.display = "flex";
});

// Guardar dinero añadido
guardarDineroBtn.addEventListener("click", () => {
    const dinero = parseFloat(inputDinero.value);
    if (!isNaN(dinero) && dinero > 0) {
        saldo += dinero;
        localStorage.setItem("saldo", saldo);
        actualizarSaldoDisplay();
        modalAniadir.style.display = "none"; 
        inputDinero.value = ""; // Limpia el input
    } 
});

retirarDineroBtn.addEventListener("click", () => {
    const dinero = parseFloat(inputDineroRetirar.value);
    if(!isNaN(dinero) && dinero > 0 && dinero <= saldo) {
        saldo -= dinero;
        localStorage.setItem("saldo", saldo);
        actualizarSaldoDisplay();
        modalRetirar.style.display = "none";
        inputDineroRetirar.value = ""; //Limpia el input
    }
});

// Cerrar modal de añadir dinero
closeModalAniadir.addEventListener("click", () => {
    modalAniadir.style.display = "none";
});

closeModalRetirar.addEventListener("click", () => {
    modalRetirar.style.display = "none";
});

// Cerrar modal si se hace clic fuera de la caja
window.addEventListener("click", (event) => {
    if (event.target === modalAniadir) {
        modalAniadir.style.display = "none";
    }
});

window.addEventListener("click", (event) => {
    if(event.target === modalRetirar){
        modalRetirar.style.display = "none";
    }
});

// Cargar el saldo al iniciar
window.addEventListener("load", cargarSaldo);





