// Lista de amigos
let listaAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    
    if (nome === "") {
        alert("Por favor, insira um nome válido!");
        return;
    }
    
    if (listaAmigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }
    
    listaAmigos.push(nome);
    input.value = "";
    atualizarLista();
}

// Função para atualizar a exibição da lista de amigos
function atualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        
        // Adiciona botão para remover amigo
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "X";
        botaoRemover.classList.add("botao-remover");
        botaoRemover.onclick = () => removerAmigo(index);
        
        li.appendChild(botaoRemover);
        ul.appendChild(li);
    });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
    listaAmigos.splice(index, 1);
    atualizarLista();
}

// Função para sortear um amigo secreto (apenas um nome por vez)
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];
    
    exibirResultado(amigoSorteado);
}

// Função para exibir o resultado na tela
function exibirResultado(amigo) {
    const ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = "";
    const li = document.createElement("li");
    li.textContent = `Amigo Secreto: ${amigo}`;
    ulResultado.appendChild(li);
}

// Função para resetar a lista de amigos e o resultado
function resetarLista() {
    listaAmigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}
