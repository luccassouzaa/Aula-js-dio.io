
/*
    3) Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
    Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
    O salário salário a ser transferido é calculado da seguinte maneira: 
    
    valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

    Para calcular o percentual de imposto segue as aliquotas:

        De R$ 0.00 a R$ 1100.00 = 5.00%
        De R$ 1100.01 a R$ 2500.00 = 10.00%
        Maior que R$ 2500.00 = 15.00%

        Exemplo:
            Entrada:
                2000
                250

            Saída:
                2050.00
*/

const { gets, print } = require('./funcao-auxiliar');

let salarioBruto = gets(); 
let beneficio = gets();
print(salarioBruto);
print(beneficio);
let percentual = 0; 

if(salarioBruto <=1100){
    percentual = 0.05;
} else if (salarioBruto > 1100 && salarioBruto<=2500){
    percentual = 0.1;
} else {
    percentual = 0.15;
}

const porcento = (percentual*salarioBruto);

const salarioTransferido = salarioBruto -  porcento + beneficio;

print(salarioTransferido);


// salarioTransferido = salarioBruto - percentual + beneficio;

