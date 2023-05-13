/*
    1 - faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    media = (nota1 + nota2 + nota3)/3

    classificação
    - < 5 = reprovação
    - > 5 && < 7 = recuperação
    - > 7 = aprovação
*/

const nota1 = 6;
const nota2 = 7;
const nota3 = 10;

const media = (nota1 + nota2 + nota3) / 3

console.log("Nota:",media.toFixed(2));

if (nota1 > 10 || nota2 > 10 || nota3 > 10 || nota1 < 0 || nota2 < 0 || nota3 < 0) {
    console.log("Erro, nota invalida");
}
else if (media < 5) {
    console.log("Reprovado!");
}
else if (media >= 5 && media <= 7) {
    console.log("Recuperação!");
} 
else {
    console.log("Aprovado!");
}