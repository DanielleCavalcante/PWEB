function validarForm() {
    var form = document.getElementById('principal');
    var nome = form.elements['nome'].value;
    var email = form.elements['email'].value;
    var comentario = form.elements['comentario'].value;
    var pesquisa = form.elements['pesquisa'];

    if (nome.length < 10) {
        alert('O nome deve ter pelo menos 10 caracteres.');
        return false;
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert('Insira um e-mail válido.');
        return false;
    }

    if (comentario.length < 20) {
        alert('O comentário deve ter pelo menos 20 caracteres.');
        return false;
    }


    if (!pesquisaSelecionada || pesquisa.value === 'nao') {
        alert('Volte sempre à esta página!');
    } else {
        alert('Que bom que você voltou a visitar esta página!');
    }

    return true;
}
