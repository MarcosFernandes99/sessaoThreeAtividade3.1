// EXERCICIO 1
// const primeiroArray = []

// calcularTabuada(5)

// function calcularTabuada(num) {
//     for (let i = 0; i <= 10; i++) {
//         primeiroArray[i] = num * i
//     }

//     calcularTabuadaSeguinte(num)
// }

// function calcularTabuadaSeguinte(num) {
//     const numeroMaisUm = num + 1
//     const numeroMaisDois = num + 2

//     for (let index = 0; index <= 10; index++) {
//         primeiroArray.push(numeroMaisUm * index)
//         primeiroArray.push(numeroMaisDois * index)
//     }

//     return primeiroArray
// }
// console.log(primeiroArray)
// TERMINA AQUI

// COMEÇA AQUI EXERCÍCIO 2

let array = [[10,0], [3,5], [5,8]]

pontosDeOnibus(array)

function pontosDeOnibus (array){
    let resultado = 0

    array.forEach(x => {
        resultado += x[0]- x[1]
    })

    console.log(resultado)
    return resultado

}

// TERMINA AQUI






   






