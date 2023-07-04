// vamos criar uma funçao com a chamada "parOuImpar(valor) que ao final retorna se o numero é par ou impar
function parOuImpar(numero) {
    // se numero for divisivel por 2 ou seja resta 0
    if (numero%2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}
// Acima temos a funçao com a chamada par ou impar.
// agora vamos criar duas variáveis, uma para entrada let = valor e outra let = resultado para poder imprimir na tela

let valor = 13 // digite aqui o valor 
let resultado = parOuImpar(valor) // resultado recebe a chamada
console.log(`O número ${valor} é ${resultado}`) // imprimindo o resultado do return