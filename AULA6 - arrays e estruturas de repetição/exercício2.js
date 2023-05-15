/*
    2 - Crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada numero primo encontrado.
*/

const listaNumber = [1,2,3,4,5,6,7,8,9,10];

for (i=0; i < listaNumber.length;i++){

    const numero = listaNumber[i];
    if (numero % 2 === 0){
        console.log(numero);
    } 
}