// Calcular el perímetro y área de un cuadrado

console.group("Cuadrados");

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
console.log(
	`El perímetro del cuadrado de lado ${ladoCuadrado} cm es: ${perimetroCuadrado} cm`
);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(
	`El área del cuadrado de lado ${ladoCuadrado} cm es: ${areaCuadrado} cm^2`
);

console.log({
	ladoCuadrado,
	perimetroCuadrado,
	areaCuadrado,
});

function calcularCuadrado(lado) {
	return {
		perimetro: lado * 4,
		area: lado * lado,
	};
}

console.groupEnd("Cuadrados");

// Calcular el perímetro y área de un triángulo

console.group("Triángulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(
	`El perímetro del triángulo de lados ${ladoTriangulo1} cm, ${ladoTriangulo2} cm y base ${baseTriangulo} cm es: ${perimetroTriangulo} cm`
);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(
	`El área del triángulo de base ${baseTriangulo} cm y altura ${alturaTriangulo} cm es: ${areaTriangulo} cm^2`
);

console.log({
	ladoTriangulo1,
	ladoTriangulo2,
	baseTriangulo,
	alturaTriangulo,
	perimetroTriangulo,
	areaTriangulo,
});

function calcularTriangulo(lado1, lado2, base, altura) {
	return {
		perimetro: lado1 + lado2 + base,
		area: (base * altura) / 2,
	};
}

function calcualrAlturaTrianguloIsoceles(lado1, base) {
	if (lado1 == base) {
		console.warn("El triángulo no es isóceles");
	} else {
		return Math.sqrt((lado1 ** 2) - ((base ** 2) / 4));
	}
}

function calcualrAlturaTrianguloEscaleno(ladoA, ladoC, base) {
	if (ladoA == ladoC || ladoA == base || ladoC == base) {
		console.warn("El triángulo no es escaleno");
	} else {
		return Math.sqrt((ladoA ** 2) - (((ladoA**2 + base**2 - ladoC**2)/2*base)**2));
	}
}

console.groupEnd("Triángulos");

// Calcular el perímetro y área de un círculo

console.group("Círculos");

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI.toFixed(3);

const perimetroCirculo = 2 * radioCirculo * PI;
const areaCirculo = radioCirculo ** 2 * PI;

console.log({
	perimetroCirculo,
	areaCirculo,
});

function calcularCirculo(radio) {
	return {
		perimetro: radio * 2 * PI,
		area: Math.pow(radio, 2) * PI,
	};
}

console.groupEnd("Círculos");