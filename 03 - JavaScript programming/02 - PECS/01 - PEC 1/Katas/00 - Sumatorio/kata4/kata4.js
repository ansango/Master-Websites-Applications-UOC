/*

Kata #4: elimina el primer y último carácter
 

Implementa la función elimina_primer_y_ultimo(String) que toma un string como argumento y devuelve el string argumento pero sin su primer y último carácter, obviando los strings con menos de 2 caracteres.

Debe cumplir estos tests:

elimina_primer_y_ultimo(‘JavaScript’) devuelve el string ‘avaScrip’
elimina_primer_y_ultimo(‘Alejandría’) devuelve el string ‘lejandrí’
elimina_primer_y_ultimo(‘hidrógeno’) devuelve el string ‘idrógen’
elimina_primer_y_ultimo(‘ok’) devuelve el string ‘ok’

 */

export default function elimina_primer_y_ultimo(str) {
    if(str.length <= 2) {
        return str
    } else {
        return str.slice(1,-1)
    }
}