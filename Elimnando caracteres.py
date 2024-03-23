str1 = str(input("Ingresa una palabra: "))
str2 = str(input("ingresa una segunda palabra: "))
out1 = []
out2 = []

for contador in range(1, 3):
    if contador==1:
        palabra=str1
        palabra2=str2
    elif contador==2:
        palabra2=str1
        palabra=str2
    else:
        print("A ocurrido un error intente de nuevo")

    for letra in palabra:
        if letra in palabra2:
            pass
        else:
            if contador==1:
                out1.append(letra)
            else:
                out2.append(letra)
        
        
""" for contador in range(1, 3):
    if contador==1:
        palabra=str1
        for letra in palabra:
            out1.append(letra)
    elif contador==2:
        palabra=str2
        for letra in palabra:
            out2.append(letra)
    else:
        print("A ocurrido un error intente de nuevo")

for separador in out1:
    if separador in out2:
        out1.remove(separador)
        out2.remove(separador)
"""
print(out2)
print(out1) 
    
        