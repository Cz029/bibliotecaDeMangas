let biblioteca = {};

// Función para agregar un libro a la biblioteca, que verifica si el libro esta o no en la biblioteca. 
// Si el libro esta lo suma y si no esta lo agrega
function agregarLibro(titulo, cantidad) {
    if (biblioteca[titulo]) {
        biblioteca[titulo] += cantidad;
    } else {
        biblioteca[titulo] = cantidad;
    }
}

// Función para que el usuario pueda ingresar su libro, donde le pedira título y cantidad.
// Si en en el momento de agregar cantidad no ingresa numero, da error de carga.
function ingresarLibro() {
    let titulo = prompt("Ingrese el título del libro:");
    let cantidad = parseInt(prompt("Ingrese la cantidad de libros:"));

    if (!isNaN(cantidad)) {
        agregarLibro(titulo, cantidad);
        console.log(`Libro "${titulo}"(${cantidad} unidades) agregado correctamente.`);
    } else {
        console.log("La cantidad ingresada no es válida.");
    }
}

// Función para mostrar la información de la biblioteca en la consola
function mostrarBiblioteca() {
    console.log("Biblioteca:");
    let totalLibros = 0;

    for (const libro in biblioteca) {
        console.log(`${libro}: ${biblioteca[libro]} unidades`);
        totalLibros += biblioteca[libro];
    }

    console.log(`Total de libros en la biblioteca: ${totalLibros} unidades`);
}

// Ciclo para permitir que el usuario agregue la cantidad de libros q desea.
// Teniendo un break en el caso de que no quiera agregar mas, y un error si no contesta si o no.
while (true) {
    let agregarMas = prompt("¿Desea agregar un libro? (Sí/No)").toLowerCase();

    if (agregarMas === "si") {
        ingresarLibro();
    } else if (agregarMas === "no") {
        break;
    } else {
        console.log("Respuesta no válida. Por favor, responda con 'Sí' o 'No'.");
    }
}

// Muestra la biblioteca final
mostrarBiblioteca();