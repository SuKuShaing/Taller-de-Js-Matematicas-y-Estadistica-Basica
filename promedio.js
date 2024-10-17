const input = document.getElementsByTagName('input')
const button = document.getElementsByTagName('button')
const listaDeNumeros = document.getElementsByTagName('p')
const resultadoPromedio = document.getElementsByTagName('span')
const resultadoMediana = document.getElementById('resultado-Mediana')

let listaDeNumerosIngresados = []

button[0].addEventListener('click', () => {
    listaDeNumerosIngresados.push(Number(input[0].value))
    input[0].value = '' // Limpia el input

    renderizarLista()
    promediar(listaDeNumerosIngresados)
    calcularMediana()
})

function renderizarLista() {
    listaDeNumeros[0].innerHTML = ''
    listaDeNumerosIngresados.forEach(numero => {
        listaDeNumeros[0].innerHTML += `${numero}, `
    })
}

function promediar(lista) {
    const suma = lista.reduce((acc, numero) => acc + numero, 0)
    const promedio = suma / lista.length
    resultadoPromedio[0].innerHTML = promedio.toFixed(2)
    return promedio
}

function calcularMediana() {
    if (listaDeNumerosIngresados.length % 2 === 0) {
        const mitadLista = listaDeNumerosIngresados.length / 2
        const elemento1 = listaDeNumerosIngresados[mitadLista - 1]
        const elemento2 = listaDeNumerosIngresados[mitadLista]
        const numCentrales = [elemento1, elemento2]

        const promedioElementosCentrales = promediar(numCentrales)
        resultadoMediana.innerHTML = `${promedioElementosCentrales}`
    } else {
        const mitadLista = Math.floor(listaDeNumerosIngresados.length / 2)
        const mediana = listaDeNumerosIngresados[mitadLista]
        resultadoMediana.innerHTML = `${mediana}`
    }
}