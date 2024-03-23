function calcular() {
    const numero_a_buscar = document.getElementById("numero").value;
    const resultadoSpan = document.getElementById("resultado");
    let resultado = esPrimo(numero_a_buscar)

    console.log("numero", numero_a_buscar);
    resultadoSpan.innerHTML = resultado ? "<strong>Es primo</strong>" : "No es primo";

    console.log(1 === true)
    console.log(0 === true)
    console.log("hola" === true)
    console.log(null === true)
    console.log(true === true)

};

function esPrimo(num){
    for (let index = 2; index < num; index++) {
        if(num%index === 0){
            return false;
        }
    }
    return true;
}