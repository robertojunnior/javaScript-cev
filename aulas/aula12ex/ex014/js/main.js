function carregar() {
  let mensagem = document.getElementById("mensagem");
  let fotoHorario = document.getElementById("imagemDia");
  let data = new Date()
  var hora = data.getHours()
  mensagem.innerHTML = `Agora são ${hora} horas.`
}
