import time
contador =int
for contador in range(1, 100):
    time.sleep(0.45)
    #el contador nomas esta para poder ver lentamente los numeros
    if not contador%3 and not contador%5:
        print( contador, "fizzbuzz")
        #puse que si el contador no da decimales si lo dividimos entre 3 y 5 que escriba fizzbuzz
    elif not contador%3:
        print(contador, "fizz")
        #Aqui en caso de que no sea la condición inicial correcta, comparara si el contador no da decimales si lo dividimos entre 3 solamente
    elif not contador%5:
        print(contador, "buzz")
        #Aqui en caso de que la condición inicial y la condicion secundaria no sean correctas, comparara si el contador no da decimales si lo dividimos entre 5 solamente
    else:
        print(contador)
        #En caso de que ninguna se haya cumplido solo imprimira el numero
    
    
