var lingua = 'pt'

const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hora = dateToday.getHours();
    let minuto = dateToday.getMinutes();
    let segundo = dateToday.getSeconds();

    if (hora < 10) hora = '0' + hora;
    if (minutos < 10) minutos = '0' + minutos;
    if (segundos < 10) segundos = '0' + segundos;


    horas.textContent    = hora;
    minutos.textContent  = minuto;
    segundos.textContent = segundo;
})

function abrirConfiguracoes(type){
    var fundo = document.getElementById("tempo")
    var img = document.getElementById("tempo-img")

    
    if (type == "fechar"){
        timer = 500;
        if (document.getElementById("PT-BR").style.visibility != "initial") timer=0;
        abrirLinguas('fechar')
        setTimeout(function(){
            fundo.style.transition = ".3s";
            fundo.style.marginTop = "-90vh";
            fundo.style.visibility = "hidden";
            img.style.visibility = "hidden";
            document.getElementById("config").setAttribute("onclick", "abrirConfiguracoes()");
        }, timer)

    }else{
        fundo.style.transition = ".5s"
        fundo.style.visibility = "initial"
        img.style.visibility = "initial"
        fundo.style.marginTop = "-75vh"
        document.getElementById("config").setAttribute("onclick", "abrirConfiguracoes('fechar')")
    }
}

function abrirLinguas(type){
    var pt = document.getElementById("PT-BR")
    var us = document.getElementById("EN-US")
    var ptText = document.getElementById("PT")
    var usText = document.getElementById("EN")

    if (type == "fechar"){
        pt.style.transition = ".5s"
        us.style.transition = ".5s"
        
        pt.style.marginRight = "-92vw"
        us.style.marginRight = "-92vw"
    
        pt.style.visibility = "hidden"
        ptText.style.visibility = "hidden"
    
        us.style.visibility = "hidden"
        usText.style.visibility = "hidden"
    
        document.getElementById("tempo").setAttribute("onclick", "abrirLinguas()")

    }else{
        pt.style.transition = ".5s"
        us.style.transition = ".5s"
    
        pt.style.visibility = "initial"
        ptText.style.visibility = "initial"
    
        us.style.visibility = "initial"
        usText.style.visibility = "initial"
    
        pt.style.marginRight = "-85vw"
        us.style.marginRight = "-78vw"
        document.getElementById("tempo").setAttribute("onclick", "abrirLinguas('fechar')")
    }
}

function trocarLinguaguem(language){
    if (language == 'pt' && lingua != language){
        document.getElementById("txtHoras").textContent = "Horas"
        document.getElementById("txtMinutos").textContent = "Minutos"
        document.getElementById("txtSegundos").textContent = "Segundos"
        lingua = "pt"
        exibirMensagem("O seu idioma foi aplicado com sucesso!", 'alertar')
    }

    else if (language == 'en' && lingua != language){
        document.getElementById("txtHoras").textContent = "Hours"
        document.getElementById("txtMinutos").textContent = "Minutes"
        document.getElementById("txtSegundos").textContent = "Seconds"
        lingua = "en"
        exibirMensagem("Your language has been successfully applied!", 'alertar')
    }else{
        if (lingua == 'pt') exibirMensagem("A lingua ja está Aplicada!", 'erro');
        if (lingua == 'en') exibirMensagem("The language is already applied!", 'erro')
    }


}

function exibirMensagem(texto, type){
    if (document.getElementById("fundo-mensagem").style.visibility == "initial"){
        document.getElementById("fundo-mensagem").style.marginRight = "-120vw"
        document.getElementById("fundo-mensagem").style.visibility = "hidden"
    }
    if (type == "erro"){
        document.getElementById("fundo-mensagem").style.backgroundColor = "rgba(255, 0, 0, .7)"
        document.getElementById("img-mensagem").src = "assets/files/errado.png"
        document.getElementById("texto-mensagem").textContent = texto;
    }

    if (type == "alertar"){
        document.getElementById("fundo-mensagem").style.backgroundColor = "rgba(17, 199, 47, 0.7)"
        document.getElementById("img-mensagem").src = "assets/files/certo.png"
        document.getElementById("texto-mensagem").textContent = texto;

    }
    abrirLinguas('fechar')

    document.getElementById("fundo-mensagem").style.visibility = "initial"
    document.getElementById("fundo-mensagem").style.transition = "1s"
    document.getElementById("fundo-mensagem").style.marginRight = "-75vw"
    setTimeout(function(){
    document.getElementById("fundo-mensagem").style.transition = "1s"
    document.getElementById("fundo-mensagem").style.marginRight = "-120vw"
    document.getElementById("fundo-mensagem").style.visibility = "hidden"
    }, 3000)
    


}