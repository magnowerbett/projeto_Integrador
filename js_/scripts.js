// Atribuir um evento onsubmit ao formulário
document.querySelector("form").addEventListener("submit", function(event) {
    // Verificar se todos os campos obrigatórios estão preenchidos
    var nome = document.querySelector("input[name='nome']").value;
    var email = document.querySelector("input[name='email']").value;
    var senha = document.querySelector("input[name='senha']").value;

    if (nome === "") {
        alert("O campo 'Nome' é obrigatório.");
        event.preventDefault();
        return;
    }

    if (email === "") {
        alert("O campo 'E-mail' é obrigatório");
        event.preventDefault();
        return;
    }

    if (senha === "") {
        alert("O campo 'Senha' é obrigatório");
        event.preventDefault();
        return;
    }

    // Verificar se o e-mail é válido
    if ((!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))) {
      alert("O e-mail inserido é inválido.");
      event.preventDefault();
      return;  
    }

    // Verificar se a senha tem pelo menos 6 caracteres
    if (senha.lenght < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.")
        event.preventDefault();
        return;
    }

    // Se todos os campos estiverem preenchidos e as informações forem válidas, permitir que o formulário seja enviado.
});
