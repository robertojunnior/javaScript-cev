var diaAtual = new Date()
var diaSemana = diaAtual.getDay()
// o getDay busca a posição do dia na semana começando pelo 0 = Domingo até o 6 = Sábado.

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
        console.log(`Hoje é o ${diaSemana}º dia da semana, ou seja: Domingo!`)
        break
    case 1:
        console.log(`Hoje é o ${diaSemana}º dia da semana, ou seja: Segunda-feira!`)
        break
    case 2:
        console.log(`Hoje é o ${diaSemana}º dia da semana, ou seja: Terça-feira!`)
        break
    case 3:
        console.log(`Hoje é o ${diaSemana}º dia da semana, ou seja: Quarta-feira!`)
        break
    case 4:
        console.log(`Hoje é o ${diaSemana}º dia da semana, ou seja: Quinta-feira!`)
        break
    case 5:
        console.log(`Hoje é o ${diaSemana}º dia da semana, ou seja: Sexta-feira!`)
        break
    case 6:
        console.log(`Hoje é o ${diaSemana}º dia da semana, ou seja: Sábado!`)
        break
    default:
        console.log('[ERRO] - Data inválida!')
        break

}
