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
	const medianaProcentajeCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

	const ultimoSalario = trabajos[trabajos.length - 1].salario;
	const proyeccionSalario =
		ultimoSalario + ultimoSalario * medianaProcentajeCrecimiento;

	return proyeccionSalario;
}
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

        compania[job.empresa][job.year].push(job.salario)
    }
}

console.log(compania);

function medianaEmpresaYear(nombre, year) {
	if (!compania[nombre]) {
		console.warn('La empresa no existe')
		return;
	} else if (!compania[nombre][year]) {
		console.warn('La empresa no dio salarios ese año')
		return;
	} else {
		return PlatziMath.calcularMediana(compania[nombre][year]);
	}
}