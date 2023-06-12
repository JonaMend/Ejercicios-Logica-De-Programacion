// Solicitar al usuario un número
let numero = parseInt(prompt("Ingresa un número:"));

// Calcular el factorial del número
let factorial = 1;
for (let i = 2; i <= numero; i++) {
  factorial *= i;
}

// Mostrar el factorial por consola
console.log("El factorial de " + numero + " es: " + factorial);
