let amigos = [];
const amigoPut = document.getElementById("amigo");
const lista = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function adicionarAmigo() {
    const nome = amigoPut.value.trim();
    
    if (nome === "") {
        mostrarAlerta("Por favor, insira um nome válido.");
        return;
    }

    if (amigos.includes(nome)) {
        mostrarAlerta("Esse amigo já foi adicionado.");
        return;
    }

    amigos.push(nome); 
    atualizarLista(); 
    limparCampoEntrada();
}

function atualizarLista() {
    lista.innerHTML = amigos.map((amigo, index) => `<li>${index + 1}. ${amigo}</li>`).join('');
}

function sortearAmigo() {
    if (amigos.length === 0) {
        mostrarAlerta("Preencha a lista antes de sortear");
        return;
    }
    const aleatorio = Math.floor(Math.random() * amigos.length);
    const sorteio = amigos[aleatorio];
    resultado.innerHTML = `O amigo secreto é: ${sorteio}!`;
}

function mostrarAlerta(mensagem) {
    alert(mensagem);
}

function limparCampoEntrada() {
    amigoPut.value = ""; 
    amigoPut.focus(); 
}