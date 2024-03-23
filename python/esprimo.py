#Escribe un programa que se encargue de comprobar si un número es o no primo. 
#Hecho esto, imprime los números primos entre 1 y 100.
import time
import identificadordeprimos
numero_a_buscar = int(input("dame un número:"))
lista_de_primos=[]
if identificadordeprimos.IdentificaP(numero_a_buscar)==True:
    print("es primo")
else:
    print("no es primo")


for numero in range(1, 100):
    numero_a_buscar=numero 
    if identificadordeprimos.IdentificaP(numero_a_buscar)==True:
        lista_de_primos.append(numero)

print(lista_de_primos)
