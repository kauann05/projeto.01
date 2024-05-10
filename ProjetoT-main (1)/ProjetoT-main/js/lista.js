// lista.js

document.addEventListener("DOMContentLoaded", function() {
    mostrarUsuarios();
});

function mostrarUsuarios() {
    var cadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];
    var mainContent = document.getElementById("mainContent");

    cadastrados.forEach(function(usuario) {
        var cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        var cadastroDiv = document.createElement("div");
        cadastroDiv.classList.add("cadastro");

        var nomeP = document.createElement("p");
        nomeP.innerHTML = "<strong>Nome:</strong> " + usuario.nome;

        var cpfP = document.createElement("p");
        cpfP.innerHTML = "<strong>CPF:</strong> " + usuario.cpf;

        var telefoneP = document.createElement("p");
        telefoneP.innerHTML = "<strong>Telefone:</strong> " + usuario.telefone;

        var enderecoP = document.createElement("p");
        enderecoP.innerHTML = "<strong>Endereço:</strong> " + usuario.endereco;

        cadastroDiv.appendChild(nomeP);
        cadastroDiv.appendChild(cpfP);
        cadastroDiv.appendChild(telefoneP);
        cadastroDiv.appendChild(enderecoP);

        cardDiv.appendChild(cadastroDiv);
        mainContent.appendChild(cardDiv);
    });
}
