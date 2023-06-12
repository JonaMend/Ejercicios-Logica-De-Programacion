// Solicitar datos al usuario
let numero1 = prompt("Ingresa el primer número:");
let numero2 = prompt("Ingresa el segundo número:");
let numero3 = prompt("Ingresa el tercer número:");

// Convertir los datos a números enteros
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);
numero3 = parseInt(numero3);

// Verificar si los números son iguales
if (numero1 === numero2 && numero2 === numero3) {
  console.log("Los números son iguales.");
  // Aquí puedes usar document.getElementById() para mostrar el mensaje en el DOM
} else {
  // Ordenar de mayor a menor
  let numerosOrdenadosDesc = [numero1, numero2, numero3];
  numerosOrdenadosDesc.sort(function(a, b) {
    return b - a;
  });
  console.log("Ordenado de mayor a menor:", numerosOrdenadosDesc);
  // Aquí puedes usar document.getElementById() para mostrar los números en el DOM

  // Ordenar de menor a mayor
  let numerosOrdenadosAsc = [numero1, numero2, numero3];
  numerosOrdenadosAsc.sort(function(a, b) {
    return a - b;
  });
  console.log("Ordenado de menor a mayor:", numerosOrdenadosAsc);
  // Aquí puedes usar document.getElementById() para mostrar los números en el DOM
}