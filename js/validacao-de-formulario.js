document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede a ação de envio padrão

    // usa a função limparErros para apagar as mensagens anteriores
    document.getElementById('feedback').innerHTML = '';
    limparErros();

    // Pega os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    let valido = true;

    // Fas a validação Nome
    if (nome === '') {
        mostrarErro('erro-nome', 'O campo Nome é obrigatório.');
        valido = false;
    }

    // Faz a validação E-mail
    if (email === '') {
        mostrarErro('erro-email', 'O campo E-mail é obrigatório.');
        valido = false;
    } else if (!validarEmail(email)) {
        mostrarErro('erro-email', 'E-mail inválido.');
        valido = false;
    }

    // Faz a validação Assunto
    if (assunto === '') {
        mostrarErro('erro-assunto', 'O campo Assunto é obrigatório.');
        valido = false;
    }

    // Faz a validação Mensagem
    if (mensagem === '') {
        mostrarErro('erro-mensagem', 'O campo Mensagem é obrigatório.');
        valido = false;
    } else if (mensagem.length < 20) {
        mostrarErro('erro-mensagem', 'A mensagem deve ter no mínimo 20 caracteres.');
        valido = false;
    }

    // Se tudo tudo for valido
    if (valido) {
        document.getElementById('feedback').innerHTML = '<p class="sucesso">Formulário enviado com sucesso!</p>';

        // Resetando os campos
        document.getElementById('formulario').reset();
    }
});

// Função para validar o formato de e-mail
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Função para exibir erro
function mostrarErro(id, mensagem) {
    document.getElementById(id).innerText = mensagem;
}

// Função para limpar erros
function limparErros() {
    const erros = document.querySelectorAll('.erro');
    erros.forEach(erro => erro.innerText = '');
}
