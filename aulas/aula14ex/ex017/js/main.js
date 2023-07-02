function tabuada() {
    let num = document.getElementById('entradaNumero')
    let tab = document.getElementById('tabuada')
    // se todo valor for vazio
    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        //transformamos a string em numero na nova var n
        let n = Number(num.value)

        // se este codigo rodar remove o texto "Digite um numero..." do option deixando em branco
        tab.innerHTML = ''

        // criamos a var c para criar a tabuada com while
        let c = 0

        // se a var c for menor ou igual a 0
        while (c <= 10) {

            //criamos a var item que vai receber um novo elemento option dentro do select que vamos criar com o .createElement 
            let item = document.createElement('option')

            // a var item vai inserir no option o texto da tabuada abaixo 'o numero x o contador c que começa em 0 = numero vezes o contador que pedimos para parar no 10 dentro do while
            item.innerHTML = `${n} x ${c} = ${n*c}`

            //o appnedChild adiciona o elemento filho  dentro do option dentro do select
            tab.appendChild(item)
            // o c++ vai adicionar sempre 1 ao contador para repetir com while até ser igual a 10
            c++ // c = c + 1
        }
    }
}