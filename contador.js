const readline = require('readline');

// Inicializar el contador
let count = 0;

// Función para mostrar el valor actual del contador
function displayCounter() {
    console.clear(); // Limpiar la consola para mostrar el nuevo valor
    console.log(`Contador: ${count}`);
}

// Función para incrementar el contador
function increment() {
    count++;
    displayCounter();
}

// Función para decrementar el contador
function decrement() {
    count--;
    displayCounter();
}

// Función para reiniciar el contador
function reset() {
    count = 0;
    displayCounter();
}

// Crear una interfaz de entrada/salida
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para mostrar las opciones al usuario
function showOptions() {
    console.log("\nOpciones:");
    console.log("1. Incrementar");
    console.log("2. Decrementar");
    console.log("3. Reiniciar");
    console.log("4. Salir");
}

// Función principal que maneja la interacción con el usuario
function main() {
    displayCounter();
    showOptions();
    promptUser();
}

// Función para pedir al usuario una opción
function promptUser() {
    rl.question("Selecciona una opción (1-4): ", (choice) => {
        switch (choice) {
            case "1":
                increment();
                promptUser();
                break;
            case "2":
                decrement();
                promptUser();
                break;
            case "3":
                reset();
                promptUser();
                break;
            case "4":
                console.log("¡Gracias por usar el contador!");
                rl.close(); // Cerrar la interfaz de lectura
                break;
            default:
                console.log("Opción no válida. Intenta de nuevo.");
                promptUser();
                break;
        }
    });
}

// Ejecutar la función principal
main();
