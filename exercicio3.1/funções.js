let submit = document.getElementById("submit");
let recuperar = document.getElementById("recuperar");
let array = []

submit.addEventListener("click", function(e) {

    e.preventDefault();

    let marca = document.querySelector("#marca")
    let modelo = document.querySelector("#modelo")
    let ano = document.querySelector("#ano")
    let valor = document.querySelector("#valor")
    let cor = document.querySelector("#cor")
    let automatico = document.querySelector("#automatico")

   let valorMarca = marca.value
   let valorModelo = modelo.value
   let valorAno = ano.value
   let valorValor = valor.value
   let valorcor = cor.value
   let valorAutomatico = automatico.value   

    criarObjeto(valorMarca, valorModelo, valorAno, valorValor, valorcor, valorAutomatico)

})

function criarObjeto(valor1, valor2, valor3, valor4, valor5, valor6){
  
    let carros = {
        marca: valor1,
        modelo: valor2,
        ano: valor3,
        valor: valor4,
        cor: valor5,
        automatico: valor6,
    }

    if(localStorage.carros){
        array = JSON.parse(localStorage.getItem('carros'))
    }

    array.push(carros)

    localStorage.carros = JSON.stringify(array)
    console.log(array)
}

recuperar.addEventListener('click', function(e){

    e.preventDefault();

    let conversao = localStorage.getItem('carros')
    console.log(JSON.parse(conversao))
})


// // pega os inputs
// let inputs = form.getElementsByTagName('input')
// //HTMLCollection -> array
// let inputsArray = [...inputs]





    

