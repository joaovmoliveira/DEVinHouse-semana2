var btnAdd = document.getElementById('btnAdd');
var txtItem = document.getElementById('txtItem');
var selLista = document.getElementById('selLista');
var listaMercado = [];
carregarListaMercado();

function adicionarNaLista() {
    var itemMercado = txtItem.value;
    if (itemMercado) {
        criarElementoLista(itemMercado);
        salvarNoLocalStorage(itemMercado);
    } else {
        alert("Favor digitar algo no campo de texto.");
    }
}

function salvarNoLocalStorage(item) {
    listaMercado.push(item);
    localStorage.setItem('listaMercado', JSON.stringify(listaMercado));
}

function criarElementoLista(itemText) {
    var optItem = document.createElement('option'); 
    optItem.textContent = itemText;
    selLista.appendChild(optItem);
}

function carregarListaMercado() {
    var teste = JSON.parse(localStorage.getItem('listaMercado'));
    if (teste) {
        listaMercado = teste;
        for (var i = 0; i < listaMercado.length; i++) {
            criarElementoLista(listaMercado[i]);
        }
    }
}

function verificaTecla(event) {
    if (event.key == 'Enter') {
        adicionarNaLista();
    }
}

btnAdd.addEventListener('click', adicionarNaLista);

txtItem.addEventListener('keyup', verificaTecla);
