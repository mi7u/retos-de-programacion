//inicio la lista dee fibonacci para posteriormente usarla
let fibonaccilist =[0, 1];
//hago un for que recorrera del 2 al 50 creando numeros de fibonacci
for (let definidor = 2; definidor <= 50; definidor++) {
    //declaro nextfibonacci para guardar el numero de fibonacci y lo creo usando el numero de la lista y el numero anterior
    let nextfibonacci = fibonaccilist[definidor-1] + fibonaccilist[definidor-2];
    //agrego el numero a la lista
    fibonaccilist.push(nextfibonacci);
}

console.log(fibonaccilist)