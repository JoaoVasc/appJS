
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

function ajusteDeAltLar() {

    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)

}
// ajuste da posiçao dependendo do tamanho da tela(window)
ajusteDeAltLar()

var cronometro = setInterval(function() {

    tempo -= 1
    document.getElementById('tempo').innerHTML = tempo
    if(tempo == 0) {
        window.location.href = 'vitoria.html'
    }
}, 1000)


function posicaoRandomica() {

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if(vidas > 2) {

            window.location.href = 'fim_de_jogo.html'
        }

        else{
            document.getElementById('v' + vidas).src = './img/coracao_vazio.png'
        vidas ++
        }

    }

    var posicaoX = Math.floor(Math.random() * (largura - 90) )
    var posicaoY = Math.floor(Math.random() * (altura - 90))

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    
    // criar um elemento html
    
    var mosquito = document.createElement('img')
    mosquito.src = './img/mosca.png'
    mosquito.className = tamanhoRandomico() + ' ' + direcionamentoRandomico()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }
    
    document.body.appendChild(mosquito)

}

function tamanhoRandomico() {
    var tamanho = Math.floor(Math.random() * 3)

    if(tamanho == 0) {
        return 'mosquito1'
    }else if(tamanho == 1){
        return 'mosquito2'
    }else{
        return 'mosquito3'
    }
}

function direcionamentoRandomico() {

    var direcionamento = Math.floor(Math.random() * 2)

    if(direcionamento == 0){
        return 'ladoA'
    }else {
        return 'ladoB'
    }
}

function iniciarJogo() {
    var nivel = document.getElementById('nivel').value
    if(nivel === '') {
        alert('Selecione um nivel para começar o jogo')
        return false
    }else if(nivel === 'facil') {
        window.location.href = 'facil.html'
    }else if(nivel === 'medio') {
        window.location.href = 'medio.html'
    }else if(nivel === 'dificil') {
        window.location.href = 'dificil.html'
    }
}