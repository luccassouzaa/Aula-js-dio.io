/*
    2 - IMC

    formula IMC:
    IMC = peso/(altura * altura)

    faça um algoritmo que dado o peso e a aultura de um adulto mostre a sua condição de acordo com a tabela abaixo

    TABELA:
     - < 18.5 = abaixo do peso
     - >= 18.5 && <= 25 = peso normal
     - > 25 && <= 30 = acima do peso
     - > 30 && <= 40 = obeso
     - > 40 = obesidade grave
*/

const peso = 56;
const altura = 1.72;

const imc = peso / (altura*altura);

console.log(imc.toFixed(2))

if (imc == 0){
    console.log("Erro, valor inválido!");
} else if (imc < 18.5){
    console.log("Abaixo do peso!");
} else if (imc >= 18.5 && imc < 25){
    console.log("Peso normal");
} else if (imc >= 25 && imc < 30){
    console.log("Acima do peso");
} else if (imc >= 30 && imc < 40){
    console.log("Obeso");
} else{
    console.log("Obesidade grave");
}