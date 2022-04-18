function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var foto = document.querySelector('div#fotos')


    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('Verifique os dados digitados e tente outra vez!')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = "Homem"

            if (idade >= 0 && idade < 10) {
                //criança
               
                img.setAttribute('src','img/H bebe.jpg'  , height="250px"  , width="250px")

            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'img/H adolescente.jpg')
            } else if (idade >= 21 && idade < 50) {
                //adulto
                img.setAttribute('src', 'img/H adulto.jpg')

            } else {
                //idoso
                img.setAttribute('src', 'img/H idoso.jpg')
            }

        } else {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/M bebe.jpg')

            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'img/M adolescente.jpg')
            } else if (idade >= 21 && idade < 50) {
                //adulto
                img.setAttribute('src', 'img/M adulta.jpg')

            } else {
                //idoso
                img.setAttribute('src', 'img/M idosa.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `você é ${genero} de ${idade} anos`
        foto.appendChild(img) 
      
    }
}