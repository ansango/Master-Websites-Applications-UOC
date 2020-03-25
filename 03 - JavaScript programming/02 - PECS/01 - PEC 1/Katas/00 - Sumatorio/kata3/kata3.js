/*
Kata #3: repite un string

Implementa la función repiteString(String, Number) que toma un string y un número como argumentos 
y devuelve un string que contiene el string argumento repetido el número de veces designado por el argumento numérico. 

Debe cumplir estos tests:

repiteString(‘JavaScript’, 0) devuelve el string ‘’
repiteString(‘miau’, 1) devuelve el string ‘miau’
repiteString(‘hola’, 3) devuelve el string ‘holaholahola’
repiteString(‘?’, 10) devuelve el string ‘??????????’
*/

export default function repiteString(txt, num) {
    return txt.repeat(num)
}