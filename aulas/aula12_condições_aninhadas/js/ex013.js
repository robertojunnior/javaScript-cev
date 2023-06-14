var diaAtual = new Date()
var diaSemana = diaAtual.getDay()
// o getDay busca a posição do dia na semana começando pelo 0 = Domingo até o 6 = Sábado.

console.log(`Hoje é ${diaSemana}.`)

/*
    0 = Domingo
    1 = Segunda-feira
    2 = Terça-feira
    3 = Quarta-feira
    4 = Quinta-feira
    5 = Sexta-feira
    6 = Sábado
*/

switch (diaSemana) {
    case 0:
        console.log('Domingo!')
        break
    case 1:
        console.log('Segunda-feira!')
        break
    case 2:
        console.log('Terça-feira!')
        break
    case 3:
        console.log('Quarta-feira!')
        break
    case 4:
        console.log('Quita-feira!')
        break
    case 5:
        console.log('Sexta-feira!')
        break
    case 6:
        console.log('Sábado!')
        break
    default:
        console.log('[ERRO] - Data inválida!')
        break

}