let num = document.querySelector('input#fnum');
// captura o conteudo do 1º input
let lista = document.querySelector('select#flista');
// captura o conteudo do select
let res = document.querySelector('div#res');
//vai ser usado para alterar o texto da div resultado após finalizar
let valores = [];
//array onde vamos inserir os dados

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
}
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        window.alert('olá')
    } else {
        window.alert('Valor inválido ou existente!')
    }
}

