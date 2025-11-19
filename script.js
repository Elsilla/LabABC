// Colores que aparecerán por cada click
const colores = ["green", "blue", "red"];

const headers = document.querySelectorAll("h5");

headers.forEach(header => {
    let index = 0; // cada header tiene su propio contador

    header.addEventListener("click", () => {
        // aplicar el color actual
        header.style.color = colores[index];

        // avanzar al siguiente color
        index = (index + 1) % colores.length;
    });
});

