function contar() {
  let inicio = document.getElementById("textoInicio");
  let fim = document.getElementById("textoFim");
  let passo = document.getElementById("textoPasso");
  let resultado = document.getElementById("resultado");

  if (inicio.value === 0 || fim.value === 0 || passo.value === 0) {
    // alert("[ERRO] Faltam dados para executar!");
    resultado.innerHTML = "Insira os dados novamente!:";
  } else {
    resultado.innerHTML = "Contando: <br>"
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    if (p <= 0) {
        alert('Passo inválido! Cosiderando PASSO = 1') 
        p = 1
    }

    if (i < f) {
        // contador crescente
        for (let contador = i; contador <= f; contador += p) {
            resultado.innerHTML += ` ${contador} \u{1F449}`;
        }
    } else {
        //contador decrescente
        for (let contador = i; contador >= f; contador -= p){
            resultado.innerHTML += ` ${contador} \u{1F449}`;
        }
    }
    resultado.innerHTML += `Fim do Contador \u{1F3C1}`;
  }
}
