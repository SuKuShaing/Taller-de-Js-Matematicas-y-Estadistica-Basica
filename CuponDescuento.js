const precio = document.getElementById('input-precio');
const coupon = document.getElementById('input-coupon');
const nuevoPrecio = document.getElementById('nuevo-valor');
const btnCalcular = document.getElementById('btn-calcular');   

// precio.addEventListener('input', calcularPrecioConDescuento);
// descuento.addEventListener('input', calcularPrecioConDescuento);

btnCalcular.addEventListener('click', calcularPrecioConDescuento);

let descuntosValidos = {
    'platzi': 15,
    'cupon1': 10,
    'cupon2': 20,
    'cupon3': 30
}

function calcularPrecioConDescuento() {
    let precioIngresado = precio.value;
    precioIngresado = parseInt(precioIngresado);
    let couponIngresado = coupon.value;

    if (!descuntosValidos[couponIngresado]) {
        nuevoPrecio.innerText = 'Cupón no válido';
        return;
    }

    let descuentoIngresado = descuntosValidos[couponIngresado];

    if (!precioIngresado) {
        nuevoPrecio.innerText = 'Ingrese un precio válido';
        return;
    }

    let precioConDescuento = (precioIngresado * (100 - descuentoIngresado)) / 100;

    nuevoPrecio.innerText = `$${precioConDescuento}`;
}