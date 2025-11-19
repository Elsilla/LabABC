// Orden de colores
const colores = ["green", "blue", "red"];3

// Seleccionar todos los h5
const titulos = document.querySelectorAll("h5");

// Agregar un índice individual a cada h5
titulos.forEach(h5 => {
    h5.dataset.indice = 0; // empieza en verde

    h5.addEventListener("click", () => {
        // Convertir el data-indice en número
        let index = parseInt(h5.dataset.indice);

        // Aplicar color según el índice
        h5.style.color = colores[index];

        // Actualizar índice al siguiente color
        index = (index + 1) % colores.length;
        h5.dataset.indice = index; // guardar nuevo índice
    });
});

