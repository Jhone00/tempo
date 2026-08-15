let chave = "8a9fd207059e3bd3c7077261d4f1f850"


function colocarNaTela(dados){
    console.log(dados)

    document.querySelector('.cidade').innerHTML = " Tempo em " +  dados.name
    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp)  + "°C"
    document.querySelector('.icone').src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector('.umidade').innerHTML ="umidade " + Math.floor(dados.main.humidity)  + " % "
}

async function buscarCidade(cidade) {

    console.log(cidade)

    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&units=metric&lang=pt_br`).then(resposta => resposta.json())


    // await = Espere 
    // fetch -> ferramenta do javascript para acessar servidores
    //then é então
    // json -> javascript object notation (o formato que o javascript entendede)
  
   
   colocarNaTela(dados)
}




function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value



    buscarCidade(cidade)
}


/*
clica no botão
 ->chama a função cliqueNoBotão()
 -> vai no input e pega o que está lá dentro
 -> passar a  cidade para o servidor


 Math.floor -> ferramnenta do javascript para arrendondar valores
*/