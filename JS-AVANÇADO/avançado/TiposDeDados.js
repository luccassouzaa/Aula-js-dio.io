/*
    Tipos de dados
        1 - boolean = true e false
        2 - null = ausensia de valor
        3 - undefined = ausencia de definição
        4 - number = numero
        5 - string = texto
        6 - symbol = simbolo
*/

//object

let x = 10;
x = 'teste'; // flexibilidade de uma variavel nao ficar presa a um unico tipo

console.log(10 + '10')
console.log(10 - '10');
console.log(10 - 'texto')
console.log('------------------------')
console.log(10 == '10') //nao equipara os tipos, apenas o conteudo
console.log(10 === '10') //considerar o tipo, exemplo: 10 em number e 10 em string
console.log('------------------------')

// Boolean


console.log(!!-1) // !! está comparando se a string tem valor, e nao se é true or false

