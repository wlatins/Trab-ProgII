async function carregarLivros() {
    console.log("Chegou na função carregarLivros");
        const response = await fetch('/biblioteca', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });

        let livros = [];
        try {
            // Tenta ler como JSON, se falhar, mantém array vazio
            console.log("Tentando ler resposta como JSON...");
            livros = await response.json();
            console.log("Chegou no try");
        } catch (e) {
            livros = [];
            console.error("Erro ao ler a resposta como JSON:", e);
        }
        const livrosContainer = document.getElementById('livrosContainer');
        livrosContainer.innerHTML = '';
        // const linkCadastro = document.createElement('div');
        // linkCadastro.classList.add('link_cadastro');
        // linkCadastro.innerText = 'Cadastrar Livro';
        // livrosContainer.appendChild(linkCadastro);
        livros.forEach(livro => {
            const livroEspacoDiv = document.createElement('div');
            livroEspacoDiv.classList.add('livro_espaco');

            const livroDiv = document.createElement('div');
            livroDiv.classList.add('livro');

            const livroInfoDiv = document.createElement('div');
            livroInfoDiv.classList.add('livro_info');

            const tituloDiv = document.createElement('div');
            tituloDiv.classList.add('livro_titulo');
            tituloDiv.innerText = livro.nome;
            livroInfoDiv.appendChild(tituloDiv);

            const autorDiv = document.createElement('div');
            autorDiv.classList.add('livro_autor');
            autorDiv.innerText = livro.autor;
            livroInfoDiv.appendChild(autorDiv);

            const anoDiv = document.createElement('div');
            anoDiv.classList.add('livro_ano');
            anoDiv.innerText = livro.ano;
            livroInfoDiv.appendChild(anoDiv);

            const exemplaresDiv = document.createElement('div');
            exemplaresDiv.classList.add('livro_exemplares');
            exemplaresDiv.innerText = 'Exemplares: ' + livro.exemplares;

            const detalhe_1 = document.createElement('div');
            detalhe_1.classList.add('detalhe_1');
            const detalhe_2 = document.createElement('div');
            detalhe_2.classList.add('detalhe_2');

            livrosContainer.appendChild(livroEspacoDiv);
            livroEspacoDiv.appendChild(livroDiv);
            livroEspacoDiv.appendChild(livroInfoDiv);
            livroEspacoDiv.appendChild(detalhe_1);
            livroEspacoDiv.appendChild(detalhe_2);
            livroEspacoDiv.appendChild(exemplaresDiv);
        });
    }

    window.onload = carregarLivros;

// Chame a função quando a página carregar

window.onload = function() {
    carregarLivros();
    console.log("É pra ter a biblioteca");
}