function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] - Preencha corretamente os campos')
    } else{
        var fsex = document.getElementsByName('radesex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'

            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagens/menino.jpg')
            } else if (idade < 18){
                //Jovem
                img.setAttribute('src', 'imagens/menino.jpg')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/menino.jpg')
            } else{
                //Idoso
                img.setAttribute('src', 'imagens/menino.jpg')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'

            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagens/menino.jpg')
            } else if (idade < 18){
                //Jovem
                img.setAttribute('src', 'imagens/menino.jpg')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/menino.jpg')
            } else{
                //Idoso
                img.setAttribute('src', 'imagens/menino.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}