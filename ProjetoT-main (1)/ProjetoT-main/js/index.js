function mostrarEmpresa() {
    var tipoCadastro = document.getElementById("tipoCadastro").value;
    var divEmpresa = document.getElementById("empresa");
    var inputNomeEmpresa = document.getElementById("nomeEmpresa");

    if (tipoCadastro === "empresa") {
        divEmpresa.style.display = "block";
        inputNomeEmpresa.required = true; // Torna o campo obrigatório quando o tipo de cadastro for "Empresa"
    } else {
        divEmpresa.style.display = "none";
        inputNomeEmpresa.required = false; // Remove a obrigatoriedade do campo quando o tipo de cadastro for "Vendedor Informal"
        inputNomeEmpresa.value = ""; // Limpa o valor do campo
    }
}

function cadastrar() {
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var telefone = document.getElementById("telefone").value;
    var endereco = document.getElementById("endereco").value;
    var tipoCadastro = document.getElementById("tipoCadastro").value;
    var senha = document.getElementById("senha").value;
    var confirmaSenha = document.getElementById("confirmaSenha").value;
    var nomeEmpresa = document.getElementById("nomeEmpresa").value;

    // Verifica se algum campo está vazio
    if (!nome || !cpf || !telefone || !endereco || !tipoCadastro || !senha || !confirmaSenha || (tipoCadastro === "empresa" && !nomeEmpresa)) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false; // Retorna false para indicar que o formulário não foi enviado
    }

    // Verifica se as senhas coincidem
    if (senha !== confirmaSenha) {
        alert("As senhas não coincidem.");
        return false; // Retorna false para indicar que o formulário não foi enviado
    }

    var usuario = {
        nome: nome,
        cpf: cpf,
        telefone: telefone,
        endereco: endereco,
        tipoCadastro: tipoCadastro,
        senha: senha // Adiciona a senha ao objeto usuário
    };

    if (tipoCadastro === "empresa") {
        usuario.nomeEmpresa = nomeEmpresa;
    }

    // Verifica se já existe um usuário cadastrado com o mesmo CPF
    var cadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];
    var usuarioExistente = cadastrados.find(function(u) {
        return u.cpf === usuario.cpf;
    });

    if (usuarioExistente) {
        alert("CPF já cadastrado.");
        return false; // Retorna false para indicar que o formulário não foi enviado
    }

    // Adiciona o novo usuário à lista de cadastrados
    cadastrados.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(cadastrados));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "login.html";

    return true; // Retorna true para indicar que o formulário foi enviado com sucesso
}

function login() {
    var cpf = document.getElementById("cpf").value;
    var senha = document.getElementById("senha").value;

    
    if (!cpf || !senha) {
        alert("Por favor, preencha o CPF e a senha.");
        return false;
    }

   
    var cadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verifica se existe um usuário com o CPF informado
    var usuario = cadastrados.find(function(u) {
        return u.cpf === cpf;
    });


    if (!usuario) {
        alert("CPF não cadastrado.");
        return false; 
    }

    // Verifica se a senha está correta
    if (usuario.senha !== senha) {
        alert("Senha incorreta.");
        return false; 
    }


    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

    // Redireciona para a página de preview
    window.location.href = "preview.html";

    return true; // Retorna true para indicar que o login foi realizado com sucesso
}