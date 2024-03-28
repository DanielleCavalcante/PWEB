var nome = prompt("Digite seu nome:");
var nota1 = prompt("Digite a nota 1:");
var nota2 = prompt("Digite a nota 2:");
var nota3 = prompt("Digite a nota 3:");

var mediaAritmetica = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

alert(`Média Aritmética de ${nome} é ` + mediaAritmetica.toFixed(2));
