

Intentad averiguar el resultado de las siguientes expresiones en  JavaScript. Comprobad después los resultados con pequeños programas:

true && true  
false && true  
1 == 1 && 2 == 1  
"prueba" == "prueba"  
1 == 1 || 2 != 1  
true && 1 == 1  
false && 0 != 0  
true || 1 == 1  
"prueba" == "probado"  
1 != 0 && 2 == 1  
"prueba" != "probado"  
"prueba" == 1  
!(true && false)  
!(1 == 1 && 0 != 1)  
!(10 == 1 || 100 == 100)  
!(1 != 10 || 3 == 4)  
!("prueba" == "prueba" && "Java" == "JavaScript")  
1 == 1 && (!("prueba" == 1 || 1 == 0))  
"Java" == "JavaScript" && (!(2 == 3 || 2 == 2))  
2 == 2 && (!("prueba" == "prueba" || "Java" == "JavaScript"))  

Escribid un programa en JavaScript que calcule el perímetro y el área de un rectángulo de lados 20 y 80 unidades. Probad con otros valores.
Escribid un programa en JavaScript que calcule el perímetro i el área de un círculo de radio 10 unidades. Probad con otros valores.
Escribid un programa en JavaScript que calcule el sueldo mensual a partir del número de horas trabajadas (160 horas) y el precio por hora trabajada (12 €). Probad con otros valores.
Escribid un programa en JavaScript que calcule el índice de masa corporal (IMC) de una persona de 70 kg de peso y 1,80 m de altura. Comprobad el resultado con diversos valores. Podéis consultar la fórmula en la wikipedia  https://es.wikipedia.org/wiki/%C3%8Dndice_de_masa_corporal
Escribid un programa en JavaScript que calcule las soluciones de una ecuación de segundo grado de la forma a*x*x + b*x + c = 0, dados a, b i c (suponemos que b*b > 4*a*c).
Escribid un programa en JavaScript que calcule el número de días de un mes concreto de un año concreto (teniendo en cuenta los años bisiestos). Podéis consultar la wikipedia https://es.wikipedia.org/wiki/A%C3%B1o_bisiesto
Ejemplos:
Mes:2 Año:2000 Días:29  (bisiesto, divisible por 400)
Mes:2 Año:2018 Días:28  (no bisiesto, no divisible por 4)
Mes:2 Año:2020 Días:29  (bisiesto, divisible por 4)
Mes:2 Año:2100 Días:28 (no bisiesto, divisible por 100)

Escribid un programa en JavaScript que calcule el día de la semana de una fecha cualquiera. Podéis consultar la wikipedia https://es.wikipedia.org/wiki/Congruencia_de_Zeller

Podéis comprobar los resultados en el sitio web https://www.timeanddate.com/calendar/
Escribid un programa en JavaScript que calcule en qué cuadrante se encuentra un punto definido por la coordenadas cartesianas (x,y) definidas por las variables x e y. El programa sólo puede usar asignaciones, expresiones y operadores (no puede usar sentencias condicionales), y debe cumplir lo siguiente:

Si (x>=0) y (y>=0), entonces el cuadrante es 3
Si (x<0) y (y>=0), entonces el cuadrante es 2
Si (x>=0) y (y<0), entonces el cuadrante es 1
Si (x<0) y (y<0), entonces el cuadrante es 0