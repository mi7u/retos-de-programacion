number=int(input("Give a number: "))
#creo el array donde se almacenara el binario
binario = []
#Creo la variable de exponente iniciandola en 1
exponente = int(1)

#Creo un while que determinara que determinara cuantos espacios requerira en binario
#la condicion se trata de dividir el numero dado entre el resultado de 2 al exponente hasta que el resultado de la operacion total sea menor a uno(simbolizando que ya no se pueede más)
while (number/(2**exponente))>=1:
    #Se agrega uno al exponente por cada vuelta para hacer más grannde el exponente
    exponente+=1
    
#Creo un ciclo en base al exponente siendo mayor que 0    
while exponente >= 0:
    #primero hago la comparación de si el numero es igual o más grande que el 2 potenciado al exponente más grande
    if number >= (2**exponente):
        #si se cumple se agrega al array "binario" un 1 
        binario.append(1)
        #al numero se resta el resultado de ese exponente
        number = number - (2**exponente)
    else:
        #Si el 2 potenciado al exponente es mayor que el numero se agrega un cero 
        binario.append(0)

    #Le resto al exponente un numero para ir achicando la comparacion    
    exponente -= 1

print(binario)  