# PEC4_Ej6_respuestas_teoria.

1.  ¿Cuáles son los style encapsulation de los componentes? Pon un ejemplo de uso de cada uno de ellos.

    Angular nos permite aprovechar el Shadow DOM a través de View Encapsulation.

    - ViewEncapsulation.Emulated: Es la encapsulación por defecto y no hace uso de Shadow DOM, es decir que no nos aísla los estilos de nuestro componente. Por defecto, Angular genera atributos de ayuda para nuestras clases de CSS, sin embargo, estos no se pueden utilizar dentro de nuestro código para estilizar ya que se generan automáticamente y pueden cambiar.

      ```
      import { Component } from '@angular/core';

      @Component({
          selector: 'app-card-one',
          template:
          ` <div class="card">Hard Times</div>
          <style>
              .card {
                background-color: #ffee88;
                box-shadow: 0 10px 20px rgba(0,0,0,0.19),
                              0 6px 6px rgba(0,0,0,0.23);
                height: 195px;
                margin: 20px;
                width: 300px;
                }
          </style>
          `,
      })
      export class CardOneComponent {
      constructor() { }
      }
      ```

    - ViewEncapsulation.Native: es el ideal, donde Angular usará Shadow DOM. Esto sólo funcionará en navegadores y plataformas que lo soporten de forma nativa. Angular aisla los estilos propios del componente y así, por más clases que existan en el proyecto con el mismo nombre en otros componentes, no afectarán al componente dado.

      ```
      import { Component, ViewEncapsulation } from '@angular/core';

      @Component({
          selector: 'app-card-two',
          template: `
              <div class="card"></div>
              <style>
                  .card {
                  background-image: url(../../assets/glasses.gif);
                  background-size: cover;
                  box-shadow: 0 10px 20px rgba(0,0,0,0.19),
                              0 6px 6px rgba(0,0,0,0.23);
                  height: 300px;
                  margin: 20px;
                  width: 300px;
                  }
              </style>
          `,
      encapsulation: ViewEncapsulation.Native
      })

      export class CardTwoComponent {
      constructor() { }
      }

      ```

    - ViewEncapsulation.None: Usa CSS global, sin ningún tipo de encapsulado. En esta opción, Angular no crea Shadow DOM y los estilos no tienen un alcance propio. A diferencia de las opciones Emulated y Native , None mueve todos los estilos a la sección head.

2.  ¿Qué es el shadow DOM?

    Shadow DOM elimina la fragilidad en la creación de componentes. Esta fragilidad viene de la naturaleza global de los HTML, CSS y JS. Por ejemplo, si creamos un div con una clase .container no es tan fácil saber si esa clase ya ha sido creada antes en nuestro proyecto y la especificidad se empieza a convertir en un gran problema que a la larga, nos perjudica el rendimiento.

    Shadow DOM es un subárbol de nodos del DOM principal y lo que hace para solucionar esos problemas de fragilidad es agrupar los estilos de CSS y ocultarlos, creando así componentes autocontenidos:

    - La encapsulación del DOM: Cuando el navegador carga una página web, realiza muchas acciones interesantes. Una de las cosas que hace es transformar el HTML en un árbol de nodos llamado DOM, esto es una representación viva la página web.

    - Composición: La composición es la forma en la que nuestros elementos de HTML (como divs, forms, inputs, etc) se unen para construir apps. De hecho, gracias a la composición es que elementos como `<select>` saben qué hacer con elementos secundarios como `<option>` para así mostrar listas desplegables, e incluso, el elemento `<video>` sabe qué hacer con `<source>`: un elemento secundario que no se representa, pero que influye en el comportamiento del video.

    - Alcance del CSS: Shadow DOM permite que los selectores de una página exterior no se filtren dentro del componente y a su vez, los estilos definidos dentro del componente no influyen en el exterior.

    - Simplificación el CSS: Con Shadow DOM podemos aislar nuestro CSS del resto de los componentes, nos va a permitir trabajar con selectores más simples y genéricos, y así no preocuparnos tanto por los conflictos con el resto de selectores de nuestra aplicación.

    - Productividad: Ahora, pensaremos más en pequeños fragmentos del DOM y no en una página global, ya que Shadow DOM introduce estilos acotados que permiten ocultar los detalles de implementación.

3.  ¿Qué es el changeDetection?

    Por defecto, Angular comprueba cada unión en la UI para ver si necesita actualizar algún elemento de la UI cada vez que cambia algún valor en nuestro componente.

    Esto es aceptable para la mayoría de las aplicaciones, pero a medida que nuestras aplicaciones aumentan en tamaño y complejidad, podríamos querer controlar cómo y cuándo Angular actualiza la UI.

    En lugar de que Angular decida cuándo necesita actualizar la UI, podríamos querer ser explícitos y decirle a Angular cuándo necesita actualizar la UI manualmente.

    Para ello, utilizamos el atributo changeDetection, donde podemos anular el valor por defecto de ChangeDetectionStrategy.Default a ChangeDetectionStrategy.OnPush.

    Esto significa que después del renderizado inicial, dependerá de nosotros hacer saber a Angular cuando el valor cambie. Angular no comprobará automáticamente los enlaces del componente.

4.  ¿Qué diferencias existen entre las estrategias Default y OnPush? ¿Cuándo debes usar una y otra? Ventajas e inconvenientes.

    Por defecto, Angular aplica el mecanismo ChangeDetectionStrategy.Default al atributo changeDetection. Esto significa que cada vez que Angular advierte un evento (por ejemplo, una respuesta de un servidor o una interacción de un usuario), pasará por cada componente del árbol de componentes, y comprobará cada uno de los enlaces individualmente para ver si alguno de los valores ha cambiado y necesita ser actualizado en la vista.

    Es la estrategia utilizada, a menos que digas lo contrario. Cuando Angular detecta un cambio, en el lugar que sea, empieza a recorrer el árbol de componentes desde el principio para comprobar si tiene que actualizar algo.

    En la estrategia OnPush, los componentes que utilizan esta estrategia se saltan los ciclos de detección de cambios a menos que se trate de un cambio de estado interno del propio componente o de sus inputs.

    La segunda estrategia es claramente más eficiente que la primera, pero perdemos la comodidad de que todo se actualice automáticamente.

5.  Explica con detalle el ciclo de vida de los componentes. Haz hincapié en cuándo se disparan los hooks OnChanges, OnInit, AfterViewInit y OnDestroy, puesto que son los más utilizados.

    En Angular, cada componente tiene un ciclo de vida, una cantidad de etapas diferentes que atraviesa. Hay 8 etapas diferentes en el ciclo de vida de los componentes. Cada etapa se denomina lifecycle hook event o en ‘evento de enlace de ciclo de vida’. Podemos utilizar estos eventos en diferentes fases de nuestra aplicación para obtener el control de los componentes.

    El constructor de la clase de componente se ejecuta primero, antes de la ejecución de cualquier otro lifecycle hook. Si necesitamos inyectar dependencias en el componente, el constructor es el mejor lugar para hacerlo. Después de ejecutar el constructor, Angular ejecuta sus métodos de enganche de ciclo de vida en un orden específico.

    Estas etapas están divididas principalmente en dos fases, una vinculada al componente en si y la otra vinculada a los hijos del componente.

    - ngOnChanges: Este evento se ejecuta cada vez que se cambia un valor de un input control dentro de un componente. Se activa primero cuando se cambia el valor de una propiedad vinculada. Siempre recibe un change data map o mapa de datos de cambio, que contiene el valor actual y anterior de la propiedad vinculada envuelta en un SimpleChange.

    - ngOnInit: Se ejecuta una vez que Angular ha desplegado los data-bound properties(variables vinculadas a datos) o cuando el componente ha sido inicializado, una vez que ngOnChanges se haya ejecutado. Este evento es utilizado principalmente para inicializar la data en el componente.

    - ngDoCheck: Se activa cada vez que se verifican las propiedades de entrada de un componente. Este método nos permite implementar nuestra propia lógica o algoritmo de detección de cambios personalizado para cualquier componente.

    - ngAfterContentInit: Se ejecuta cuando Angular realiza cualquier muestra de contenido dentro de las vistas de componentes y justo después de ngDoCheck. Actuando una vez que todas las vinculaciones del componente deban verificarse por primera vez. Está vinculado con las inicializaciones del componente hijo.

    - ngAfterContentChecked: Se ejecuta cada vez que el contenido del componente ha sido verificado por el mecanismo de detección de cambios de Angular; se llama después del método ngAfterContentInit. Este también se invoca en cada ejecución posterior de ngDoCheck y está relacionado principalmente con las inicializaciones del componente hijo.

    - ngAfterViewInit: Se ejecuta cuando la vista del componente se ha inicializado por completo. Este método se inicializa después de que Angular ha inicializado la vista del componente y las vistas secundarias. Se llama después de ngAfterContentChecked. Solo se aplica a los componentes.

    - ngAfterViewChecked: Se ejecuta después del método ngAfterViewInit y cada vez que la vista del componente verifique cambios. También se ejecuta cuando se ha modificado cualquier enlace de las directivas secundarias. Por lo tanto, es muy útil cuando el componente espera algún valor que proviene de sus componentes secundarios.

    - ngOnDestroy: Este método se ejecutará justo antes de que Angular destruya los componentes. Es muy útil para darse de baja de los observables y desconectar los event handlers para evitar memory leaks o fugas de memoria.

6.  ¿Cada componente es destruido y creado cada vez que se accede a él? Razona la respuesta.

    En Angular la clase componente se instancia, cuando se instancia se llama al constructor, cuando se muestran las cosas se hace el ciclo de vida, puede ser que queramos recargar un componente sin habe ido a otra pagina, es posible que en vez de crear otra instancia, simplemente se reutilice esa instancia reutilizando el ciclo de vida.