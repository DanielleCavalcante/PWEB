function abrirCurso() {
    var select = document.getElementById("cursos");
    var cursoSelecionado = select.options[select.selectedIndex].text;

    var confirmacao = confirm("Deseja abrir a página do curso de " + cursoSelecionado + "?");

    if (confirmacao) {
        abrirPaginaCurso(cursoSelecionado);
    }
}

function abrirPaginaCurso(curso) {
    var largura = 600;
    var altura = 300;
    var url = "";

    switch (curso) {
        case "Análise e Desenvolvimento de Sistemas":
            url = "https://fatecsorocaba.edu.br/curso_ads.html";
            break;
        case "Eletrônica Automotiva":
            url = "https://fatecsorocaba.edu.br/curso_ea.html";
            break;
        case "Fabricação Mecânica":
            url = "https://fatecsorocaba.edu.br/curso_fm.html";
            break;
        case "Gestão Empresarial EAD":
            url = "https://fatecsorocaba.edu.br/curso_ead-ge.html";
            break;
        case "Gestão da Qualidade":
            url = "https://fatecsorocaba.edu.br/curso_gq.html";
            break;
        case "Manufatura Avançada":
            url = "https://fatecsorocaba.edu.br/curso_ma.html";
            break;
        case "Logística":
            url = "https://fatecsorocaba.edu.br/curso_log.html";
            break;
        case "Polímeros":
            url = "https://fatecsorocaba.edu.br/curso_pol.html";
            break;
        case "Processos Metalúrgicos":
            url = "https://fatecsorocaba.edu.br/curso_pm.html";
            break;
        case "Projetos Mecânicos":
            url = "https://fatecsorocaba.edu.br/curso_proj.html";
            break;
        case "Sistemas Biomédicos":
            url = "https://fatecsorocaba.edu.br/curso_sb.html";
            break;
        case "Gestão Empresarial EAD":
            url = "https://fatecsorocaba.edu.br/curso_ead-ge.html";
            break;
        case "Gestão da Qualidade":
            url = "https://fatecsorocaba.edu.br/curso_gq.html";
            break;
        case "Manufatura Avançada":
            url = "https://fatecsorocaba.edu.br/curso_ma.html";
            break;
        case "Logística":
            url = "https://fatecsorocaba.edu.br/curso_log.html";
            break;
        case "Polímeros":
            url = "https://fatecsorocaba.edu.br/curso_pol.html";
            break;
        case "Processos Metalúrgicos":
            url = "https://fatecsorocaba.edu.br/curso_pm.html";
            break;
        case "Projetos Mecânicos":
            url = "https://fatecsorocaba.edu.br/curso_proj.html";
            break;
        case "Sistemas Biomédicos":
            url = "https://fatecsorocaba.edu.br/curso_sb.html";
            break;
        default:
            alert("Curso não encontrado!");
            return;
        }

    var features = "width=" + largura + ",height=" + altura;
    window.open(url, "_blank", features);
}
