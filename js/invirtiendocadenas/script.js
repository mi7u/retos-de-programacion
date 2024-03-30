

function enviarPalabra() {
    //inicio extrayendo la palabra del index
    let palabra = document.getElementById("palabraInput").value;
    
    //creo el array que contendra la palabra invertida
    let palabraInvertida = []

    //aqui hago un for que usa como limite el largo de la palabra en cuestion 
    for(let i = 0; i < palabra.length; i++) {

        //aqui voy usando la letra de la palabra segun la posición y metiendola al inicio del array para que se acomoden al reves

        palabraInvertida.unshift(palabra[i]);
    }

    //devuelvo el resultado con un pequeño mensaje

    document.getElementById("resultado").textContent = "La palabra invertida es: " + palabraInvertida.join("");

    //crea una alerta que aparece cuando le das a enviar donde tambien se muestra la palabra innvertida

    alert("La palabra invertida es :" + palabraInvertida.join(""));

}

function ocultarBoton() {
    var boton = document.getElementById("boton");
    boton.style.display = "none";
}