//primero creo un for del 1 al 100
for (let i = 1; i <= 100; i++) {
    //primero hago la comparacion donde se cumplen ambas reglas para que no cause problemas
    if (i % 3 ===0 && i % 5 === 0) {
        console.log(i + "fizzbuzz")
        continue;
    }
    //despues hago primero la comparacion con 3 porque sera la más probable
    if (i % 3 ===0) {
        console.log(i + "fizz")
        continue
    }
    //y ya despues hago la comparacion con 5
    if (i % 5===0) {
        console.log(i + "buzz")
        continue
    }
    //al final y ya habiendo pasado todos los filtros nomas escribe el numero
    console.log(i)
}

//en cada if hay un "continue" para que no siga corriendo esa iteracion porque ya no se deberia usar mas ese numero