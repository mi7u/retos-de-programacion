number=int(input("Give a number: "))
binario = []
exponente = int(1)

while (number/(2**exponente))>=1:
    exponente+=1
    
    
while exponente!=0:

    if number>(2**exponente) or number == (2**exponente):
        
        binario.append(1)
        number=number - (2**exponente)
    elif contador==1:
        number
    else:
        binario.append(0)
    
    exponente= exponente - 1

print(binario)  