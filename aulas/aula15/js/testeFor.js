let valores = [8,1,7,4,2,9]

// para a variavel posicao = 0, enquanto ela for menor que seu length(tamanho), continue a contar os elementos encontrando seus valores de cada posição para imprimir com o console.log
// for (let posicao = 0; posicao < valores.length; posicao++) {
//     console.log(`A posição ${posicao} tem o valor ${valores[posicao]}.`)
// }


// para cada posicao dentro da var valores(array) imprima o texto abaixo
for (let posicao in valores) {
    console.log(`A posição ${posicao} tem o valor ${valores[posicao]}.`)
}

// o indexOf() encontra o valor para retornar sua posição 
let ondeEsta = valores.indexOf(4) // <== inserir aqui manualmente o valor para testar

if (ondeEsta == -1) {
    console.log('O valor não foi encontrado.')
} else {
    console.log(`O valor procurado está na posição ${ondeEsta}.`)
}
