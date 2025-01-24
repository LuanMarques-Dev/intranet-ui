// main.js
$('.validate-form').on('submit', async function (event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    var username = $('input[name="username"]').val().trim();
    var password = $('input[name="pass"]').val().trim();

    if (!username || !password) {
        alert("Preencha todos os campos!");
        return;
    }

    try {
        // Envia os dados para o back-end
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();

        if (response.ok) {
            // Login bem-sucedido
            alert("Login realizado com sucesso!");
            console.log(result);
        } else {
            // Exibir mensagem de erro
            alert(result.message || "Erro ao fazer login.");
        }
    } catch (error) {
        console.error('Erro:', error);
        alert("Erro ao conectar com o servidor.");
    }
});
