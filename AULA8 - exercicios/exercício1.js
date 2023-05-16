/*
    1 - faça um programa que recebe a media de um aluno;
    caso a media seja <5 imprima reprovado
    caso a media seja >= e < 7 imprima recuperação
    caso a media serja >= 7 imprima aprovado

    exemplo : 
    entrada: 5.5
    saida: recuperação
*/

const { gets, print } = require('./funcao-auxiliar1');

const media = gets();

if (media < 5) {
    print('Reprovado!');
} else if (media >= 5 && media < 7) {
    print("Recuperação");
} else {
    print("Aprovado!")
}