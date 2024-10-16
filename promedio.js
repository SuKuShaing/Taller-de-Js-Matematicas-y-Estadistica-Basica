const input = document.getElementsByTagName('input')
const button = document.getElementsByTagName('button')
const listaDeNumeros = document.getElementsByTagName('p')
const resultado = document.getElementsByTagName('span')

let listaDeNumerosIngresados = []

button[0].addEventListener('click', () => {
    listaDeNumerosIngresados.push(Number(input[0].value))
    input[0].value = '' // Limpia el input

    rendeditarLista()
    promediar()
})

function rendeditarLista() {
    listaDeNumeros[0].innerHTML = ''
    listaDeNumerosIngresados.forEach(numero => {
        listaDeNumeros[0].innerHTML += `${numero}, `
    })
}

function promediar() {
    const suma = listaDeNumerosIngresados.reduce((acc, numero) => acc + numero, 0)
    const promedio = suma / listaDeNumerosIngresados.length
    resultado[0].innerHTML = promedio.toFixed(2)
}