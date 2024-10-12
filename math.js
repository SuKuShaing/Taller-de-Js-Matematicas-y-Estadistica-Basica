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

console.groupEnd("Triángulos");