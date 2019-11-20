/*

1 . Escribid funciones en JavaScript para convertir una temperatura entre escalas:

de Celsius a Fahrenheit
de Fahrenheit a Celsius
de Kelvin a Celsius
de Celsius a Kelvin
de Fahrenheit a Kelvin
de Kelvin a Fahrenheit

Cada función debe tener como parámetro la temperatura de entrada y debe devolver la temperatura de salida.

Escribid un programa en JavaScript que, usando estas funciones, calcule un conjunto de pruebas para comprobar su funcionamiento.


 */

let n = parseInt(prompt('Selecciona que quieres convertir: ' +
    '\n1. de Celsius a Fahrenheit' +
    '2. de Fahrenheit a Celsius\n' +
    '3. de Kelvin a Celsius\n' +
    '4. de Celsius a Kelvin\n' +
    '5. de Fahrenheit a Kelvin\n' +
    '6. de Kelvin a Fahrenheit'))

if( n === 1 || n === 2 || n === 3 || n === 4 || n === 5 || n === 6){
    let u = parseInt(prompt('Introduce la unidad a convertir:'))

    function celsiusToFahrenheit(celsius) {
        return console.log((celsius * 1.8) + 32)
    }

    function fahrenheitToCelsius(fahrenheit) {
        return console.log((fahrenheit - 32) / 1.8)
    }

    function kelvinToCelsius(kelvin) {
        return console.log(kelvin - 273.15)
    }

    function celsiusToKelvin(celsius) {
        return console.log(celsius + 273.15)
    }

    function fahrenheitToKelvin(fahrenheit) {
        return console.log(5 * (fahrenheit - 32) / 9 + 273.15)
    }

    function kelvinToFahrenheit(kelvin) {
        return console.log(9 * (kelvin - 273.15) / 5 + 32)
    }

    switch (n) {
        case 1:
            celsiusToFahrenheit(u)
            break
        case 2:
            fahrenheitToCelsius(u)
            break
        case 3:
            kelvinToCelsius(u)
            break
        case 4:
            celsiusToKelvin(u)
            break
        case 5:
            fahrenheitToKelvin(u)
            break
        case 6:
            kelvinToFahrenheit(u)
            break
    }
}
else {
    alert('la selección introducida no es correcta')
}

