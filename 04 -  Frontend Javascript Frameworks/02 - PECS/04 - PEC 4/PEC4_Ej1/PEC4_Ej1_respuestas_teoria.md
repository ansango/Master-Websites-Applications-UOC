# PEC4_Ej1_respuestas_teoria

## A continuación, crea un documento de texto PEC4_Ej1_respuestas_teoria y explica qué realiza cada una de las siguientes opciones de Angular CLI.

- ng new: crea e inicializa una nueva aplicación Angular que es el proyecto por defecto para un nuevo espacio de trabajo.
- ng generate: genera y/o modifica archivos basados en un esquema.
  - component: crea una nueva definición de componente genérico en el proyecto dado o por defecto.
  - directive: crea una nueva definición de directiva genérica en el proyecto dado o por defecto.
  - enum: genera una nueva definición de enumeración genérica para el proyecto dado o por defecto.
  - guard: genera una nueva definición genérica de guardia de ruta en el proyecto dado o por defecto.
  - interface: crea una nueva definición de interfaz genérica en el proyecto dado o por defecto.
  - pipe: crea una nueva definición genérica de pipe en el proyecto dado o por defecto.
  - service: crea una nueva definición de servicio genérica en el proyecto dado o por defecto.
- ng serve: construye y sirve tu aplicación, reconstruyendo sobre los cambios de los archivos.
- ng test: ejecuta los test unitarios en un proyecto.
- ng version: muestra por consola la versión de Angular Cli.

## Component: 
#### Un componente en Angular es un elemento que está compuesto por:

- Un archivo que será nuestro Template (app.component.html).
- Un archivo de lógica, la cual es la que pondremos en un archivo .ts (como por ejemplo app.component.ts).
- Un archivo para el CSS, donde incluiremos los estilos.
- Una aplicación en Angular esta compuesta por varios componentes.
- ng generate component <name> [options]

## Directive: 
#### Son básicamente funciones que son invocadas cuando el DOM (Document Object Model) es compilado por el framework de Angular. 

- Están ligadas a sus correspondientes elementos del DOM cuando el documento es cargado.  
- La finalidad es modificar o crear un comportamiento totalmente nuevo.
- Se dividen en tres tipos:
  
  - Directivas de Atributo: Alteran la apariencia o comportamiento de un elemento del DOM y son usados como atributos de los elementos:
    - ngModel: implementa binding
    - ngClass: permite añadir/eliminar varias clases
    - ngStyle: permite asignar estilos inline
  
  - Directivas de estructurales: Alteran la estructura del DOM, agregando, eliminando y manipulando los elementos host a los que están unidos:
    - *ngIf: nos permite incluir condicionales de lógica en nuestro código, como por ejemplo evaluar sentencias.
    - *ngFor: permite ejecutar bucles.
    - ngSwitch: esta directiva es similar al *ngIf, y es como el switch en lógica de programación.
    - ngPlural: es una directiva que permite agregar o remover elementos del DOM, basado en un valor númerico.
    - ngTemplate:esta directiva es un template en Angular. El contenido de esta etiqueta puede reutilizarse en otros templates. Dentro de la etiqueta ng-template tenemos acceso a las mismas variables de contexto que son visibles en el template exterior.
    - ngComponentOutlet: nos permite crear componentes dinámicos.
  - Componentes: las Directivas de Componente son directivas con un Template. Los componentes tienen decoradores “@Component”, el componente es un decorador @Directive que es extendido con características propias de los templates.

## Enum: 
#### Los enums permiten a un desarrollador definir un conjunto de constantes con nombre.

## Guard: 
#### Hay veces que queremos que determinadas áreas de nuestra aplicación web estén protegidas y solo puedan ser accedidas si el usuario ésta logueado (un panel de control por ejemplo) o incluso que solo puedan ser accedidas por determinados tipos de usuarios. Para conseguir esto con Angular se usan los guards. Dentro de los guards hay 4 tipos principales:

- CanActivate: mira si el usuario puede acceder a una página determinada.
- CanActivateChild: mira si el usuario puede acceder a las páginas hijas de una determinada ruta.
- CanDeactivate: mira si el usuario puede salir de una página, es decir, podemos hacer que aparezca un mensaje, por ejemplo, de comfirmación, si el usuario tiene cambios sin guardar.
- CanLoad: sirve para evitar que la aplicación cargue los módulos perezosamente si el usuario no está autorizado a hacerlo.

## Interface:
#### Una interfaz es una especificación que identifica un conjunto relacionado de propiedades y métodos a ser implementados por una clase. 

- Una clase dada acepta soportar esta especificación cuando implementa esa interfaz. 
- La interfaz es simplemente la definición de las propiedades y métodos, y la clase que implementa esa interfaz tiene el código real para cada una de esas propiedades y métodos definidos. 
- En Typescript, se puede utilizar la propia interfaz como un tipo de datos. 
- Las interfaces en Typescript son un concepto de tiempo de desarrollo solamente.
  
## Pipe:
#### Los pipes son una herramienta de Angular que nos permite transformar visualmente la información, por ejemplo, cambiar un texto a mayúsculas o minúsculas, o darle formato de fecha y hora.

- Angular trae una serie de pipes por defecto.
  - Uppercase y Lowercase
  - Slice
  - Decimal
  - Percent
  - Currency
  - Json
  - Async
  - Date  
- También nos permite construir nuestros propios pipes. 

## Service:
#### Un servicio es un proveedor de datos.

- Mantiene lógica de acceso a ellos y operativa relacionada con el negocio y las cosas que se hacen con los datos dentro de una aplicación. 
- Los servicios serán consumidos por los componentes, que delegarán en ellos la responsabilidad de acceder a la información y la realización de operaciones con los datos.