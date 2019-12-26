// Anibal Santos Gomez

/*

5. Escribid un programa en JavaScript que muestre por consola un triángulo de Pascal ( o triángulo de Tartaglia) de 20 filas. 
La primera fila sólo tiene un 1. La segunda fila tiene dos 1s. 
En las siguientes filas, los números son el resultado de sumar los dos números inmediatamiente superiores. Los números situados en los laterales siempre son 1.

Podéis consultar la wikipedia:

https://es.wikipedia.org/wiki/Tri%C3%A1ngulo_de_Pascal

https://medium.com/javascript-in-plain-english/algorithms-101-pascals-triangle-in-javascript-9fbd9032871

*/

let numRows = 20

var generate = function(numRows) {
    let triangle = [[1], [1,1]]
    
    if(numRows === 0){
        return []
    } else if(numRows == 1){
        return [[1]]       
    } else if(numRows == 2){
        return  [[1], [1,1]]
    } else {      
        for(let i = 2; i < numRows; i++){       
            addRow(triangle)
        }
    }
    return triangle
    
};
var addRow = function(triangle){
    let previous = triangle[triangle.length - 1]
    let newRow = [1]
    for(let i = 0; i < previous.length - 1; i++){
        let current = previous[i]
        let next = previous[i+1] 
        newRow.push(current + next)
    }
    newRow.push(1)
    return triangle.push(newRow)
    
}

generate(numRows)