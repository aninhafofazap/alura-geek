var email = document.querySelector("#email")
var emailInserido;

var senha = document.querySelector("#password")
var senhaInserida;

var emailError = document.querySelector(".email-error");
var senhaError = document.querySelector(".senha-error");

//Eventos
email.addEventListener('change', function (ul) {
    emailInserido = ul.target.value;
})

senha.addEventListener('change', function (ul) {
    senhaInserida = ul.target.value
})

var botao = document.querySelector(".area .area-login-caixa .botao")

/*
    Criar span de erro ao digitar email e senha errados.
    Validar e-mail caso ele tenha @ e .com
*/


var mensagens = {
    email: {
        obrigatorio: "E-mail é obrigatório!",
        invalido: "E-mail é inválido!"
    },
    senha: {
        obrigatorio: "Senha é obrigatória!",
        invalido: "Senha é inválida!",
        tamanho: "Senha deve ter no minímo 6 caracteres!"
    }

}

function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;

    if (email === undefined || email === "") {
        emailError.textContent = mensagens.email.obrigatorio;
        emailError.style.cssText = "display: block;";
        return false;
    }

    if (!re.test(email)) {
        emailError.textContent = mensagens.email.invalido;
        emailError.style.cssText = "display: block;";
        return false;
    }

    emailError.style.cssText = "display: none;"
    return true;
}

function validarSenha(senha) {
    if (senha === undefined || senha === "") {
        senhaError.textContent = mensagens.senha.obrigatorio;
        senhaError.style.cssText = "display: block;";
        return false;

    }

    if (senha.length < 6) {
        senhaError.textContent = mensagens.senha.tamanho;
        senhaError.style.cssText = "display: block;";
        return false;
    }

    senhaError.style.cssText = "display: none;"
    return true;
}

// FUNÇÃO PRINCIPAL 

function validar(email, senha) {
    validarEmail(email);
    validarSenha(senha);

    if (validarEmail(email) && validarSenha(senha)) {
        return window.location.pathname = "/menu.html"
    }
}

botao.addEventListener("click", function (ul) {
    ul.preventDefault();
    validar(emailInserido, senhaInserida);
})



