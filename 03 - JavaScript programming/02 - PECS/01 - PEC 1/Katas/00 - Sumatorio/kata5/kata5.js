/*

Kata #5: elimina los espacios

Implementa la función elimina_los_espacios(String) que toma un string como argumento y devuelve el string argumento sin espacios.

Debe cumplir estos tests:

elimina_los_espacios(‘buenos días’) devuelve el string ‘ buenosdías’
elimina_los_espacios(‘   pastel de zanahoria   ’) devuelve el string ‘pasteldezanahoria
elimina_los_espacios(‘dábale arroz a la zorra el abad’) devuelve el string ‘dábalearrozalazorraelabad’
 */

export default function elimina_los_espacios(str) {
    return str.replace(/\s/g,'')
}