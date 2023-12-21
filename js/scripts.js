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

//Botão de Busca, página inicial

    document.addEventListener('DOMContentLoaded', function () {
        const searchInput = document.querySelector('.form-control');
        const searchButton = document.querySelector('.btn-outline-light');
        const cardsContainer = document.querySelector('.row'); // Substitua por um seletor mais específico se necessário

        // Função para filtrar e mostrar cards
        function filterCards() {
            const searchTerm = searchInput.value.toLowerCase();
            const cards = cardsContainer.querySelectorAll('.card');

            cards.forEach(card => {
                const title = card.querySelector('.card-title').textContent.toLowerCase();
                if (title.includes(searchTerm)) {
                    card.style.display = ''; // Mostra o card
                } else {
                    card.style.display = 'none'; // Esconde o card
                }
            });
        }

        // Evento de clique para o botão de busca
        searchButton.addEventListener('click', function(event) {
            event.preventDefault();
            filterCards();
        });

        // Evento de input para restaurar a tela inicial
        searchInput.addEventListener('input', function() {
            if (!this.value) {
                const cards = cardsContainer.querySelectorAll('.card');
                cards.forEach(card => card.style.display = ''); // Mostra todos os cards
            }
        });
    });

