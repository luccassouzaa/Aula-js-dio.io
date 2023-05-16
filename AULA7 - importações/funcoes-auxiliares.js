const entradas = [10, 5, 50, 10, 98, 23, 33, 44, 99, 100, 7];
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