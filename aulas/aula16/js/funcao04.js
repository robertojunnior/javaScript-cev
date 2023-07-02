function fatoria(numero) {
    let fat = 1
    for (let contador = numero; contador > 1; contador-- ) {
        fat *= contador // fat = fat * contador
    }
    return fat
}
//imprima na tela o fatorial de 5
console.log (fatoria(5))

// fatorial de 5
// 5! = 5 x 4 x 3 x 2 x 1 = 120