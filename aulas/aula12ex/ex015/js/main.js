function verificar() { // função criada lá no html
    var data = new Date() // var para pegar dado
    var ano = data.getFullYear() // dado buscado foi o ano full com 4 digitos
    var entradaAno = document.getElementById('anoNascimento') 
    var saida = document.querySelector('#saida')
    // se a entrada for = 0 ou menor que ano atual
    if (entradaAno.value.length === 0 || Number(entradaAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        //selecionando o formulário sexo masc ou fem
        var sexoEscolhido = document.getElementsByName('sexo')
        // conta para calular a idade, ano atual - idade digitada
        var idade = ano - Number(entradaAno.value)
        
        // var genero começa vazia pois vai ser escolhida no radio checked
        var genero = ''
        if(sexoEscolhido[0].checked){
            genero = 'Homem'
        } else {
            genero = 'Mulher'
        }











        
        saida.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}