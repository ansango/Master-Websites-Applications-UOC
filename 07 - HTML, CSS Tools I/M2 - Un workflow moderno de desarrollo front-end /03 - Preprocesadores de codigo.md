Sobre los preprocesadores de código

Ideas clave

    Históricamente, cada navegador ha ejecutado HTML, CSS y JavaScript de formas ligeramente diferentes (a veces estas diferencias no han sido tan ligeras). Esto es especialmente evidente en JavaScript. Para complicarlo aún más, también existen variaciones entre versiones del mismo navegador. Afortunadamente, sin embargo, estas diferencias se han ido igualado los últimos años.

    Los navegadores sólo son capaces de procesar y ejecutar HTML, CSS y JavaScript. Por lo tanto, cualquier lenguaje debe terminar convertido en uno de estos tres para ser comprendido por los navegadores.

    Entendemos por preprocessados ​​(a veces también llamados compiladores o transpiladors, aunque técnicamente hay ciertos matices) aquellas herramientas que reciben archivos escritos en varios lenguajes y los convierten en código comprensible por el navegador.

    Los preprocesadores que generan CSS usan para añadir funcionalidades que no históricamente no existían de otra manera: por ejemplo, el uso de variables e imbricación.  En este módulo trabajaremos con PostCSS.

    Los preprocesadores que generan JavaScript suelen ser usados ​​para transformar lenguajes completamente diferentes a JavaScript, y también para transformar versiones   modernas del lenguaje en versiones aptas para todos los navegadores. En este módulo configuraremos Babel, aunque en esta asignatura no lo veremos a fondo.

    Existen otros preprocesadores tanto para CSS y JS como para HTML: TypeScript, para JavaScript; SASS/SCSS, para CSS; o Pug, para HTML, son algunas de las alternativas   más populares a día de hoy.

    Un workflow moderno de desarrollo front-end debe incluir la configuración de estas herramientas, de forma que la persona que esté trabajando pueda aprovechar sus   beneficios de forma transparente.

    Tan importante como la configuración del workflow es su documentación. Hay que tener en cuenta el contexto de un equipo, donde varias personas y roles deben poder  entrar en el proyecto y comprender qué herramientas tienen a su disposición. Si os interesa el tema, la tercera charla del Modern Web Event 2018 organizador por la  UOC, llamada Front-end, herramientas y consenso, hace un buen repaso a la evolución de la industria en este aspecto.
    A día de hoy, la mayoría de proyectos incluyen preprocesadores para CSS y JS, y en menor frecuencia, de HTML.

    https://mosaic.uoc.edu/2018/12/26/modern-web-event-2018/

Actividad 1

    Parcel ya incorpora una configuración básica de Babel por defecto.

    https://parceljs.org/javascript.html#default-babel-transforms

    Realiza las siguientes actividades y responde las siguientes preguntas:

    Ejecuta la orden npm run build. Observa cómo, además del código JavaScript que hemos escrito en la actividad anterior, el archivo resultado incluye más líneas de   código que Parcel añade automáticamente. Habitualmente, el código escrito por el usuario comienza en la segunda línea del archivo.
    
    Ahora, sustituye el contenido del archivo index.js en la raíz del proyecto por el siguiente:

        const name = 'world'
        console.log(`Hello ${name`)
    
    Ejecuta la orden npm run dev. Comprueba que la funcionalidad (escribir un texto en la consola de las herramientas de desarrolladores) no ha cambiado.

    Ejecuta la orden npm run build. ¿Qué diferencias hay respecto el código JavaScript anterior generado por Parcel?

Actividad 2

    Una práctica habitual es indicar sobre qué versiones de navegadores debe ser compatible el código que procesan los preprocesadores por medio de los module bundlers.    Esta funcionalidad se implementa utilizando Browserslist.

    Añade un archivo llamado .browserslistrc (cuenta, el nombre comienza con un punto!) A la raíz del proyecto. En este archivo, introduce en ella las siguientes cuatro    líneas:

    last 4 version
    > 2%
    not dead
    IE 11

    ¿Sabrías explicar en una frase qué navegadores soportará nuestro boilerplate? A partir de este momento, Babel tendrá en cuenta esta configuración a la hora de  transformar el código JavaScript de nuestro proyecto.

    https://github.com/browserslist/browserslist


Actividad 3

    En esta actividad entenderemos el uso de los preprocesadores de CSS y los añadiremos a nuestro boilerplate.

    Lee los siguientes contenidos:

    El artículo An Introduction to PostCSS.

    https://www.sitepoint.com/an-introduction-to-postcss/

    El artículo Autoprefixer: A Postprocessor for Dealing with Vendor Prefixes in the Best Possible Way.

    https://css-tricks.com/autoprefixer/

    El apartado PostCSS de la documentación de Parcel.

    https://parceljs.org/css.html#postcss
    
    Realiza las siguientes actividades y responde las siguientes preguntas:

    Como habrá visto recomendado en la documentación de Parcel, ejecuta la siguiente orden: npm install --save-dev autoprefixer.
    Añade un archivo llamado .postcssrc (cuenta, el nombre comienza con un punto!) A la raíz del proyecto. En este archivo, introduce en ella las siguientes líneas:

    {
      "plugins": {
        "autoprefixer": true
      }
    }
    Agregar las siguientes líneas al index.html entre las etiquetas HTML y BODY:

    <head>
      <link rel="stylesheet" href="style.css">
    </head>

    A continuación, crea un archivo llamado style.css en la raíz del proyecto, y añadir las siguientes líneas:

    body {
      height: 100vh;
      color: #1f1f1f;
      background: linear-gradient(to bottom, #bada55, #c0ffee);
    }

    Ejecuta la orden npm run build. Como hemos hecho anteriormente, comprueba el resultado del archivo style.css creado en la carpeta dist/. ¿Qué diferencias ves? ¿Cuáles  de los cambios crees que son responsabilidad de PostCSS y el Autoprefixer? Sabrías encontrar otra propiedad que necesite ser modificada por el Autoprefixer y otra que   no lo necesite?