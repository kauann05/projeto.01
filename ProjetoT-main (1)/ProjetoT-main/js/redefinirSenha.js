function esquecerSenha() {
    console.log("Função esquecerSenha() chamada."); // Adicionando console.log para verificar se a função está sendo chamada
    var cpf = document.getElementById("cpf").value;
    var novaSenha = document.getElementById("novaSenha").value;
    var confirmaNovaSenha = document.getElementById("confirmaNovaSenha").value;

    // Verifica se algum campo está vazio
    if (!cpf || !novaSenha || !confirmaNovaSenha) {
        alert("Por favor, preencha todos os campos.");
        return false; // Retorna false para indicar que o formulário não foi enviado
    }

    // Verifica se as novas senhas coincidem
    if (novaSenha !== confirmaNovaSenha) {
        alert("As senhas não coincidem.");
        return false; // Retorna false para indicar que o formulário não foi enviado
    }

    // Verifica se o usuário existe no localStorage
    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    var usuario = usuarios.find(function(u) {
        return u.cpf === cpf;
    });

    if (!usuario) {
        alert("CPF não encontrado.");
        return false; // Retorna false para indicar que o formulário não foi enviado
    }

    // Atualiza a senha do usuário
    usuario.senha = novaSenha;

    // Atualiza o usuário no localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Senha redefinida com sucesso!");
    return true; // Retorna true para indicar que o formulário foi enviado com sucesso
}

console.log("Função esquecerSenha() finalizada.");
