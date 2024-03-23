def desmenuza(palabraA, palabraB):
    resultadoA = palabraA
    resultadoB = palabraB
    
    for letra in palabraA:
        if letra in palabraB:
            resultadoA = resultadoA.replace(letra,"")
            resultadoB = resultadoB.replace(letra,"")
            
    return resultadoA, resultadoB

if __name__ == "__main__":
    p1 = input("primera palabra:")
    p2 = input("Segunda palabra:")
    resultado = desmenuza(p1, p2)
    print(resultado)