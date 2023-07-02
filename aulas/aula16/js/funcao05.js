// RECURSIVIDADE

function fatorial(numero) {
    if (numero == 1) {
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}
console.log(fatorial(5))

// fatorial de 5
// 5! = 5 x 4 x 3 x 2 x 1 
// 5! = 5 x 4!
//ou seja 
// n! = n x (n-1)!
// no caso do 1! ele sempre será 1.
// então 1! = 1