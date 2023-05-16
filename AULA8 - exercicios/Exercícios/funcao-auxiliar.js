const entradas = [2600, 500];
let i = 0;

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

function print(text){
    console.log(text);
}

module.exports = {gets, print}; // definindo um objeto como metodo para ser exportado