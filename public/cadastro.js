document.querySelector('#cadastroForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;

    const response = await fetch('/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            nome: title,
            autor: author,
            ano: year,
            exemplares: 1 // ou outro valor conforme necessário
        })
    });

    const result = await response.json();
    document.querySelector('.livro-cadastrado').textContent = 'Livro cadastrado!' /*'Livro cadastrado: ' + JSON.stringify(result)*/;
});