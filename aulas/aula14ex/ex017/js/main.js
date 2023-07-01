function tabuada() {
    let num = document.getElementById('entradaNumero')
    let tab = document.getElementById('tabuada')

    if (num.value.length === 0){
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        let c = 1
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c = c + 1
        }
    }
}