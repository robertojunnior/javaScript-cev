function carregar() {
  let mensagem = document.getElementById("mensagem");
  var foto = document.getElementById("imagem");
  let data = new Date()
  var hora = data.getHours()
  mensagem.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        foto.src = 'imagem/amanhecer.jpg'
    } else if (hora > 12 && hora < 18) {
        foto.src = 'imagem/entardecer.jpg'
    } else {
        foto.src = 'imagem/anoitecer.jpg'
    }

}
