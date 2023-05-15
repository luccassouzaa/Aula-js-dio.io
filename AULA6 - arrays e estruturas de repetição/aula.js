

/*
const alunos = ['Luccas', 'Ana', 'Luis'];

alunos.push('Andre'); // adicionar na array dinamicamente
alunos[4] = 'Vitor'; // adicionar diretamente na posição, OU, sobrepor na posição desejada.
alunos.pop(); // apagar o ultimo index
alunos.shift(); // apagar o primeiro index

console.log(alunos);

*/

const notas = [];

notas.push(5);
notas.push(10);
notas.push(10);

let soma = 0;

for (let i = 0; i < notas.length; i++){
    const nota = notas[i];
    soma = soma + nota;
}

console.log((soma/notas.length).toFixed(2));