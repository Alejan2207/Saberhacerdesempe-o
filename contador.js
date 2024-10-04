const readline = require('readline');

let count = 0;

function displayCounter() {
    console.clear(); // Limpiar la consola para mostrar el nuevo valor
    console.log(`Contador: ${count}`);
}


function increment() {
    count++;
    displayCounter();
}


function decrement() {
    count--;
    displayCounter();
}

function reset() {
    count = 0;
    displayCounter();
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showOptions() {
    console.log("\nOpciones:");
    console.log("1. Incrementar");
    console.log("2. Decrementar");
    console.log("3. Reiniciar");
    console.log("4. Salir");
}


function main() {
    displayCounter();
    showOptions();
    promptUser();
}