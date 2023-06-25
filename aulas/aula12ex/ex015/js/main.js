function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('anoNascimento')
    var saida = document.querySelector('#saida')

    if (formAno.value.length === 0 || Number(formAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        alert('Está ok!')
    }
}