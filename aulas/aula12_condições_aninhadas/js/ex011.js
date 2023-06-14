function validar() {
    var digiteIdade = document.querySelector('input#digiteIdade')
    var idade = Number(digiteIdade.value)
    var resultado = document.querySelector('div.resultado') 

    if (idade < 16) { //se não é menor ela já é maior
        resultado.innerHTML = `Você ainda não pode votar.`
    } else if (idade < 18 || idade >= 65) { //se menor que 18 já é igual ou maior
        resultado.innerHTML = `Com ${idade} anos, o voto é opcional.`
    } else {
        resultado.innerHTML = `Você atingiu a maioridade, seu voto é obrigatório.`
    }
}
