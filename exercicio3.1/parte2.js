// FUNÇÃO 4

let array = []
let carros = [
    {
        marca: 'Volkswagem',
        modelo: 'Gol',
        ano: 2020,
        valor: 20000,
        cor: 'preto',
        automatico: false
    },
    {
        marca: 'Chevrolet',
        modelo: 'Astra',
        ano: 2015,
        valor: 25000,
        cor: 'vermelho',
        automatico: false
    }
];

//array.push(carros)
pesquisarPorMarca(carros, "Chevrolet")

function pesquisarPorMarca(carros, marca) {
    let arrayRetorno = []

    carros.forEach(function (x) {
        if (x.marca === marca) {
            arrayRetorno.push(x)
        }

    })

    console.log(arrayRetorno)

}

// TERMINA AQUI

// FUNÇÃO 5






