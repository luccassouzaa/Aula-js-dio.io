const entradas = [1, 9, 12, 4, 3, 88, 9, 2, 3, 4, 108, 223, 222, 444];

let i = 0;

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

function print(text){
    console.log(text);
}

module.exports = {gets, print, entradas};