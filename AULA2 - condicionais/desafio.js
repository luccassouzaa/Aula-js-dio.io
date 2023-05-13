/*
Faça um programa para calcular o valor de uma viagem.

você receberá 5 variaveis, sendo elas:

1 Preço Etanol
2 Preço Gasolina
3 O tipo de combustivel que será seu carro
4 Gasto medio de combustivel do carro por km
5 distancia em km da viagem;

imprima no console o valor que sera gasto para realizar a viagem

*/

// 1 = Etanol, 2 = Gasolina

const etanol = 5.00, gasolina = 6.00, kmPorLitro = 10, distanciaKm = 100, tipoCombustivel = 'sca';


const litroConsumido = distanciaKm / kmPorLitro;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litroConsumido * etanol;

    console.log("Valor gasto usando etanol: ", valorGasto);
} else if (tipoCombustivel === 'Gasolina') {
    const valorGasto = litroConsumido * gasolina;

    console.log("Valor gasto usando gasolina: ", valorGasto);
} else {
    console.log("Valor invalido");
}