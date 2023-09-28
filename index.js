// Ejercicio 1:

function numLeter(p, l) {
  let n = 0;
  for (let i = 0; i < p.length; i++) {
    switch (p[i]) {
      case l:
        n++;
        break;
    }
  }
  return n;
}

console.log(numLeter("amapola", "a"));

// // Ejercicio 2:

function imparReturn(arrN) {
  let impares = [];
  for (let i = 0; i < arrN.length; i++) {
    if (arrN[i] % 2 !== 0) {
      impares.push(arrN[i]);
    }
  }
  return impares;
}

console.log(imparReturn([2, 3, 4, 6, 7, 8, 9]));

// FALTA LOS SIGUIENTES 50 NÚMEROS
