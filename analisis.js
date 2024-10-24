// Análisis de salarios de Juanita
// .find entrega el primer elemento que coincida
// .filter() [{}, {}, {}], crea un arreglo con todos o ninguno de los que haya encontrado

function encontarPersona(personaEnBusqueda) {
	return salarios.find((persona) => persona.name == personaEnBusqueda);
}

function medianaPorPersona(nombrePersona) {
	// Encuentra a la persona
	const trabajos = encontarPersona(nombrePersona).trabajos;

	// crea un array solo con los sueldos
	const salarios = trabajos.map(function (elemento) {
		// .map recorre todos los elementos de un array y crea otro array
		return elemento.salario;
	});

	// Enviamos el array de salarios a la función de Calcular Mediana creada en el otro documento para obtener la mediana
	const medianaSalarios = PlatziMath.calcularMediana(salarios);

	return medianaSalarios;
}

function proyeccionPorPersona(nombrePersona) {
	// Encuentra a la persona
	const trabajos = encontarPersona(nombrePersona).trabajos;

	// Arreglo de incrementos
	let porcentajesCrecimiento = [];
	for (let i = 1; i < trabajos.length; i++) {
		const salarioActual = trabajos[i].salario;
		const salarioPasado = trabajos[i - 1].salario;
		const crecimiento = salarioActual - salarioPasado;
		const porcentajeDeCrecimiento = crecimiento / salarioPasado;
		porcentajesCrecimiento.push(porcentajeDeCrecimiento);
	}

	// Calcular Mediana
	const medianaProcentajeCrecimiento = PlatziMath.calcularMediana(
		porcentajesCrecimiento
	);

	// Proyección del último sueldo, mediana de porcentajes * el último sueldo
	const ultimoSalario = trabajos[trabajos.length - 1].salario;
	const proyeccionSalario =
		ultimoSalario + ultimoSalario * medianaProcentajeCrecimiento;

	return proyeccionSalario;
}

// Vamos a cambiar la estructura de datos para poder hacer análisis por persona

// Estructura datos de salarios.js
/* [{}, {
	name: "Juanita",
	trabajos: [
		{ year: 2018, empresa: "Freelance", salario: 250 },
		{ year: 2019, empresa: "Freelance", salario: 250 },
		{ year: 2020, empresa: "Industrias Mokepon", salario: 850 },
		{ year: 2021, empresa: "Industrias Mokepon", salario: 1050 },
		{ year: 2022, empresa: "Industrias Mokepon", salario: 1250 },
		{ year: 2023, empresa: "Industrias Mokepon", salario: 1250 },
	],
}, {}];
*/

// Análisis empresarial
/* {
    Industrias Mokepon: {
        2018: [salario, salario, salario]
        2019: [salario, salario, salario]
        2020: [salario, salario, salario]
        2021: [salario, salario, salario]
    }
} */

// salarios.map -> devuelve un arreglo
// salarios.forEach -> no devuelve un arreglo
const compania = {};
for (persona of salarios) {
	for (job of persona.trabajos) {
		if (!compania[job.empresa]) {
			compania[job.empresa] = {};
		}

		if (!compania[job.empresa][job.year]) {
			compania[job.empresa][job.year] = [];
		}

		compania[job.empresa][job.year].push(job.salario);
	}
}

console.log(compania);

function medianaEmpresaYear(nombre, year) {
	if (!compania[nombre]) {
		console.warn("La empresa no existe");
		return;
	} else if (!compania[nombre][year]) {
		console.warn("La empresa no dio salarios ese año");
		return;
	} else {
		return PlatziMath.calcularMediana(compania[nombre][year]);
	}
}

function proyeccionPorEmpresa(nombreEmpresa) {
	if (!compania[nombreEmpresa]) {
		console.warn("La empresa no existe");
		return;
	} else {
		const empresaYears = Object.keys(compania[nombreEmpresa]); // ['2018', '2019', '2020']
		const listaMedianaYears = empresaYears.map((year) => {
			// devuelve otro arreglo, la mediana de cada año
			return medianaEmpresaYear(nombreEmpresa, year);
		});
		console.log({ listaMedianaYears });

		// Arreglo de incrementos
		let porcentajesCrecimiento = [];
		for (let i = 1; i < listaMedianaYears.length; i++) {
			const salarioActual = listaMedianaYears[i];
			const salarioPasado = listaMedianaYears[i - 1];
			const crecimiento = salarioActual - salarioPasado;
			const porcentajeDeCrecimiento = crecimiento / salarioPasado;
			porcentajesCrecimiento.push(porcentajeDeCrecimiento);
		}

		// Calcular Mediana
		const medianaProcentajeCrecimiento = PlatziMath.calcularMediana(
			porcentajesCrecimiento
		);

		// Proyección del último sueldo, mediana de porcentajes * el último sueldo
		const ultimoMediana = listaMedianaYears[listaMedianaYears.length - 1];
		const proyeccionSueldos =
			ultimoMediana + ultimoMediana * medianaProcentajeCrecimiento;

		return proyeccionSueldos;
	}
}

/* 
{
	name: "Juanita",
	trabajos: [
		{ year: 2018, empresa: "Freelance", salario: 250 },
		{ year: 2019, empresa: "Freelance", salario: 250 },
		{ year: 2020, empresa: "Industrias Mokepon", salario: 850 },
		{ year: 2021, empresa: "Industrias Mokepon", salario: 1050 },
		{ year: 2022, empresa: "Industrias Mokepon", salario: 1250 },
		{ year: 2023, empresa: "Industrias Mokepon", salario: 1250 },
	],
};
*/

// Análisis General
function medianaGeneral() {
	// const nombres = salarios.map(persona => persona.name); // devuelve un array con los nombres de las personas
	// const medianaPorCadaNombre = nombres.map(nombre => medianaPorPersona(nombre));
	const listaMedianas = salarios.map( // combinamos las dos lineas anteriores en una sola
		persona => medianaPorPersona(persona.name)
	);
	
	const mediana = PlatziMath.calcularMediana(listaMedianas)

	console.log({listaMedianas, mediana})
}

function medianaTop10() {
	const listaMedianas = salarios.map(
		persona => medianaPorPersona(persona.name)
	);

	const medianasOrdernadas = PlatziMath.ordenarLista(listaMedianas)

	const cantidadElementosTop10 = medianasOrdernadas.length * 0.1

	const elementoLimite = medianasOrdernadas.length - parseInt(cantidadElementosTop10)

	// slice // extrae una sección de un array y la devuelve como un nuevo array, sin modificar el array original. 
	// splice // se utiliza para cambiar el contenido de un array eliminando, reemplazando o agregando nuevos elementos. A diferencia de slice, splice modifica el array original.

	const elementosTop10 = medianasOrdernadas.slice(elementoLimite, medianasOrdernadas.length) 
	
	const medianaTop10 = PlatziMath.calcularMediana(elementosTop10)
	return medianaTop10
}

// Se finaliza el curso