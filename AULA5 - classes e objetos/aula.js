class Pessoa{
    nome;
    idade;

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const luccas = new Pessoa();
luccas.nome = 'Luccas Andre';
luccas.idade = '19';

const ana = new Pessoa();
ana.nome = 'Ana';
ana.idade = '17';

console.log(luccas);
console.log(ana);

luccas.descrever();
ana.descrever();