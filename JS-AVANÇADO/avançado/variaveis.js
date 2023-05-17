//javascript é fracamente tipada e caseSensitive e os tipos tentarão ser convertidos caso alguma operação seja realizada.

var var1 = 10;
var var2 = 'string';

console.log(var1 - var2)

// - nao tem influencia nas operações de string, então ele sempre ira transformar a string em numero
// + tem influencia nas operações de string, entao ele sempre ira transformar o numero em string
// caso a string nao seja um numero e tentar realizar a operação com subtração, ele retornará : NaN (Not a Number)

// ele deverá ler os codigos e identificar que nao da para somar, entao ira transformar os valores em string e ira concatenar elas.