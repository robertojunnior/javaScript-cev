function validar() {
    var digiteIdade = document.querySelector('input#digiteIdade')
    var idade = Number(digiteIdade.value)
    var resultado = document.querySelector('div.resultado') 

    if (idade < 16) {
        resultado.innerHTML = `Você ainda não pode votar.`
    } else if (idade < 18 || idade >= 65) {
        resultado.innerHTML = `Com ${idade} anos, o voto é opcional.`
    } else {
        resultado.innerHTML = `Você atingiu a maioridade, seu voto é obrigatório.`
    }
}