const PlatziMath = {};

PlatziMath.esPar = function esPar(lista) {
	if (lista.length % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

PlatziMath.esImpar = function esImpar(lista) {
	if (!(lista.length % 2 === 0)) {
		return true;
	} else {
		return false;
	}
}

PlatziMath.renderizarLista = function renderizarLista(lista) {
	listaDeNumeros[0].innerHTML = ""; // esto es donde se imprimirá, ah y limpia el lugar
	lista.forEach((numero) => {
		listaDeNumeros[0].innerHTML += `${numero}, `;
	});
}

PlatziMath.promediar = function promediar() {
	const suma = listaDeNumerosIngresados.reduce(
		(acc, numero) => acc + numero,
		0
	);
	const promedio = suma / listaDeNumerosIngresados.length;
	resultadoPromedio[0].innerHTML = promedio.toFixed(2);
}

PlatziMath.mediaAritmetica = function mediaAritmetica(lista) {
	const sumaLista = lista.reduce((acc, numero) => acc + numero, 0);
	const promedioLista = sumaLista / lista.length;
	return promedioLista;
}

PlatziMath.calcularMediana = function calcularMediana(lista) {
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
    return mediana
}

PlatziMath.calcularModa = function calcularModa(lista) {
	// ordenamos la lista
	lista.sort((a, b) => a - b);

	const almacenDeFrecuencia = {};

	// Contamos cuantas veces aparece cada número
	for (let i = 0; i < lista.length; i++) {
		const numero = lista[i];
		if (almacenDeFrecuencia[numero]) {
			almacenDeFrecuencia[numero]++;
		} else {
			almacenDeFrecuencia[numero] = 1;
		}
	}

	// verificamos cual es la moda
	let moda = null;
	let frecuenciaMaxima = 0;
	for (const key in almacenDeFrecuencia) {
		if (almacenDeFrecuencia[key] > frecuenciaMaxima) {
			frecuenciaMaxima = almacenDeFrecuencia[key];
			moda = key;
		}
	}

	// Verificamos sí hay más de una moda
	let losModas = [];
	for (const key in almacenDeFrecuencia) {
		if (almacenDeFrecuencia[key] == frecuenciaMaxima) {
			losModas.push(key);
		}
	}

	// Imprimimos la moda
	resultadoModa.innerHTML = "";
	if (losModas.length > 1) {
		losModas.forEach((numero) => {
			resultadoModa.innerHTML += `${numero}, `;
		});
		// Remover la última coma y espacio
		resultadoModa.innerHTML = resultadoModa.innerHTML.slice(0, -2);
	} else {
		resultadoModa.innerHTML += `${losModas[0]}`;
	}

	// Imprimimos la lista
	listaOrdenadaModa.innerHTML = "";
	lista.forEach((numero) => {
		if (losModas.includes(numero.toString())) {
			listaOrdenadaModa.innerHTML += `<strong>${numero}</strong>, `;
		} else {
			listaOrdenadaModa.innerHTML += `${numero}, `;
		}
	});

	// Remover la última coma y espacio
	listaOrdenadaModa.innerHTML = listaOrdenadaModa.innerHTML.slice(0, -2);

    return losModas
}

const notas = [
	{
		course: "Educación Física",
		note: 10,
		credit: 2,
	},
	{
		course: "Programación",
		note: 8,
		credit: 5,
	},
	{
		course: "Finanzas personales",
		note: 7,
		credit: 5,
	},
];

PlatziMath.calcularPromedioPonderado = function calcularPromedioPonderado(notas) {
	// suma de créditos
	const creditosTotales = notas.reduce((acc, va) => acc + va.credit, 0);

	// suma de los pesos ponderados
	const pesosPonderados = notas.reduce(
		(acc, va) => acc + va.note * va.credit,
		0
	);

	// Promedio Ponderado
	const promedioPonderado = pesosPonderados / creditosTotales;
	console.log(`El Promedio Ponderado es: ${pesosPonderados / creditosTotales}`);
    return promedioPonderado;
}
