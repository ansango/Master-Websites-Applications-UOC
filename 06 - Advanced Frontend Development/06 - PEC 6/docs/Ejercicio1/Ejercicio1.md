# Ejercicio 1 - Code Smells

## ¿Qué es un Code Smell?

Un code smell, también conocido como mala práctica, en el desarrollo de software, se refiere a cualquier síntoma en el código fuente de un programa que posiblemente indique un problema más profundo.

Los code smells usualmente no son bugs – no son técnicamente incorrectos y en realidad no impiden que el programa funcione correctamente.

Pero indican deficiencias en el diseño software que puede ralentizar el desarrollo o aumentan el riesgo de errores o fallos en el futuro.

## Categorización de los Code Smells

- **Bloaters**: son código, métodos y clases que han aumentado a proporciones tan gigantescas que son difíciles de trabajar.

  - **Long method**: un método que contiene muchas líneas de código o hace demasiadas cosas.

  - **Large Class**: una clase que tiene muchos campos, métodos o líneas de código.

  - **Primitive Obsession**: consiste en utilizar datos primitivos en vez de objetos más simples para tareas más simples.

  - **Long Parameter List**: un método recibe más de tres o cuatro parámetros. Lo ideal es que reciba máximo uno o dos.

  - **Data Clumps**: diferentes partes del código contienen idénticos grupos de variables.

- **Object Orientation Abusers**: aplicación incorrecta de los principios de la programación orientada a objetos.

  - **Switch Statements**: tenemos un switch con complicación lógica o una gran cantidad de if, else if.

  - **Temporary Field**: los campos temporales obtienen su valor bajo determinadas circunstancias, pero fuera de estos casos están vacíos y sin un valor por defecto.

  - **Refused Bequest**: se da cuando una subclase utiliza parcialmente algunos métodos de las clases de las que extiende.

  - **Alternative Classes, different interfaces**: dos clases realizan funciones idénticas pero tienen diferentes nombres de métodos.

- **Change Preventer**: significan que cambiar al cambiar algo en un lugar del código, hay que hacer muchos cambios en otros lugares también.

  - **Divergent Change**: cambiar muchos métodos no relacionados cuando hacemos cambios en una clase.

  - **Shotgun Surgery**: Hacer una modificación requiere que se hagan muchos pequeños cambios en muchas clases diferentes.

  - **Parallel Inheritance Hierarchies**: cuando creamos una subclase para una clase, nos encontramos con la necesidad de crear una subclase para otra clase distinta.

- **Dispensables**: es algo inútil cuya ausencia hace el código más limpio, eficiente y fácil de entender.

  - **Comments**: cuando nuestro código no se explica por si mismo y tenemos muchos comentarios explicativos.

  - **Duplicate Code**: dos fragmentos de código parecen casi idénticos.

  - **Lazy Class**: una clase fue diseñada para ser totalmente funcional, pero después del refactoring se ha vuelto muy pequeña.

  - **Data Class**: cuando una clase solo es contenedora de datos y no tiene ninguna funcionalidad.

  - **Dead Code**: una variable, un parámetro, un campo, un método o una clase ya no se utilizan.

  - **Speculative Generality**: clase, un método, un campo o un parámetro no utilizados.

- **Couplers**: acoplamiento excesivo entre clases.

  - **Feature Envy**: un método accede a los datos de otro objeto más que a sus propios datos.

  - **Inappropriate Intimacy**: una clase utiliza los campos y métodos internos de otra clase.

  - **Message Chains**: se da cuando un cliente solicita un objeto y este otro más y así sucesivamente. Un cambio en las relaciones hace que tengamos que modificar el cliente.

  - **Middle Man**: se da cuando la única acción de una clase es delegar trabajo en otras clases.

  - **Incomplete Library Class**: El autor de una librería no ha proporcionado las características que necesitamos.

## Ejemplos de Code Smells. Ficha Modelo

- Nombre code smell.
- Escenario.
- Técnica de refactoring para resolver el code smell.
- Código antes y código después de aplicar refactoring

### **Revisar en /code-smells**
