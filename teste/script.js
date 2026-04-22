function fugir() {
    var x = Math.random() * 300
    var y = Math.random() * 200
    
    var btnNao = document.getElementById('nao')
    btnNao.style.position = 'relative'
    btnNao.style.left = x + 'px'
    btnNao.style.top = y + 'px'
}

function clicou() {
    var img = document.createElement('img')
    img.setAttribute('src', 'gatinhohehe.png')
    mensagem.appendChild(img)
}