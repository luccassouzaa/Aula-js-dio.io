const numero = 0;

const numeroDivisivel = (numero % 5) === 0; // condicional na mesma line

/*

= - atribuição (Atribuir um valor para a variavel)
== - igualdade/comparação (Não compara o tipo do resultado (String, Boolean, Int etc...))
=== - igualdade/comparação (Compara o tipo do resultado (String, Boolean, Int etc...))

*/

if(numero == 0){
    console.log("Numero inválido!")
}
else if(numeroDivisivel){
    console.log("Sim");
}
else{
    console.log("Não");
}

