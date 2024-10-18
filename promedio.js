const input = document.getElementsByTagName("input");
const button = document.getElementsByTagName("button");
const listaDeNumeros = document.getElementsByTagName("p");
const resultadoPromedio = document.getElementsByTagName("span");
const resultadoMediana = document.getElementById("resultado-Mediana");
const listaOrdenadaMediana = document.getElementById("lista-ordenada-mediana");

let listaDeNumerosIngresados = [];

button[0].addEventListener("click", () => {
	listaDeNumerosIngresados.push(Number(input[0].value));
	input[0].value = ""; // Limpia el input

	renderizarLista();
	promediar();
	calcularMediana(listaDeNumerosIngresados);
});

function renderizarLista() {
	listaDeNumeros[0].innerHTML = "";
	listaDeNumerosIngresados.forEach((numero) => {
		listaDeNumeros[0].innerHTML += `${numero}, `;
	});
}

function promediar() {
	const suma = listaDeNumerosIngresados.reduce(
		(acc, numero) => acc + numero,
		0
	);
	const promedio = suma / listaDeNumerosIngresados.length;
	resultadoPromedio[0].innerHTML = promedio.toFixed(2);
}

function mediaAritmetica(lista) {
	const sumaLista = lista.reduce((acc, numero) => acc + numero, 0);
	const promedioLista = sumaLista / lista.length;
	return promedioLista;
}

function calcularMediana(lista) {
	// Ordenar la lista
	lista.sort((a, b) => a - b);

	// Calcular Mediana
	let mediana;
	if (lista.length % 2 === 0) {
		const mitadLista = lista.length / 2;
		const elemento1 = lista[mitadLista - 1];
		const elemento2 = lista[mitadLista];
		const numCentrales = [elemento1, elemento2];

		mediana = mediaAritmetica(numCentrales);

		// Imprimir en pantalla la lista ordenada
		listaOrdenadaMediana.innerHTML = "";
		for (let i = 0; i < lista.length; i++) {
			if (i === mitadLista || i === mitadLista - 1) {
				listaOrdenadaMediana.innerHTML += `<strong>${lista[i]}</strong> ,`;
			} else {
				listaOrdenadaMediana.innerHTML += `${lista[i]} ,`;
			}
		}
	} else {
		const mitadLista = Math.floor(lista.length / 2);
		mediana = lista[mitadLista];

		// Imprimir en pantalla la lista ordenada
		listaOrdenadaMediana.innerHTML = "";
		for (let i = 0; i < lista.length; i++) {
			if (i === mitadLista) {
				listaOrdenadaMediana.innerHTML += `<strong>${lista[i]}</strong> ,`;
			} else {
				listaOrdenadaMediana.innerHTML += `${lista[i]} ,`;
			}
		}
	}
	resultadoMediana.innerHTML = mediana.toFixed(2);
}
