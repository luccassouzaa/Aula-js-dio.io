const numero = 0;

const isNumeroDivisivel = (numero % 5) === 0; // condicional na mesma line

/*

= - atribuição (Atribuir um valor para a variavel)
== - igualdade/comparação (Não compara o tipo do resultado (String, Boolean, Int etc...))
=== - igualdade/comparação (Compara o tipo do resultado (String, Boolean, Int etc...))

*/

// Caso uma variavel seja booleana, Usar o prefixo "isNomeDaVariavel"
// Caso uma variavel uma pergunta, Usar o prefixo "ehNomeDaVariavel"


if(numero == 0){
    console.log("Numero inválido!")
}
else if(isNumeroDivisivel){
    console.log("Sim");
}
else{
    console.log("Não");
}

