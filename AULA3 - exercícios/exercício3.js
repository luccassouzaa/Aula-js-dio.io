/*
    3 - Elabora um algoritmo que calcule o que dever ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado

    condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem jutos;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const produto = 'Camiseta';
const precoNormalDeEtiqueta = 50.0;
const metodoPagamento = 'Acima de duas vezes';

/*
preço = 50

se debito = 45
se pix/dinheiro = 42,5
se cartão 2x = 50
se +2x = 55
*/

if (metodoPagamento === "Débito"){

    const valorDesconto = precoNormalDeEtiqueta * 0.10;
    const valorPagar = precoNormalDeEtiqueta - valorDesconto;
    console.log(valorPagar);

} else if(metodoPagamento === "Dinheiro" || metodoPagamento === "PIX"){
    
    const valorDesconto = precoNormalDeEtiqueta * 0.15;
    const valorPagar = precoNormalDeEtiqueta - valorDesconto;
    console.log(valorPagar);

} else if(metodoPagamento === "Duas vezes"){

    console.log(precoNormalDeEtiqueta);

} else if(metodoPagamento === "Acima de duas vezes"){

    const valorJuros = precoNormalDeEtiqueta * 0.10;
    const valorPagar = valorJuros + precoNormalDeEtiqueta;
    console.log(valorPagar);

}