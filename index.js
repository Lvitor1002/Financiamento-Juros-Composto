let formulario = document.getElementById("idformulario")
let inputValorBem = document.getElementById("idValorBem")
let inputValorEntrada = document.getElementById("idValorEntrada")
let campoValorFinanciamento = document.getElementById("vFinanciamento")

function calculoValorFinanciamento(){

    let valorBem = parseFloat(inputValorBem.value.trim().replace(',','.'))
    let valorEntrada = parseFloat(inputValorEntrada.value.trim().replace(',','.'))
    
    if(isNaN(valorBem) || valorBem < 0 || isNaN(valorEntrada) || valorEntrada < 0){
        
        campoValorFinanciamento.textContent = "OBS: Verifique se as entradas estão corretas"
        return 
    }

    let valorFinanciamento = valorBem - valorEntrada

    if(valorFinanciamento <= 0){
        campoValorFinanciamento.textContent = "OBS: Valor do Financiamento resultou em zero";
        return 
    }
    campoValorFinanciamento.textContent = `R$ ${valorFinanciamento.toFixed(2)}`
}


// Chama a função toda vez que o usuário digitar nos campos
inputValorBem.addEventListener("keyup",calculoValorFinanciamento)
inputValorEntrada.addEventListener("keyup",calculoValorFinanciamento)


formulario.addEventListener('submit',function(evento){
   
    evento.preventDefault()

    let valorBem = parseFloat(inputValorBem.value.trim().replace(',','.'))
    let valorEntrada = parseFloat(inputValorEntrada.value.trim().replace(',','.'))
    let valorFinanciamento = valorBem - valorEntrada


    let tempo = evento.target.tempo.value 
    let taxa = evento.target.taxa.value / 100

    let montante = valorFinanciamento * Math.pow((1 + taxa),tempo)
    
    document.getElementById("vParcela").textContent = `R$ ${montante.toFixed(2)}`
})