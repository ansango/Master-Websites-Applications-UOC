# PEC - EJERCICIO 2

Para esta segunda parte de la practica partimos de la solución aportada en la PEC 1. Comentar que se ha llevado a cabo una gran refactorización, para hacer mas simple el manejo de las dependencias y arquitectura, ademas de componentes, servicios y la implementación del estado de datos de la aplicación.

Es posible que existan mejores soluciones para organizar un proyecto en Angular y que algún componente o modulo como Actividades, Mis actividades o Favoritos pudieran ser comunes o genéricos. Por un caso de tiempo he preferido hacer una duplicación de las vistas y crear módulos con carga lazy loading, pero entiendo perfectamente que esto pudiera ser suprimido a un solo modulo y limitar funcionalidades en función de los roles. Pero he preferido sinceramente centrarme en: refactoring a groso modo el código de todos los componentes, organizar la arquitectura, ordenar los servicios, limpiar la inyección de servicios en componentes e ir insertando el estado según la necesidad de la aplicación y los módulos.

La arquitectura se explica a continuación:

- ## app:

1. Módulos: cada modulo cuenta con sus propias vistas que están reverenciadas en el router global y podemos de esta manera hacer lazy loading. Por otro lado los bloques auth y actividades y favorite tienen modulo de estado.

   - activities
   - admin
   - auth
   - favorites
   - my-activities
   - profile

2. Estado: Tenemos un estado compartido de manera global en toda la aplicación, asi como estados por módulos. Tenemos también carga de effects por modulo, excepto favorites y auth que son globales, para poder disponer de la información del usuario en el store y utilizarlo para determinadas funcionalidades. Entiendo que probablemente favorites podría formar parte del estado del modulo de actividades y seria algo a implementar en otro ciclo de desarrollo junto con un componente común para las vistas de las actividades.

3. Servicios: he reducido los servicios a tres, auth, activities y message, sacando toda lógica innecesaria, convirtiendo todo lo posible las queries en observables y enfatizando en este aspecto mas que en la lógica de la devolución de datos de un fake server, ya que entiendo que esta parte debería estar provista por una api y no por el front, debiendo ser agnóstico de todo este tipo de casos. Por lo que la razón de dejar los servicios a casi comprobar y devolver datos de tipo observable se vuelve no necesaria en Angular pero si, una gran ventaja a la hora de trabajar mas con este paradigma en vez de orientar todo a promesas. (realmente podríamos trabajarlo todo en promesas, pero me apetecía aprender un poco mas de rxjs).

4. Modelos: He suprimido la interfaz profile todo bajo user, aunque probablemente en un contexto real de aplicación tendría esto separado, en este caso por simplificar esta practica y hacerlo todo un poco mas manejable y centrarme en implantar el store lo he hecho de esta manera. Evidentemente no es la mejor de las opciones, pero en cualquier momento podríamos separarla. He preferido hacer algo un poco mas centralizado para que no se me fueran extendiendo interfaces alla donde implantaba componentes. Por lo que realmente dejamos tres modelos, uno de usuario/perfil, otro de educación y otro de actividades.

5. Compartido: Aquí tenemos todo lo compartido que son los componentes cabecera y footer y los datos mockeados. Seguramente podría incluirse algún servicio, algún componente como actividades o algún modulo que centralizara componentes de actividad. Pero creo que de la manera en la que esta, esta claro para este caso. Si tuviéramos que implementar alguna ampliación de módulos o funcionalidades deberíamos estudiar un cambio de arquitectura.
