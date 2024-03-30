function filtro() {
    let str1 = document.getElementById("str1").value;
    let str2 = document.getElementById("str2").value;
    let out1 = []
    let out2 = []
    
    for (let i = 0; i < str1.length; i++) {
        if (!str2.includes(str1[i])) {
            out1.push(str1[i]);
        };
    };

    for (let i = 0; i < str2.length; i++) {
        if (!str1.includes(str2[i])) {
            out2.push(str2[i]);
        };
    };
    document.getElementById("resultadoEliminadorUno").textContent = "La palabra numero 1 ahora es: " + out1.join(", ");
    document.getElementById("resultadoEliminadorDos").textContent = "La palabra numero 2 ahora es "  + out2.join(", ");
    
}