function contar() {
    let inicio = document.getElementById('textoInicio')
    let fim = document.getElementById('textoFim')
    let passo = document.getElementById('textoPasso')

    if (inicio.value === 0 || fim.value === 0 || passo || 0) {
        alert('[ERRO] Faltam dados para executar!')
    } else {
        alert('Tudo ok!')
    }
}