/*
FAÇA UM PROGRAMA QUE RETORNARÁ O VALOR GASTO DE COMBUSTIVEL

1 - PREÇO COMBUSTIVEL;
2 - GASTO MEDIO DE COMBUSTIVEL DO CARRO POR KM
3 - DISTANCIA EM KM DA VIAGEM
*/
const precoCombustivel = 5.79, kmMedioPorLitro = 12, distanciaKm = 1580;

const litrosConsumido = distanciaKm / kmMedioPorLitro;

const valorGasto = litrosConsumido * precoCombustivel;

console.log(valorGasto);
console.log(valorGasto.toFixed(2));


/*
    Arredondamento de valor

    console.log(valorGasto.toFixed(2));

    essa função irá retornar uma string com o valor ja formatado 

*/



// 10km por litro
// 1 litro = 5.79
// 10km = 5.79
// 100km = x

// 10/5.79 = 100/x
//1,72 = 100/x
//1,72x = 100km
// x = 100 / 1.72
// x = 58 +-

