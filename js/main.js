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

console.log('¡Gracias por probar nuestra calculadora de CV a kW!')
console.log('Carpi corregime el trabajo de desarrollo web')
console.log('Ciro Derobertis Carranza')