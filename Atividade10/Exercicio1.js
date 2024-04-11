var a = prompt("Digite o primeiro valor:");
var b = prompt("Digite o segundo valor:");
var c = prompt("Digite o terceiro valor:");

function maior(a,b,c) {
    return (a>b && a>c)?a:(b<c)?c:b;
    }
    alert("Maior valor: " + maior(a,b,c));