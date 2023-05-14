/*

function sayName(name) {
    return "Seu nome é " + name;
}

function ehMaiorDeIdade(idade){
    if (idade<18){
        console.log(sayName('Vitor') + " e ele é Menor de idade");
    } else {
        console.log(sayName('Vitor') + " e ele é Maior de idade");
    }
}

ehMaiorDeIdade(18);

*/

// --------------------------------------------------------------------------------------------------------------------------------- //

/*
    3 - Elabora um algoritmo que calcule o que dever ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado

    condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem jutos;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoEtiqueta = 100;
const formaDePagamento = 2;

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * desconto / 100));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));

}

function modoPag(formaDePagamento) {
    if (formaDePagamento === 1) {
        console.log(aplicarDesconto(precoEtiqueta, 10));
    } else if (formaDePagamento === 2) {
        console.log(aplicarDesconto(precoEtiqueta, 15));
    } else if (formaDePagamento === 3) {
        console.log(precoEtiqueta);
    } else if (formaDePagamento === 4) {
        console.log(aplicarJuros(precoEtiqueta, 10));
    }
}

modoPag(3);