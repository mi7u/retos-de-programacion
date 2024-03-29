function enviarPalabra() {
    let palabra = document.getElementById("palabraInput").value;
    
    let palabraInvertida = []

    for(let i = 0; i <= palabra.length; i++) {
        palabraInvertida.unshift(palabra[i]);
    }

    document.getElementById("resultado").textContent = "La palabra invertida es: " + palabraInvertida.join("");
    
    alert("La palabra invertida es :" + palabraInvertida.join(""));
}