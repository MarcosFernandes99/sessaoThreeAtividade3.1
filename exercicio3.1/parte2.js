// FUNÇÃO 4

let carros = [
    {
        marca: 'Volks',
        modelo: 'Gol',
        ano: 2020,
        valor: 20000,
        cor: 'preto',
        automatico: false
    },
    {
        marca: 'Volks',
        modelo: 'Gol',
        ano: 2015,
        valor: 20000,
        cor: 'azul',
        automatico: false
    },
    {
        marca: 'Chevrolet',
        modelo: 'Astra',
        ano: 2015,
        valor: 20000,
        cor: 'azul',
        automatico: false
    }
];
// pesquisarPorMarca(carros, "Chevrolet")

// function pesquisarPorMarca(carros, marca) {
//     let arrayRetorno = []

//     carros.forEach(function (x) {
//         if (x.marca === marca) {
//             arrayRetorno.push(x)
//         }

//     })

//     console.log(arrayRetorno)
//     return arrayRetorno

// }

// TERMINA AQUI

// FUNÇÃO 5

buscarMarcasDisponiveis(carros)
function buscarMarcasDisponiveis(objeto) {    

    let arrayFinal = objeto.reduce(function (accumulator, current) {     
        
        if (!accumulator.includes(current.marca)) {
             accumulator.push(current.marca)
        }

        return accumulator

    }, [])

    return arrayFinal

    // arrayInicio = objeto.map(x => x.marca)
    // console.log(arrayInicio)
    // arrayFinal = [...new Set(arrayInicio)]
    // console.log(arrayFinal)

}
