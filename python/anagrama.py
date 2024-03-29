first_word = input("Escribe una palabra: ").lower()
second_word = input("Escribe otra palabra: ").lower()

first_word_separated = []
second_word_separated = []
anagrama = True

for letra in first_word:
    first_word_separated.append(letra)

for letra in second_word:
    second_word_separated.append(letra)

first_word_separated.sort()
second_word_separated.sort()

if first_word_separated != second_word_separated:
    anagrama = False

if anagrama:
    print("Las palabras sí son anagramas.")
else:
    print("Las palabras no son anagramas.")