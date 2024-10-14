const precio = document.getElementById('input-precio');
const descuento = document.getElementById('input-descuento');
const nuevoPrecio = document.getElementById('nuevo-valor');

// precio.addEventListener('input', calcularPrecioConDescuento);
// descuento.addEventListener('input', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
    let precioIngresado = precio.value;
    precioIngresado = parseInt(precioIngresado);
    let descuentoIngresado = descuento.value;
    descuentoIngresado = parseInt(descuentoIngresado);
    
    let precioConDescuento = (precioIngresado * (100 - descuentoIngresado)) / 100;

    nuevoPrecio.innerText = `$${precioConDescuento}`;
}