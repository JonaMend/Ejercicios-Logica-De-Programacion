// Solicitar al usuario la temperatura en grados Celsius
let temperaturaCelsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));

// Convertir grados Celsius a grados Fahrenheit
let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

// Convertir grados Celsius a grados Kelvin
let temperaturaKelvin = temperaturaCelsius + 273.15;

// Mostrar las conversiones por consola
console.log("Temperatura en grados Fahrenheit: " + temperaturaFahrenheit + " °F");
console.log("Temperatura en grados Kelvin: " + temperaturaKelvin + " K");