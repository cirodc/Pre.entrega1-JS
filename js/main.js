alert('Calculador de CV (Caballos de fuerza) a kW (KiloVatios)')
let ingreseAuto = prompt('Ingrese la marca y el modelo de su auto:')
let ingreseAnio = prompt('Ingrese el año de fabricacion de su auto:')
let caballosFuerza = prompt('Ingrese los caballos de fuerza')

function resumen (auto, anio, caballos ) {
    console.log('Tú ' + auto + ' del año ' + anio + ' tiene ' + caballos + ' caballos de fuerza.')
} resumen (ingreseAuto, ingreseAnio, caballosFuerza)

const KiloWatts = (0.7355)


function calculo(caballosFuerza, KiloWatts ) {
    return caballosFuerza * KiloWatts

} console.log('En otros numeros, tu ' + ingreseAuto + ' tiene ' + calculo(caballosFuerza, KiloWatts) + ' kW (KiloVatios)' )


if (caballosFuerza > 350) {
    console.log('Podrías modificar un poco tu vehiculo, metele un turbo pa!')
} else if (caballosFuerza > 550) {
    console.log('Está muy bien de potencia, con una repro tendrías un auto muy rapido!')
} else if (caballosFuerza >= 700) {
    console.log('Fua amigo, alta nave!')
}

let opcion = prompt('¿Desea realizar el cálculo inverso? (Sí/No)');

function calculoInverso(kilovatios, KiloWatts) {
    return kilovatios / KiloWatts;
}


if (opcion.toLowerCase() === 'sí' || opcion.toLowerCase() === 'si') {
    let ingreseKilovatios = prompt('Ingrese los kilovatios para calcular los caballos de fuerza:');
    let resultadoCaballosFuerza = calculoInverso(ingreseKilovatios, KiloWatts);
    console.log('En otros números, ' + ingreseKilovatios + ' kW (Kilovatios) equivalen a ' + resultadoCaballosFuerza.toFixed(2) + ' caballos de fuerza.');
} else {
    console.log('Gracias por usar la calculadora.');
}

console.log('¡Gracias por probar nuestra calculadora de CV a kW!')



console.log('Carpi corregime el trabajo de desarrollo web')
console.log('Ciro Derobertis Carranza')