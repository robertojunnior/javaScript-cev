var horaAtual = new Date()
var hora = horaAtual.getHours()
console.log(`Agpra são exatemente ${hora} horas.`)

if (hora < 6) {
    console.log(`Boa madrugada!`)
} else if (hora < 12) {
    console.log(`Bom dia!`)
} else if (hora < 18){
    console.log(`Boa tarde!`)
} else {
    console.log(`Boa noite!`)
}

// hora atual traz a hora no momento do arquivo
// o new date() cria um evento na data
// o getHours() pega a hora no momento do arquivo