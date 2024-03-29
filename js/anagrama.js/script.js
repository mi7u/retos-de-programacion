    
function analizarPalabra() {

    //Traigo ambas variables y las paso a lowercase
    let palabraUno = document.getElementById("palabraUnoInput").value.toLowerCase();
    let palabraDos = document.getElementById("palabraDosInput").value.toLowerCase();
    //declaro desde un inicio que son anagramas
    let anagrama=true

    //creo un bucle que comparara si la segunda palabra tiene las letras de la primera(aunque sean desordenadas)
    for (let i = 0; i < palabraUno.length; i++) {
        if (!palabraDos.includes(palabraUno[i])) {
            //Aqui se hace la comparación y en caso de NO tener una letra directamente declara que no son anagramas y se cierra el bucle
            anagrama=false;
            break;
        }

    }
    //Creo un bucle que comparara si la primera palabra tiene las letras de la segunda(aunque sea desordenada)
    for (let i = 0; i < palabraDos.length; i++) {
        if (!palabraUno.includes(palabraDos[i])) {
            //Aqui se hace la comparación y en caso de NO tener una letra directamente declara que no son anagramas y se cierra el bucle
            anagrama=false;
            break;
        }
        
    }
    //regreso el resultado con un ternario dependiendo de si es anagrama o no
    document.getElementById("resultadoAnagrama").textContent = (anagrama) ? "Si es un anagrama" : "No es un anagrama";
}