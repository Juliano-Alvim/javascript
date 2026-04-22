function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.getElementById('res')
    var txtano = document.getElementById('txtano')
    var nascimento = Number(txtano.value)
    var idade = ano - nascimento
    if (txtano.value.length == 0 || nascimento > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'homemcrianca-pq.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'homemjovem-pq.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'homemadulto-pq.jpg')
            } else {
                img.setAttribute('src', 'homemidoso-pq.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'mulhercrianca-pq.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'mulherjovem-pq.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'mulheradulta-pq.jpg')
            } else {
                img.setAttribute('src', 'mulheridosa-pq.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(document.createElement('br'))
        res.appendChild(img)
    }
    
}