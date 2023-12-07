function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateLogin() {
    const emailInputElement = document.getElementById('loginEmail');
    const email = emailInputElement.value;

    const passwordInputElement = document.getElementById('loginPassword');
    const password = passwordInputElement.value;

    const errorMessageElement = document.getElementById('loginErrorMessage');

    if (email === '' || password === '') {
        errorMessageElement.textContent = 'Preencha todos os campos.';
        return false;
    }

    if (!validateEmail(email)) {
        errorMessageElement.textContent = 'E-mail inválido.';
        return false;
    }

    // Adicione outras validações conforme necessário

    errorMessageElement.textContent = '';
    return true;
}

function validateCadastro() {
    const nameInputElement = document.getElementById('cadastroName');
    const name = nameInputElement.value;

    const emailInputElement = document.getElementById('cadastroEmail');
    const email = emailInputElement.value;

    const passwordInputElement = document.getElementById('cadastroPassword');
    const password = passwordInputElement.value;

    const repeatPasswordInputElement = document.getElementById('repeatPassword');
    const repeatPassword = repeatPasswordInputElement.value;

    const errorMessageElement = document.getElementById('cadastroErrorMessage');

    if (name === '' || email === '' || password === '' || repeatPassword === '') {
        errorMessageElement.textContent = 'Preencha todos os campos.';
        return false;
    }

    if (!validateEmail(email)) {
        errorMessageElement.textContent = 'E-mail inválido.';
        return false;
    }

    if (password !== repeatPassword) {
        errorMessageElement.textContent = 'As senhas não coincidem.';
        return false;
    }

    // Adicione outras validações conforme necessário

    errorMessageElement.textContent = '';
    return true;
}
