var string = prompt("Escreva uma frase para verificar se ela é um palíndrono: ");

function IsPalindromo(a) {
    j = string.length-1;
    

    for (i = 0; i < j; i++, j--) {
        if (string[i].toUpperCase() !== string[j].toUpperCase()){
            return alert("Não é um palíndromo!");
        }
    }
    return alert("É um palindromo!");
    }

    IsPalindromo(string);