
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
    const salarios = trabajos.map( function (elemento) { // .map recorre todos los elementos de un array y crea otro array
        return elemento.salario
    })

    // Enviamos el array de salarios a la función de Calcular Mediana creada en el otro documento para obtener la mediana
    const medianaSalarios = PlatziMath.calcularMediana(salarios)

    return medianaSalarios
}