let listaNombreSortear = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo == "") {
        alert('Campo vacío');
    } else {
        listaNombreSortear.push(nombreAmigo); // Agrega el nombre al array
    }

    // Mostrar toda la lista en el elemento <ul>
    mostrarLista();
}

function mostrarLista() {
    let listaAmigos = document.getElementById('listaAmigos'); // Selecciona el <ul>
    listaAmigos.innerHTML = ""; // Limpia la lista antes de actualizarla

    // Recorre el array y agrega cada nombre como un <li>
    for (let i = 0; i < listaNombreSortear.length; i++) {
        let itemLista = document.createElement('li');
        itemLista.textContent = listaNombreSortear[i];
        listaAmigos.appendChild(itemLista);
    }
}

function sortearAmigo() {
    if (listaNombreSortear.length === 0) {
        alert('No hay nombres en la lista para sortear.');
        return;
    }

    // Selecciona un índice aleatorio del array
    let indiceAleatorio = Math.floor(Math.random() * listaNombreSortear.length);
    let nombreGanador = listaNombreSortear[indiceAleatorio];

    // Muestra el nombre ganador en el elemento <ul id="resultado">
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El Ganador es: ${nombreGanador}</li>`; // Muestra el nombre ganador
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}