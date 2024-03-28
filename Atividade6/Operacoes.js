var num1 = prompt("Digite o primeiro número: ");
var num2 = prompt("Digite o segundo número: ");

var soma = (parseFloat(num1) + parseFloat(num2));
var subtracao = (parseFloat(num1) - parseFloat(num2));
var multiplicacao = (parseFloat(num1) * parseFloat(num2));
var divisao = (parseFloat(num1) / parseFloat(num2));
var resto = (parseFloat(num1) % parseFloat(num2));

alert(`soma = ${soma.toFixed(2)} \nsubtração = ${subtracao.toFixed(2)} \nmultiplicação = ${multiplicacao.toFixed(2)} 
divisão = ${divisao.toFixed(2)} \nresto = ${resto.toFixed(2)}`)