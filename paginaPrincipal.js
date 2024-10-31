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

//Carrousel de tragaperras
const grande = document.querySelector('.slots')
const punto = document.querySelectorAll('.punto')

//Recorrer todos los puntos
punto.forEach( (cadaPunto , i) => {
    //Asignamos CLICK a cada punto
    punto[i].addEventListener('click', ()=>{
        //Guardar la posicion de ese punto
        let posicion = i
        //Calculamos el espacio que debe desplazarse
        let operacion = posicion * -100

        // Movemos el grande
        grande.style.transform = `translateX(${operacion}%)`


        //Recorremos todos los puntos
        punto.forEach( ( cadaPunto , i)=>{
            //Quitamos la clase
            punto[i].classList.remove('activo')
        })
        //Añadimos la clase
        punto[i].classList.add('activo')
    })
})