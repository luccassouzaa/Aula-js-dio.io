/*
    Var: Vaza escopo por conta do hoisting (Içamento), exceto function.
    Let: Não vaz escopo e funciona igual um var.
    Const: Não pode ter seu valor reatribuido dentro do codigo.
*/

if (true){
    var var1 = 10;
}
if (true){
    let var2 = 10;
}
if (true){
    const var3 = 10;
}

console.log(var1);

console.log(var2);

console.log(var3);