
function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento= 100 -descuento;
    const precioConDescuento= (precio * porcentajePrecioConDescuento) /100;

    return precioConDescuento;

}

function BotonCalcularPrecioConD(){
    const inputPrecio= document.getElementById("InputPrecio");
    const precioValor= inputPrecio.value;
    const inputDescuento= document.getElementById("InputDescuento");
    const descuentoValor= inputDescuento.value;

    const precioConDescuento= calcularPrecioConDescuento(precioValor, descuentoValor);

    const resultadoP= document.getElementById("ResultadoP");
    resultadoP.innerText="El precio con descuento es: $" + precioConDescuento;
}