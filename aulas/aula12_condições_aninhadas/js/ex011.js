var idade = 65
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Você ainda não pode votar.')
} else if (idade < 18 || idade >= 65) {
    console.log(`Com ${idade} anos, o voto é opcional.`) 
} else {
    console.log('Você atingiu a maioridade, seu voto é obrigatório.')
}



