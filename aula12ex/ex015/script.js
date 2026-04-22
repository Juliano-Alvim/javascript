function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var secao = document.getElementById('secao')
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg'
        secao.style.background = 'rgba(218, 146, 12, 0.62)'
    } else if (hora <= 18) {
        img.src = 'tarde.jpg'
        secao.style.background = 'rgb(202, 152, 59)'
    } else {
        img.src = 'noite.jpg'
        secao.style.background = 'rgba(31, 29, 29, 0.81)'
    }
}