/*
    1 - crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustivel por kilometro rodado.
    crie um metodo que dado a quantidade de quilometros e o preço da combustivel e nos de o valor gasto em reais para realizar este percurso.
*/

class carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    } 

    calcularGastoDePercurso(distancia, precoCombustivel){
        return (this.gastoMedioPorKm * distancia) * precoCombustivel;
    }

}

const uno = new carro('Fiat', 'Branco', 1/12);
console.log(uno.calcularGastoDePercurso(70, 5.00));

const palio = new carro('Fiat', 'Cinza', 1/10);
console.log(palio.calcularGastoDePercurso(70, 5.00));

// Poderia criar o carro que eu quiser sem perder muito tempo e sem muitas linhas de codigo.