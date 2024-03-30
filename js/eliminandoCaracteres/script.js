function filtro() {
    let str1 = document.getElementById("str1").value.toLowerCase();
    let str2 = document.getElementById("str2").value.toLowerCase();
    let out1 = []
    let out2 = []
    
    //Creo un for que recorre del 0 al limite de str1 
    for (let i = 0; i < str1.length; i++) {
     
        //creo una condicion que es "si str2 NO incluye la letra de str1 ubicada en (i)" al ser verdadera esa condicion se agrega esa letra a out1
        if (!str2.includes(str1[i])) {
            out1.push(str1[i]);
        };
    };

     //Creo un for que recorre del 0 al limite de str2

    for (let i = 0; i < str2.length; i++) {

        //creo una condicion que es "si str1 NO incluye la letra de str2 ubicada en (i)" al ser verdadera esa condicion se agrega esa letra a out2
        if (!str1.includes(str2[i])) {
            out2.push(str2[i]);
        };
    };
    document.getElementById("resultadoEliminadorUno").textContent = "La palabra numero 1 ahora es: " + out1.join(", ");
    document.getElementById("resultadoEliminadorDos").textContent = "La palabra numero 2 ahora es "  + out2.join(", ");
    
}