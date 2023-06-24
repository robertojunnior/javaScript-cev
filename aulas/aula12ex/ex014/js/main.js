function carregar() {
  let mensagem = document.getElementById("mensagem");
  let foto = document.getElementById("imagem");
  let data = new Date()
  let hora = data.getHours()
  let minutos = (data.getMinutes() < 10 ? '0' : '') + data.getMinutes()

//   let hora = 18
  mensagem.innerHTML = `Agora são ${hora} : ${minutos}`


    if (hora >= 0 && hora < 12){
        foto.src = 'imagem/amanhecer.jpg'
        document.body.style.background = '#9F9101'
    } else if (hora >= 12 && hora < 18) {
        foto.src = 'imagem/entardecer.jpg'
        document.body.style.background = '#C24A01'
    } else {
        foto.src = 'imagem/anoitecer.jpg'
        document.body.style.background = '#072D51'
    }

    

}
