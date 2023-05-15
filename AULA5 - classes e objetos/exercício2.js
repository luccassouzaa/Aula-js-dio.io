/*
    2 - Crie uma classe para representar pessoas
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura*altura));
    Instancia uma pessoa chamada José que tenha 70kg de peso de 1,75 de altura e peça a jose para dizer os valores de seu IMC
*/

class pessoas {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarImc(){
        const imc = this.calcularImc();
        
        if (imc == 0){
            return "Erro, valor inválido!";
        } else if (imc < 18.5){
            return "Abaixo do peso!";
        } else if (imc >= 18.5 && imc < 25){
            return "Peso normal";
        } else if (imc >= 25 && imc < 30){
            return "Acima do peso";
        } else if (imc >= 30 && imc < 40){
            return "Obeso";
        } else{
            return "Obesidade grave";
        }
        
    }
}

const jose = new pessoas('José', 73, 1.75);
console.log(`${jose.nome} esta: ${jose.classificarImc()} `);

const luccas = new pessoas('Luccas', 65, 1.74);
console.log(console.log(`${luccas.nome} esta: ${luccas.classificarImc()} `));