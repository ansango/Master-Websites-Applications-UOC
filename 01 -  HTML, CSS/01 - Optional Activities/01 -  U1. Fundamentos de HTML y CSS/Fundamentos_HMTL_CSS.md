## U1. Fundamentos de HTML y CSS

#### 1.  Comencemos con HTML: ¿Tenéis claro qué es una etiqueta, un elemento y un atributo? Explicad los tres conceptos en el foro en vuestras propias palabras.

   - Etiqueta: es un fragmento de texto rodeado por corchetes < >. Son la forma que tenemos para escribir código HTML. Pueden ser de dos tipos:

      * de apertura `<div>` que nos indica cuando se inicia la etiqueta,
      * de cierre `</div>` quenos indica el final del alcance de la misma.

      Algunas etiquetas no tienen etiquetas de cierre, como <img>

   - Elemento: hace referencia a las partes que componen un documento HTML, formado por etiquetas de apertura, atributos, texto encerrado por la etiqueta y una etiqueta de cierre.

   - Atributo: es una característica de las eqtiquetas que nos sirve para especificar detalles de ésta, por ejemplo, color, ancho, alto, alineación, etc. En muchos casos estos atributos son necesarios para que la etiqueta funcione. Ejemplo:

      `<img src="./folder/ansan.jpg">` 
      
      En este caso indicamos con el atributo la ruta donde se encuentra almacenada o alojada la imagen <img>

#### 2. Metadatos en HTML: Escoged cuatro páginas al azar y utilizad la opción de ver el código fuente de vuestro navegador para ver qué elementos hay en el "head" e intentad analizar su significado.

   - **vuejs.org**
      * `<meta charset="utf-8">` : determina el tipo de carácteres del documento (Unicode utf-8)
      * `<meta name="description" content="Vue.js - The Progressive JavaScript Framework">` : descripción del sitio web para posicionamiento SEO
      * `<meta name="viewport" content="width=device-width, initial-scale=1">` : determina el ancho del viewport en escala 1.0
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

   - **netflix.com/es**
      * `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">` : determinación del tipo de contenido y caracteres.
      * `<meta http-equiv="X-UA-Compatible" content="IE=edge">` : compatibilidad con IE Edge.
      * `<title>Netflix España - Ver series en línea, ver películas en línea</title>` titulo de Netflix España para SEO
      * `<meta content="ver películas, películas en línea, películas online, ver TV, TV en línea, TV online, series en línea, series online, ver series, películas en streaming, TV en streaming, streaming inmediato, ver en línea, ver online, películas, ver películas en España, ver TV en línea, ver TV online, sin descargas, películas de duración completa, películas completas" name="keywords">` : descripción de la página para posicionamiento SEO en motores de busqueda.
      * `<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">`: determinación del viewport
      
      * AppLinks: son URLs HTTP que se pueden utilizar para enlazar con el contenido dentro de una aplicación nativa si está instalada en el dispositivo:
      
         * `<meta property="al:ios:app_store_id" content="363590051">` : AppLinks para AppleStore
         * `<meta property="al:ios:app_name" content="Netflix">`: AppLinks para aplicaciones iOS
         * `<meta property="al:android:url" content="nflx://www.netflix.com/?locale=es-ES">` : AppLinks para aplicaciones Android

   - **developer.mozilla.org** (Además de algunas ya mencionadas)
      * `<meta name="robots" content="index, follow">` :se utilizan como crawlers por moteres de busqueda para la indexación de contenido.
      * `<link rel="preload" href="/static/fonts/locales/ZillaSlab-Bold.subset.e96c15f68c68.woff2" as="font" type="font/woff2" crossorigin />` : precarga del recurso tipografico.
      * `<link href="/static/build/styles/mdn.cb0e95fe43cc.css" rel="stylesheet" type="text/css" />` : hoja de estilos utilizada por el documento html.
      * `<meta name="google-site-verification" content="Phj8dHc2oKwic3FGPsKIhdOBk_1wnCTnKwjcjiLgJPc">` : verificación de las propiedades de la consola de Google.

   - **google.com**
      * `<meta content="origin" name="referrer">` : referrer funciona con la mayoría de los navegadores para pasar la información refererida de una manera definida por el usuario
      * `<meta content="Google.es permite acceder a la información mundial en castellano, catalán, gallego, euskara e inglés." name="description">` :  funciona con la mayoría de los navegadores para pasar la información refererida de una manera definida por el usuario.
      * `<meta content="/images/branding/googleg/1x/googleg_standard_color_128dp.png" itemprop="image">` : contenido de imagen png
      * `<meta content="noodp" name="robots">` : es una directiva que indica a los rastreadores de los motores de búsqueda que no utilicen metadatos para los títulos o fragmentos que se muestran en los resultados de búsqueda de la página en particular.

#### 3. Fundamentos de HTML: texto, títulos, listas, énfasis. En el material se plantean unas actividades bajo el epígrafe "Aprendizaje activo" (Active learning). Resolvedlas y plantead en el foro los posibles problemas con los que os hayáis encontrado y explicad lo que hayáis aprendido.

[Developer Mozilla](https://developer.mozilla.org/es/docs/Learn/HTML/Introduccion_a_HTML/texto)

##### Aprendizaje Activo: Dando estructura a nuestro contenido. 
```html
   <h1>My short story</h1>
   <p>I am a policewoman and my name is Trish.</p>
   <p>My legs are made of cardboard and I am married to a fish.</p>
``` 
##### Aprendizaje activo: Marcando una lista desordeanda.

```html
   <ul>  
     <li>milk</li>  
     <li>eggs</li>  
     <li>bread</li>
     <li>humous</li>
   </ul>
``` 
   

#### Aprendizaje activo: Marcando una lista ordenada

   `<ol>`  
         `<li>Drive to the end of the road</li>`  
         `<li>Turn right</li>`  
         `<li>Go straight across the first two roundabouts</li>`  
         `<li>Turn left at the third roundabout</li>`  
         `<li>The school is on your right, 300 meters up the road</li>`  
   `</ol>`  

#### Aprendizaje activo: Marcando nuestra página de receta
* 
   `<h1>Quick humous recipe</h1>`  
         `<p>This recipe makes quick, tasty humous, with no messing. It has been adapted from a number of different recipes that I have read over the years.</p>`
         `<p>Humous is a delicious thick paste used heavily in Greek and Middle Eastern dishes. It is very tasty with salad, grilled meats and pitta breads.<p>`  
      
   `<h2>Ingredients</h2>`  
     `<ul>`  
         `<li>1 can (400g) of chick peas (garbanzo beans)</li>`  
         `<li>175g of tahini</li>`  
         `<li>6 sundried tomatoes</li>`  
         `<li>Half a red pepper</li>`  
         `<li>A pinch of cayenne pepper</li>`  
         `<li>1 clove of garlic</li>`  
         `<li>A dash of olive oil</li>`  
      `</ul>`  

   `<h2>Instructions</h2>`  
      `<ol>`  
         `<li>Remove the skin from the garlic, and chop coarsely</li>`  
         `<li>Remove all the seeds and stalk from the pepper, and chop coarsely</li>`  
         `<li>Add all the ingredients into a food processor</li>`  
         `<li>Process all the ingredients into a paste.</li>`  
         `<li>If you want a coarse "chunky" humous, process it for a short time</li>`  
         `<li>If you want a smooth humous, process it for a longer time</li>`  
      `</ol>`  

   `<p>For a different flavour, you could try blending in a small measure of lemon and coriander, chili pepper, lime and chipotle, harissa and mint, or spinach and feta cheese. Experiment and see what works for you.</p>`  

   `<h2>Storage</h2>`  

   `<p>Refrigerate the finished humous in a sealed container. You should be able to use it for about a week after you've made it. If it starts to become fizzy, you should definitely discard it.</p>`  

   `<p>Humous is suitable for freezing; you should thaw it and use it within a couple of months.</p>`  

#### 4. Primeros pasos con CSS. Escoged un texto de pocas líneas y convertidlo en un documento HTML; cambiad su aspecto mediante CSS con las técnicas que se explican en el material. Enviad un mensaje al foro en el que planteéis los posibles problemas con los que os hayáis encontrado; adjuntad al mensaje los dos archivos resultantes o bien recurrid a un servicio de pruebas de código, como por ejemplo, codepen.io o cssdeck.com, donde podréis obtener un enlace para compartir en el foro.

#### 5. Cómo se estructura el CSS. Responded a las siguientes preguntas:

   - ¿Tenéis claro qué es una regla CSS? Describid su sintaxis.

   - En la actividad del apartado anterior, ¿qué método habéis usado para aplicar estilos al HTML? ¿Qué otros métodos podríais haber utilizado?

   - ¿Habéis entendido en qué consiste la especificidad? Preparad un ejemplo donde se muestre el funcionamiento de este mecanismo de resolución de conflictos.
