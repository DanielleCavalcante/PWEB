var a = parseFloat(prompt("Digite o primeiro valor:"));
var b = parseFloat(prompt("Digite o segundo valor:"));
var c = parseFloat(prompt("Digite o terceiro valor:"));

function IsTriangulo(a, b, c) {

    if (Math.abs(b - c) < a && a < b + c && Math.abs(a - c) < b && b < a + c && Math.abs(a - b) < c && c < a + b) {

        function TipoTriangulo(a, b, c) {
            if (a == b && b == c) {
                return ("Equilátero!");
            } else if (a != b && b != c && a != c) {
                return ("Escaleno!");
            } else {
                return ("Isósceles!");
            }
        }
        return alert("É um trinângulo do tipo " + TipoTriangulo(a, b, c));
    }
    else {
        return alert("Não é um triângulo!");
    }
}
IsTriangulo(a, b, c);