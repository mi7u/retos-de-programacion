def IdentificaP(numero_a_buscar)->bool:
    for contador in range(2, numero_a_buscar):
        if not numero_a_buscar%contador:
            return False
    return True


        

