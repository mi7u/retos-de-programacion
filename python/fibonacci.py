fibonaccilist = [0, 1]
#Primero creo la lista con los dos primeros numeros(0 y 1) para que funcione correctamente
nextfibonacci=int()
#declaro la variable que posteriormente usaré para realizar la suma
for contador in range(1, 50):
    #creo un for para que se repita 50 veces el proceso
    #despues hago un for para "crear" los numeros
    for creador in range (-2, 0):
        #lo pongo desde el "-2" hasta el 0 para usar ese numero como seleccionador de la lista de fibonacci(fibonaccilist)
        nextfibonacci=fibonaccilist[creador]+nextfibonacci
        #sumo el numero de fibonaccilist seleccionado por el numero del for mas el anterior valor guardado 

    fibonaccilist.append(nextfibonacci)   
    #Guardo el numero de fibonacci
    nextfibonacci=0    
    #borro la variable que uso para guardar los numeros de fibonacci
print(fibonaccilist)
#imprimo la lista de fibonacci