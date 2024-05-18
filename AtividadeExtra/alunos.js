function calcularMedia() {
    const nome = document.getElementById('nome').value;
    const ra = document.getElementById('ra').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    if (!nome || !ra || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert('Preencha todos os campos corretamente.');
        return;
    }

    const media = (nota1 + nota2 + nota3) / 3;
    const resultado = `Aluno: ${nome} (RA: ${ra}) - Média: ${media.toFixed(2)}`;
    document.getElementById('resultado').textContent = resultado;
}
