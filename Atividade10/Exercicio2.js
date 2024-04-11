var a = prompt("Digite o primeiro valor:");
var b = prompt("Digite o segundo valor:");
var c = prompt("Digite o terceiro valor:");

function ordemCrescente(a,b,c) {
    var numerosOrdenados = [a, b, c].sort(function(a, b){return a - b});
    return numerosOrdenados
    }
    alert("Números Ordenados: " + ordemCrescente(a,b,c));;
    