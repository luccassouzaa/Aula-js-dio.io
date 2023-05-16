
const {entradas, gets, print} = require('./funcao-auxiliar2');

const n = entradas.length;

// const n = gets(); - Definir o primeiro indice será o tamanho da array

let maiorNumeroPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < n; i++) {
    const numero = gets();
    if (numero % 2 === 0) {
        if (maiorNumeroPar === null || numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        }
    } else {
        if (menorNumeroImpar === 0) {
            menorNumeroImpar = numero;
        } else if ( menorNumeroImpar === null || numero < menorNumeroImpar){
            menorNumeroImpar = numero;
        }
    }
}

print('Maior numero par: ' + maiorNumeroPar);
print('Menor numero impar: ' + menorNumeroImpar);

// condição para organizar se o numero é par ou impar