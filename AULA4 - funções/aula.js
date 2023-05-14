/* 
    Funções
*/

function quadrado(valor){
    return valor * valor;
}

console.log(quadrado(10) + quadrado(10));

// ----------------- //

function incrementarjuros(valor, percentualJuros){
    const valorDeAcrecimo = (percentualJuros / 100) * valor;    
    return valor + valorDeAcrecimo;
}

console.log(incrementarjuros(100, 10));
console.log(incrementarjuros(100, 15));
console.log(incrementarjuros(100, 20));


// ----------------- //

