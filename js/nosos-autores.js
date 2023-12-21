
document.addEventListener('DOMContentLoaded', function() {
    const autoresContainer = document.getElementById('autores-container');

    // Dados dos autores
    const autores = [
        {
            nome: "Jarbas Martins",
            imagem: "assets/img/jarbas.png",
            descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
            preco: "R$ 35,00"
        },
        {
            nome: "Adriana Regina Junkes Soares",
            imagem: "assets/img/escrita.png",
            descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
            preco: "R$ 180,00"
        },
        {
            nome: "José Marcelo Costa dos Santos, Luiz Gonzaga de Sousa Filho",
            imagem: "assets/img/delta.png",
            descricao: "Ao percorrer cada texto, o leitor poderá conferir diversos aspectos...",
            preco: "R$ 88,00"
        },
        {
            nome: "André Villaverde",
            imagem: "assets/img/remissivo.png",
            descricao: "Índice Remissivo de Legislação para Provas de Segunda Fase...",
            preco: "R$ 57,00"
        },
        {
            nome: "Eunira dos Santos",
            imagem: "assets/img/Assim.png",
            descricao: "Este livro não tem a pretensão de desmistificar o mistério Exu...",
            preco: "R$ 190,00"
        },
        {
            nome: "Luciane Abramo",
            imagem: "assets/img/mentalidade.png",
            descricao: "Vivemos em uma das fases mais delicadas da humanidade...",
            preco: "R$ 290,00"
        }
    ];

    // Função para criar um card para cada autor
    function criarCardAutor(autor) {
        var card = document.createElement('div');
        card.className = 'card mb-3';
        card.innerHTML = `<img src="${autor.imagem}" alt="Imagem de ${autor.nome}">
                          <h5 class='crad-title'>${autor.nome}</h5>
                          <p class='card-text'>${autor.descricao}</p>
                          <p class='card-text'>Preço: ${autor.preco}</p>`;
        return card;
    }

    // Adicionando os cards ao container
    autores.forEach(autor => {
        const cardElement = criarCardAutor(autor);
        autoresContainer.appendChild(cardElement);
    });

    // Evento de clique do botão de pesquisa
    document.querySelector('.btn-outline-light').addEventListener('click', function(event) {
        event.preventDefault();
        realizarPesquisa();
    });

    // Evento de entrada do campo de pesquisa
    document.querySelector('.form-control').addEventListener('input', function() {
        var termoPesquisa = this.value.trim();
        if (termoPesquisa) {
            realizarPesquisa();
        } else {
            restaurarConteudoOriginal();
        }
    });

    // Função para realizar a pesquisa
    function realizarPesquisa() {
        var termoPesquisa = document.querySelector('.form-control').value.toLowerCase().trim();
        var containerResultados = document.querySelector('#resultado-pesquisa');

        autoresContainer.style.display = 'none';
        containerResultados.innerHTML = 'Nenhum resultado encontrado';

        autores.forEach(autor => {
            if (autor.nome.toLowerCase().includes(termoPesquisa)) {
                containerResultados.appendChild(criarCardAutor(autor));
            }
        });
    }

    // Função para restaurar o conteúdo original
    function restaurarConteudoOriginal() {
        var containerResultados = document.querySelector('#resultado-pesquisa');
        autoresContainer.style.display = '';
        containerResultados.innerHTML = '';

        autoresContainer.innerHTML = '';
        autores.forEach(autor => autoresContainer.appendChild(criarCardAutor(autor)));
    }
});
