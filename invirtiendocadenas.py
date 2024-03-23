cadenas=str(input("Dime una palabra a invertir: "))

cantidad=int(0)

invertido=[]

for letras in cadenas:
    invertido.append(letras)
    cantidad+=1

for letras_invertidas in range(0, cantidad, -1):
    print(invertido[letras_invertidas]) 