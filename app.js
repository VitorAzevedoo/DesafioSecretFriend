// ======== app.js ========

// Array para armazenar os nomes
const amigos = [];

// Função para adicionar um amigo à lista
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value.trim().toUpperCase();

    if (amigo === "") {
        alert("Por favor, insira um nome válido");
        return;
    }

    // Verifica se o nome já foi inserido
    if (amigos.includes(amigo)) {
        alert("Por favor, não insira nomes repetidos");
        return;
    }

    amigos.push(amigo);

    // Atualiza a lista exibida
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    amigos.forEach(a => {
        const li = document.createElement('li');
        li.textContent = a;
        lista.appendChild(li);
    });

    // Limpa o campo de texto
    document.getElementById("amigo").value = "";
}

// Função para sortear um amigo
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "";

    if (amigos.length === 0) {
        alert("Nenhum amigo foi inserido");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const li = document.createElement('li');
    li.textContent = `O amigo sorteado é: ${amigos[indiceAleatorio]}`;
    resultado.appendChild(li);

    // Se quiser limpar a lista de amigos após o sorteio, descomente:
    // amigos.length = 0;
    // document.getElementById('listaAmigos').innerHTML = "";
}
