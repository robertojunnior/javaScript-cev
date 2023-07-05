let num = document.querySelector("input#fnum");
// captura o conteudo do 1º input
let lista = document.querySelector("select#flista");
// captura o conteudo do select
let res = document.querySelector("div#res");
//vai ser usado para alterar o texto da div resultado após finalizar
let valores = [];
//array onde vamos inserir os dados

function adicionar() {
  //se o numero tiver um valor valido e "!" não estiver na lista
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado.`;
    lista.appendChild(item);
    res.innerHTML = "";
  } else {
    window.alert("Valor inválido ou existente!");
  }
  num.value = "";
  num.focus();
}

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function finalizar() {
  if (valores.length == 0) {
    window.alert("Adicione valores para finalizar!");
  } else {
    let total = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;

    for (let posicao in valores) {
        soma += valores[posicao]
      if (valores[posicao] > maior) 
      maior = valores[posicao];
      if (valores[posicao] < menor) 
      menor = valores[posicao];
    }
    media = soma / total
    res.innerHTML = "";
    res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi o ${maior}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi o ${menor}.</p>`;
    res.innerHTML += `<p>A soma total dos valores adicionados é ${soma}</p>`;
    res.innerHTML += `<p>A média dos valores adicionados é ${media}</p>`;
  }
}
