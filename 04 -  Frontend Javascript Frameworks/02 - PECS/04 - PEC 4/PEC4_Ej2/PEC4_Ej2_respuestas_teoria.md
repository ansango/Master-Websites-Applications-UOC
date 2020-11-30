# PEC4_Ej2_respuestas_teoria

1. ¿Qué comando debes utilizar para crear un nuevo proyecto Angular utilizando Angular CLI denominado vinoteca? (A las preguntas que te haga Angular CLI puedes contestar utilizando las opciones por defecto). Explica brevemente la estructura y ficheros que ha generado Angular CLI:

    Para crear un nuevo proyecto en Angular utilizamos el comando ng new "nombre del proyecto", para arrancarlo por defecto con ng serve o npm start

   - Ficheros de configuración en la raíz del proyecto:

     - .browserslistrc: archivo de configuración de Browserlist para configurar las versiones de los navegadores compatibles.
     - .editorconfig: ayuda a mantener estilos de codificación para múltiples desarrolladores que trabajan en el mismo proyecto a través de varios IDES.
     - .gitignore: archivo de configuración de git para evitar que rastree determinados archivos y directorios.
     - angular.json: proporciona una configuración por defecto de la configuración de todo el espacio de trabajo y de proyectos específicos para las herramientas de construcción y desarrollo proporcionadas por Angular CLI.
     - karma.conf.js: archivo de configuración de Karma (nos proporciona entorno de testing, selección de framework de testing en js, etc...).
     - package-lock.json: package-lock.json sencillamente evita este comportamiento general de actualizar versiones minor o fix de modo que cuando alguien clona nuestro repositorio y ejecuta npm install en su equipo, npm examinará package-lock.json e instalará la versión exacta de los paquete que nosotros habíamos instalado, ignorando así los ^ y ~ de package.json.
     - package.json: package.json es un fichero que contiene información acerca de tu proyecto (nombre, versión, etc) además de listar los paquetes de los que depende.
     - README.md: archivo de documentación con instrucciones para ejecutar el proyecto, escrito en lenguaje markdown.
     - tsconfing.app.json: archivo de configuración adicional de Typescript que permite ajustar la configuración en base a la aplicación, es útil cuando tenemos múltiples aplicaciones en el mismo espacio de trabajo.
     - tsconfig.json: es el que indica en un proyecto que se está trabajando con Typescript, especifica los archivos raíz y las opciones del compilador necesarias para compilar el proyecto.
     - tsconfig.spec.json: es el archivo de configuración para los test de Typescript de la aplicación.
     - tslint.json: Es una herramienta de tipo Linter para Typescript que se encarga de vigilar como escribimos nuestro código, en base a las reglas que hemos especificado.

   - Directorio node_modules: es un directorio que se crea en la carpeta raíz de nuestro proyecto cuando instalamos paquetes o dependencias mediante npm.

   - Directorio e2e: es un directorio para el desarrollo de las pruebas.

   - Directorio src: es el lugar donde colocamos el código fuente del proyecto.

     - index.html: html de entrada donde se cargará nuestra SPA mediante Webpack.
     - main.ts: este fichero es el encargado de definir que módulo es el de arranque.
     - styles.css: este fichero nos sirve para meter estilos globales e importar otros archivos de estilo.
     - test.ts: archivo requerido por karma.conf.js y que carga recursivamente todos los archivos .spec y framework
     - polyfills.ts: archivo para configuración de polyfills, que hacen que la aplicación sea compatible con diferentes navegadores.
     - Directorio environments: es el directorio que nos permite crear los entornos de nuestra aplicación, por ejemplo: desarrollo, preproducción y producción.
     - Directorio assets: aqui tendremos recursos como imágenes, iconografía o similar.
     - Directorio app: aquí encontramos toda la implementación de los componentes principales, template y estilos de cada uno.
       - Ficheros app.component:
         - css: es el archvivo donde se almacenan todos los estilos que se van a aplicar solo a dicha componente, es decir que quedarán encapsulados en la componente 'AppComponent'.
         - html: es el archivo que tiene la parte visual de nuestra componente 'AppComponent' y está constituido mayormente por código HTML.
         - spec.ts: es el archivo que tiene por objetivo definir código de testing para medir el correcto funcionamiento de la componente.
         - ts: es el archivo donde se declara la clase AppComponent.
       - Fichero app.module.ts: este archivo nos permite importar todos los elementos que usaremos en una aplicación angular, nos permite importar componentes, módulos y servicios.

2. Explica cada uno de los siguientes decoradores generados por Angular CLI, detallando cada una de las propiedades que se definen en:

   - app.module.ts - @NgModule (declarations, imports, providers, bootstrap):

     - imports: sirve para importar otros módulos que usaremos en este NgModule.
     - declarations: se utiliza para importar componentes (~ vistas: las clases para mostrar datos), pero también directivas y pipes, que usaremos en nuestros templates. Generalmente pondremos los componentes , directivas y pipes que pertenecen a este modulo. Por ejemplo, aquí se declaro mi AppComponent. Si no declaramos aquí nuestros componentes no podremos usarlos en nuestras plantillas HTML.
     - providers: sirve para importar servicios(~ modelos: las clases para obtener y manejar datos). Una vez importados son accesibles en cualquier parte de nuestra app.
     - exports: sirve para declarar elementos de tu modulo(componentes, directivas, modulos o pipes) que serán visibles y usables en las plantillas de componentes de otros NgModules (es opcional). Para que otros módulos puedan usarlos, primero deben importar este modulo. Esto nos permite controlar que partes de nuestro modulo son accesibles desde otros módulos.
     - boostrap: La vista o componente principal de la aplicación, llamado componente raíz. Por defecto es nuestro AppComponent.

   - app.component.ts - @Component (selector, templateUrl, styleUrls):

     - selector: El selector CSS que identifica esta directiva en una plantilla y activa la instanciación de la directiva. Nos permite definir como Angular identifica cuando el componente es usado en HTML.
     - templateUrl: La ruta relativa o la URL absoluta de un archivo de plantilla para un componente angular.
     - styleUrls: una o más rutas relativas o URLs absolutas para los archivos que contienen hojas de estilo CSS para usar en este componente.

3. ¿Es posible poder inyectar el template y los estilos en línea de un componente sin necesidad de especificarlos en templateUrl, styleUrls? ¿Es recomendable hacer esto?

    Podemos inyectar el template y los estilos inline utlizando template y styles, no deberemos hacerlo utilizando a la vez templateUrl y stylesUrls. No es recomendable ya que es mejor encapsularlos en mediante templateUrl y stylesUrls, si la lógica de nuestro componente crece y tenemos implementados, el template y los estilos dentro del mismo es probable que sea menos mantenible a lo largo del tiempo. Pero esto no tiene un impacto final en el rendimiento de la aplicación.
