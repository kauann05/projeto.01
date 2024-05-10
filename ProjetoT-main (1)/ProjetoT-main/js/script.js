function salvarDados() {
    const inputFile = document.getElementById('inputFile');
    const file = inputFile.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const imagemData = event.target.result;
        const id = document.getElementById('id').value;
       
        const nome = document.getElementById('nome').value;
        const modelo = document.getElementById('modelo').value;
        const preco = document.getElementById('preco').value;

        const cadastrados = Object.values(localStorage); // Obtém todos os valores do localStorage
        const produtoExistente = cadastrados.some(function(item) {
            if (item.startsWith('produto_')) {
                const produto = JSON.parse(item);
                return produto.id === id;
            }
            return false;
        });

        if (produtoExistente) {
            alert("Produto já cadastrado com este ID.");
            return; // Encerra a função se o produto já estiver cadastrado
        }

        const dados = {
            imagem: imagemData,
            id: id,
            nome: nome,
            modelo: modelo,
            preco: preco
        };

        // Gera uma chave única para cada produto
        const chave = 'produto_' + Date.now();
        localStorage.setItem(chave, JSON.stringify(dados));
        exibirProdutos(); // ira atualizaz a exibição após adicionar um novo produto
    }

    reader.readAsDataURL(file);
}

function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Logout realizado com sucesso!");
    window.location.href = "login.html"; // Redireciona para a página de login
}

