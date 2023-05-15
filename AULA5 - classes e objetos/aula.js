const pessoa = {
    nome: 'Luccas Andre de Souza Melim',
    idade: 19,
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

pessoa.descrever();