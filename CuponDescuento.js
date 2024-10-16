const precio = document.getElementById("input-precio");
const coupon = document.getElementById("input-coupon");
const nuevoPrecio = document.getElementById("nuevo-valor");
const btnCalcular = document.getElementById("btn-calcular");

// precio.addEventListener('input', calcularPrecioConDescuento);
// descuento.addEventListener('input', calcularPrecioConDescuento);

btnCalcular.addEventListener("click", calcularPrecioConDescuento);

let couponsList = [];
couponsList.push({
	name: "Cupon1",
	discount: 15,
});
// De esta manera los cupones pueden guardar mucha más información, fecha limite, cantidad de usos, etc.
couponsList.push({
	name: "Cupon2",
	discount: 30,
});
couponsList.push({
	name: "Cupon3",
	discount: 25,
});
couponsList.push({
	name: "Cupon4",
	discount: 20,
});

function calcularPrecioConDescuento() {
	let precioIngresado = precio.value;
	precioIngresado = parseInt(precioIngresado);
	let couponIngresado = coupon.value;

	let descuentoIngresado = 0;

	console.log({
		precioIngresado,
		couponIngresado,
		descuentoIngresado,
	});

	if (!precioIngresado) {
		nuevoPrecio.innerText = "Ingrese un precio válido";
		return;
	}

	function isCouponInArray(couponElement) {
		return couponElement.name === couponIngresado;
	}

	// const couponInArray = couponsList.filter(isCouponInArray); // filter devuelve un array con los elementos que cumplan la condición
    
	// if (couponInArray.length === 0) {
        // 	nuevoPrecio.innerText = "Cupón inválido";
        // 	return;
    // } else {
        // 	descuentoIngresado = couponInArray[0].discount;
        // }

    const couponInArray = couponsList.find(isCouponInArray); // find devuelve el primer elemento que cumpla la condición, en este caso devuelve el objeto cupón

    console.log({
        couponInArray,
    });

	if (couponInArray) {
		descuentoIngresado = couponInArray.discount;
	} else {
		nuevoPrecio.innerText = "Cupón inválido";
		return;
	}

	let precioConDescuento = (precioIngresado * (100 - descuentoIngresado)) / 100;

	nuevoPrecio.innerText = `$${precioConDescuento}`;
}
