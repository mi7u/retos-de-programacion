import time
first_word=str(input("escribe una palabra: "))
second_word=str(input("escribe otra palabra: "))
first_word_separeted=[]
second_word_separeted=[]
anagrama=True

first_word=first_word.islower
second_word=second_word.islower
for letras in first_word:
    first_word_separeted.append(letras=letras)

for letras in second_word:
    second_word_separeted.append(letras=letras)

for letras_separadas in second_word_separeted:
    if letras_separadas not in first_word_separeted:
        anagrama=False
    else:
        pass

if anagrama==True:
    print("Las palabras si son anagramas")
else:
    print("Las palabras no son anagramas")