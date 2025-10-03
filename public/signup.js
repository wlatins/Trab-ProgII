export default async function exeCadastro() {
    let username = document.querySelector('.username').value;
    let password = document.querySelector('.password').value;
    let email = document.querySelector('.email').value;

    try {
        const response = await fetch("http://localhost:3000/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nome: username,
                senha: password,
                email: email
            })
        });

        const data = await response.json();
        alert(data.msg); // mostra mensagem de sucesso ou erro
    } catch (err) {
        console.error("Erro no cadastro:", err);
        alert("Erro ao cadastrar usuário!");
    }
}
