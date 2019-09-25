## U1. Fundamentos de HTML y CSS

#### 1.  Comencemos con HTML: ¿Tenéis claro qué es una etiqueta, un elemento y un atributo? Explicad los tres conceptos en el foro en vuestras propias palabras.

   - Etiqueta: es un fragmento de texto rodeado por corchetes < >. Son la forma que tenemos para escribir código HTML. Pueden ser de dos tipos:

      * de apertura `<div>` que nos indica cuando se inicia la etiqueta,
      * de cierre `</div>` quenos indica el final del alcance de la misma.

      Algunas etiquetas no tienen etiquetas de cierre, como <img>

   - Elemento:

   - Atributo: es una característica de las eqtiquetas que nos sirve para especificar detalles de ésta, por ejemplo, color, ancho, alto, alineación, etc. En muchos casos estos atributos son necesarios para que la etiqueta funcione. Ejemplo:

      `<img src="./folder/ansan.jpg">` 
      
      En este caso indicamos con el atributo la ruta donde se encuentra almacenada o alojada la imagen <img>

#### 2. Metadatos en HTML: Escoged cuatro páginas al azar y utilizad la opción de ver el código fuente de vuestro navegador para ver qué elementos hay en el "head" e intentad analizar su significado.

   - vuejs.org:

      * `<meta charset="utf-8">` : Determina el tipo de carácteres del documento (Unicode utf-8)
      * `<meta name="description" content="Vue.js - The Progressive JavaScript Framework">` : Descripción del sitio web para posicionamiento SEO
      * `<meta name="viewport" content="width=device-width, initial-scale=1">` : Determina el ancho del viewport en escala 1.0
      * `<link rel="alternate" hreflang="x-default" href="https://vuejs.org/index.html">` : enlace al sitio web según idioma por defecto.
      * `<link rel="alternate" hreflang="zh" href="https://cn.vuejs.org/index.html">` : enlace al sitio web según el idioma chino.

      * Etiquetas meta para viralizar contenido por medio de twitter:

         * `<meta name="twitter:card" content="summary">`
         * `<meta name="twitter:title" content="Vue.js">`
         * `<meta name="twitter:description" content="Vue.js - The Progressive JavaScript Framework">`
         * `<meta name="twitter:image" content="https://vuejs.org/images/logo.png">`
      
      * `<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600|Roboto Mono&amp;display=swap" rel="stylesheet" type="text/css">` : estilo de fuentes desde el cdn de Google como centro de recursos
      * `<link href="https://maxcdn.bootstrapcdn.com" rel="preconnect" crossorigin="">` : acceso al cdn como fuente para la utilización del framework Bootstrap

      * `<link rel="stylesheet" href="/css/index.css">` : acceso a página principal de estilos CSS, utilizada como plantilla fuente o base.
      * `<script async="" src="https://www.google-analytics.com/analytics.js"></script>` : script para el rastreo analítico por parte de Google

   - nuxtjs.org:

   - developer.mozilla.org:

   - google.com:

#### 3. Fundamentos de HTML: texto, títulos, listas, énfasis. En el material se plantean unas actividades bajo el epígrafe "Aprendizaje activo" (Active learning). Resolvedlas y plantead en el foro los posibles problemas con los que os hayáis encontrado y explicad lo que hayáis aprendido.

#### 4. Primeros pasos con CSS. Escoged un texto de pocas líneas y convertidlo en un documento HTML; cambiad su aspecto mediante CSS con las técnicas que se explican en el material. Enviad un mensaje al foro en el que planteéis los posibles problemas con los que os hayáis encontrado; adjuntad al mensaje los dos archivos resultantes o bien recurrid a un servicio de pruebas de código, como por ejemplo, codepen.io o cssdeck.com, donde podréis obtener un enlace para compartir en el foro.

#### 5. Cómo se estructura el CSS. Responded a las siguientes preguntas:

   - ¿Tenéis claro qué es una regla CSS? Describid su sintaxis.

   - En la actividad del apartado anterior, ¿qué método habéis usado para aplicar estilos al HTML? ¿Qué otros métodos podríais haber utilizado?

   - ¿Habéis entendido en qué consiste la especificidad? Preparad un ejemplo donde se muestre el funcionamiento de este mecanismo de resolución de conflictos.
