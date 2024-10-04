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