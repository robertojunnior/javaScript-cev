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
        // var imagem cria uma tag no html de img com createElement
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // criou para a tag img um 'id' com nome ' foto'.
        // se o sexo escolhido for na posição [0] é masculino então genero igual homem
        if(sexoEscolhido[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 3){
                // bebe
                img.setAttribute('src', 'imagem/bebe.png') // este atributo 'src' é o source
            } else if (idade >= 4 && idade <= 10) {
                //criança
                img.setAttribute('src', 'imagem/menino.png')
            } else if (idade > 11 && idade < 17){
                // jovem
                img.setAttribute('src', 'imagem/jovem-homem.png')
            } else if (idade >= 18 && idade <= 59) {
                //adulto
                img.setAttribute('src', 'imagem/homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagem/senhor.png')
            }
        } else {
            genero = 'mulher'
            if (idade >= 0 && idade < 3){
                // bebe
                img.setAttribute('src', 'imagem/bebe.png')
            } else if (idade >= 4 && idade <= 13) {
                //criança
                img.setAttribute('src', 'imagem/menina.png')
            } else if (idade > 14 && idade < 17){
                // jovem
                img.setAttribute('src', 'imagem/jovem-mulher.png')
            } else if (idade >= 18 && idade <= 59) {
                //adulto
                img.setAttribute('src', 'imagem/mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagem/senhora.png')
            }
        }

        saida.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        saida.appendChild(img) 
        // o appendChild demonstrara o conteudo do 'id' img criado anteriormente
    }
}

// if(idade <= 10) img.setAttribute('src', `images/${genero}/baby.png`)
//         else if(idade <= 21) img.setAttribute('src', `images/${genero}/teen.png`)
//         else if(idade <= 50) img.setAttribute('src', `images/${genero}/adult.png`)
//         else img.setAttribute('src', `images/${genero}/old.png`)