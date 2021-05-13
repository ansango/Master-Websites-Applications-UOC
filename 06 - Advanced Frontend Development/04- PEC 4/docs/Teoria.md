# Ejercicio 1 - Repaso de los tipos de test

Lee el artículo publicado en la Web de Martin Fowler (https://martinfowler.com/articles/practical-test-pyramid.html) y junto a la explicación previa debes contestar a las siguientes preguntas:

1. Realiza un esquema de los diferentes tipos de test que existen, y explica en una frase corta qué testean según la categoría. (1 punto).

   - Unit test. Es el tipo de test que garantiza que una unidad de código funciona según lo previsto. Es un test atómico, testea aisladamente una unidad de código.
   - Integration test. Es el tipo de test que comprueba la correcta interactuación con otras partes del software. Testean la integración entre 2 o más unidades de código.
   - Contract test. Es el tipo de test que comprueba el funcionamiento entre servicios (externos o no), consumidos por el software y que le proveen de datos. Como por ejemplo los microservicios.
   - UI test. Es el tipo de test que comprueba el funcionamiento de la interfaz de usuario, elementos, eventos, inputs y outputs de la misma.
   - End to end test. Es un tipo de test que simula el comportamiento de un usuario real. Se prueba la aplicación de principio a fin. Cubriendo pruebas que no cubren los test anteriores.
   - Acceptance test. Es aquel que realiza el cliente, es decir, comprueba que el software funciona correctamente desde la perspectiva del usuario final y no solo desde la perspectiva técnica.

2. Explica qué es un “test double” y por qué son importantes a la hora de desarrollar test. (0.5 puntos).

   Un test double es aquel que simula dependencias, es decir, es un objecto que reemplaza a uno equivalente en la aplicación real y cuyo comportamiento podemos modelar a nuestra conveniencia en cada momento para que nos ayude a testear como queramos los objetos que dependen de él. De este modo se aísla el código que estamos testeando, algo fundamental en el que caso de que estemos haciendo testing unitario, y podemos probarlo a fondo, simulando si hiciera falta múltiples comportamientos del test double

   A los test doubles se les suele denominar genéricamente mocks pero se suelen clasificar en cinco tipos:

   - Dummy: objetos que necesitamos para ejecutar el test pero que no hacen nada.
   - Stub: es como un dummy pues sus métodos no hacen nada.
   - Spy: permite “espiar” el uso que se hace del propio objeto, por ejemplo el número de veces que se ejecuta un método.
   - Mock: es un stub en el que sus métodos sí implementan un comportamiento pues esperan recibir unos valores y en función de ellos devuelve una respuesta.
   - Fake: es un objeto “correcta y completamente” implementado y que es totalmente equivalente al objeto real al que simula pero falsea algún comportamiento que no puede ser aplicado en los tests.

3. Según nuestro proyecto qué deberían testear (diagramas de nodos, igual que en el artículo) nuestros test según las categorías: (1 punto)
   - Unitarios: Utilizaremos los test unitarios para comprobar que los modelos y los objetos se formar correctamente.
   - Integración: Nos van a permitir testear funcionalidades complejas dentro de una aplicación, como por ejemplo el login. Podremos crear los tests necesarios para evaluar si nuestra app está realizando la función de login correctamente, así como si rechaza también de forma correcta usuarios no autorizados.
   - UI Test. Utilizaremos este tipo de test para probar las funcionalidades de la interfaz, así como para comprobar la correcta composición de la misma. Por ejemplo podemos probar que al darle click a un botón se añade un elemento o sale un modal o un alert. En definitiva utilizamos estos test para comprobar funcionalidades de la interfaz gráfica.
   - E2E Test. Con este tipo de test probaremos todo el comportamiento global de la aplicación, desde logearnos, hasta crear una actividad, así como la recepción de los datos solicitados. Esto lo que nos permite es interactuar con el navegador (en el caso de Angular), y comprobar la aplicación de principio a fin. El objetivo es identificar las dependencias del sistema y asegurar la integridad de los datos entre los componentes que lo forman.
   - Aceptación. En este tipo de test probaremos que los requisitos establecidos por el cliente (la práctica), están correctamente implementados, por ejemplo que las vistas contienen las tablas correspondientes, que los datos se cargan, que es visible en todos los navegadores, que cuando un usuario se suscriba a una actividad el contador de las personas de dicha actividad aumenta en una unidad y que no puede suscribirse si ya está suscrito, etc.
