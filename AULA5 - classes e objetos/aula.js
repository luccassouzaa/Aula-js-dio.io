class Pessoa{
    nome;
    idade;
    anoDeNascimento

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }// sempre passará pelo constructor (algo padrão)

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const luccas = new Pessoa('luccas',19);

const ana = new Pessoa('ana', 17);

console.log(luccas)