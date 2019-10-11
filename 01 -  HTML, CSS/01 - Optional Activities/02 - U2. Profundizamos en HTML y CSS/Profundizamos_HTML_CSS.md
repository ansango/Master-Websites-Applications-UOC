## U2. Profundizamos en HTML y CSS

#### 1.  Hipervínculos.

Los hipervínculos (o hiperenlaces, o simplemente enlaces) son lo que hace que la web sea la web. Veremos qué son exactamente, la sintaxis que debemos usar para crearlos, qué es una URL y las mejores prácticas para crearlos.

En el material se plantean dos actividades bajo el epígrafe "Aprendizaje activo" (Active learning). Resolvedlas y plantead en el foro los posibles problemas con los que os hayáis encontrado y explicad lo que hayáis aprendido.

[Documentación Mozilla - Links HTML](https://developer.mozilla.org/es/docs/Learn/HTML/Introduccion_a_HTML/Creating_hyperlinks)

##### Aprendizaje activo: crea tu propio ejemplo de link.

[Codepen - Link Html](https://codepen.io/ansango/pen/pozMWxG)

```html
    <!DOCTYPE html>
        <html lang="en-US">
            <head>
                <meta charset="utf-8">
                <title>My test page</title>
            </head>
            <body>
                <h1>This is a link test</h1>

                <a href="https://www.mozilla.org/media/img/home/dino.d3d01561e288.svg">
                  <img src="mozilla-image.png" alt="dinosaurio">
                </a>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non est ut justo aliquet efficitur quis ut urna. Proin ut nibh lectus. Etiam pulvinar maximus dui, eu rhoncus turpis fermentum ut. Vivamus nec nibh risus. Aenean pellentesque vitae lectus aliquam bibendum. Etiam posuere nunc ac tellus malesuada scelerisque. Cras ut lacinia risus, in congue magna. Nullam posuere vestibulum semper. Vestibulum nec ipsum vel metus consequat consectetur vel congue tellus. Vestibulum molestie lacus sed feugiat vehicula. Proin vitae mauris eget diam eleifend tempus.<p>

                <p>Curabitur cursus sed nisl et commodo. Curabitur dignissim blandit velit, id vulputate risus fermentum pharetra. Vestibulum aliquet commodo nibh, sit amet iaculis tellus lacinia id. Duis sed tellus eu est tincidunt auctor. Donec egestas ligula eu arcu vulputate, vitae pulvinar massa consequat. Suspendisse fermentum venenatis mauris, non vulputate massa. Aenean pretium malesuada metus, sed posuere leo accumsan in. Suspendisse ut leo diam. Donec maximus ex sed fermentum varius. <a href="https://developer.mozilla.org" title="Este enlace nos dirige en una nueva pestaña a la página de desarrolladores de Mozilla" target="_blank">Nam pulvinar mollis lectus. Pellentesque ut dignissim nisl.</a> Vivamus finibus est nec neque tincidunt, non pellentesque libero tempor. Phasellus aliquam ex vitae tortor mollis ornare. In eget aliquet enim, at gravida leo. Ut finibus interdum turpis, quis malesuada felis laoreet sed. Morbi lorem enim, luctus et est ut, imperdiet finibus nisi.</p>

            </body>
        </html>
``` 

##### Aprendizaje activo: creando un menú de navegación.

Contenido en el directorio de este documento.

Para este ejercicio, deberás crear links a distintas páginas con un menú de navegación creando lo que se conoce como web multi-página. Esta una de la manera común de crear las páginas web — usaremos la misma estructura de página en todas las páginas, incluida la que contiene el menú de navegación, cuando los usuarios pulsan sobre los links tendrán la sensación de que están en la misma página, y que solo cambia el contenido que se está mostrando.

Tendrás que hacer copias de las siguientes cuatro páginas a nivel local, en el mismo directorio (comprueba el directorio navigation-menu-start para el listado completo):

- index.html
- projects.html
- pictures.html
- social.html

Tareas:

1. Añade una lista no numerada en el lugar adecuado de la página, que contenga los nombres de las páginas a las que enlazas. Un menú de navegación es normalmente una lista de enlaces (links), por lo que esto es correcto semánticamente.

2. Convierte cada nombre en un enlace a su página.

3. Copia el menú de navegación en cada una de las páginas.

4. En cada página, elimina solo el link que hace referencia a sí misma. — es confuso y no tiene sentido que una página se llame a sí misma, y la falta del enlace actúa como recordatorio de la página en la que se está en cada momento.

#### 2. Más marcado de texto.

En la primera unidad vimos las maneras básicas de etiquetar texto, pero hay muchas más. En este artículo veremos listas de descripciones, citas, abreviaturas, cómo marcar los detalles de un contacto o cómo mostrar código informático, entre otros.

Realizad las actividades que se proponen en los apartados"Citas" (Quotations) y "Abreviaturas"  (Abbreviations) de este artículo. ¿Qué etiquetas habéis usado en cada caso? Preparad una lista de descripción con cada una de ellas y enviad el código al foro (como fichero adjunto, o como enlace a un servicio de pruebas de código).

[Documentación Mozilla - Advanced Text Formatting](https://developer.mozilla.org/es/docs/Learn/HTML/Introduccion_a_HTML/Advanced_text_formatting)

#### Tipos de formateo avanzado.

1. Listas de Descripción

```html
    <dl>
        <dt>soliloquio</dt>
        <dd>In drama, where a character speaks to themselves, representing their inner thoughts or feelings and in the process relaying them to the audience (but not to other characters.)</dd>
        <dt>monologue</dt>
        <dd>In drama, where a character speaks their thoughts out loud to share them with the audience and any other characters present.</dd>
        <dt>aside</dt>
        <dd>In drama, where a character shares a comment only with the audience for humorous or dramatic effect. This is usually a feeling, thought, or piece of additional background information.</dd>
    </dl>
``` 

2. Citas
    - Blockquotes

        ```html
            <blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
            <p>The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or <em>HTML Block 
                Quotation Element</em>) indicates that the enclosed text is an extended quotation.</p>
            </blockquote>
        ``` 

    - Inline quotations

        ```html
           <p>The quote element — <code>&lt;q&gt;</code> — is <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">intended 
           for short quotations that don't require paragraph breaks.</q></p>
        ``` 

    - Citas

        ```html
            <p>According to the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
                <cite>MDN blockquote page</cite></a>:
            </p>

            <blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
                <p>The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or <em>HTML Block
                Quotation Element</em>) indicates that the enclosed text is an extended quotation.</p>
            </blockquote>

            <p>The quote element — <code>&lt;q&gt;</code> — is <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">intended
            for short quotations that don't require paragraph breaks.</q> -- <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">
            <cite>MDN q page</cite></a>.</p>
        ``` 

3. Abreviaciones

```html
    <p>We use <abbr title="Hypertext Markup Language">HTML</abbr> to structure our web documents.</p>

    <p>I think <abbr title="Reverend">Rev.</abbr> Green did it in the kitchen with the chainsaw.</p>
``` 

4. Contactos

```html
    <address>
      <p>Chris Mills, Manchester, The Grim North, UK</p>
    </address>
``` 

5. Superíndice y subíndice

```html
    <p>My birthday is on the 25<sup>th</sup> of May 2001.</p>
    <p>Caffeine's chemical formula is C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.</p>
    <p>If x<sup>2</sup> is 9, x must equal 3 or -3.</p>
``` 

6. Código

```html
    <pre><code>var para = document.querySelector('p');

    para.onclick = function() {
      alert('Owww, stop poking me!');
    }</code></pre>

    <p>You shouldn't use presentational elements like <code>&lt;font&gt;</code> and <code>&lt;center&gt;</code>.</p>

    <p>In the above JavaScript example, <var>para</var> represents a paragraph element.</p>


    <p>Select all the text with <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd>.</p>

    <pre>$ <kbd>ping mozilla.org</kbd>
    <samp>PING mozilla.org (63.245.215.20): 56 data bytes 64 bytes from 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>
``` 

7. Tiempo y fechas

```html
    <!-- Standard simple date -->
    <time datetime="2016-01-20">20 January 2016</time>
    <!-- Just year and month -->
    <time datetime="2016-01">January 2016</time>
    <!-- Just month and day -->
    <time datetime="01-20">20 January</time>
    <!-- Just time, hours and minutes -->
    <time datetime="19:30">19:30</time>
    <!-- You can do seconds and milliseconds too! -->
    <time datetime="19:30:01.856">19:30:01.856</time>
    <!-- Date and time -->
    <time datetime="2016-01-20T19:30">7.30pm, 20 January 2016</time>
    <!-- Date and time with timezone offset-->
    <time datetime="2016-01-20T19:30+01:00">7.30pm, 20 January 2016 is 8.30pm in France</time>
    <!-- Calling out a specific week number-->
    <time datetime="2016-W04">The fourth week of 2016</time>
``` 

##### Aprendizaje activo: Marcar un conjunto de definiciones.

```html
    <dl>
        <dt>Bacon</dt>
        <dd>The glue that binds the world together.</dd>
        <dt>Eggs</dt>
        <dd>The glue that binds the cake together.</dd>
        <dt>Coffee</dt>
        <dd>The drink that gets the world running in the morning.</dd>
        <dd>A light brown color.</dd>
    </dl>
``` 

##### Aprendizaje activo: ¿Quién ha dicho eso?

Convierta el párrafo del medio en una cita en bloque, que incluye un atributo cite.
Convierta parte del tercer párrafo en una cita en línea, que incluye un atributo cite.
Incluir un elemento <cite> para cada enlace

```html
    <p>Hello and welcome to my motivation page. As <a href="http://www.brainyquote.com/quotes/authors/c/confucius.html"><cite>Confucius</cite></a> once said:</p>
    <blockquote cite="http://www.brainyquote.com/quotes/authors/c/confucius.html">
        <p>It does not matter how slowly you go as long as you do not stop.</p>
    </blockquote>

    <p>I also love the concept of positive thinking, and <q cite="http://www.affirmationsforpositivethinking.com/index.htm">The Need To Eliminate Negative Self Talk</q> (as mentioned in <a href="http://www.affirmationsforpositivethinking.com/index.htm"><cite>Affirmations for Positive Thinking</cite></a>.)</p>
``` 


##### Aprendizaje activo: marcar una abreviatura

```html

    <p><abbr title="National Aeronautics and Space Administration">NASA</abbr> sure does some exciting work.</p>

``` 

#### 3. Imágenes.

Las imágenes son un contenido importante de las páginas web. Pueden ser incorporados a las páginas incrustándolas mediante el uso del elemento HTML img o mediante el uso de la propiedad CSS background-image.

Escribid el código necesario para incrustrar en un archivo HTML la imagen siguiente: http://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Pic_Montferrat.jpg/320px-Pic_Montferrat.jpg. Se trata de la fotografía del glaciar de Ossoue en el Pirineo frances; las dimensiones de la imagen son de 320x240 píxeles. Enviad el código al foro como fichero adjunto o como enlace a un servicio de pruebas de código.

[Codepen - Link Html](https://codepen.io/ansango/pen/pozMLav)

#### 4. Estructuremos nuestras páginas y sitios web.

En HTML disponemos de mecanismos para separar las diferentes partes de una página web. Por un lado disponemos de elementos semánticos que nos permiten marcar cabeceras, menús de navegación o contenido principal, entre otros (con los elementos header, nav y main, entre otros) y por otro, elementos no semánticos que necesitaremos para separar las cosas en bloques cuando los elementos semánticos predeterminados no son suficientes.

[Documentación Mozilla - Estructura web y documentación](https://developer.mozilla.org/es/docs/Learn/HTML/Introduccion_a_HTML/estructura)

1. header (encabezado)

Normalmente formado por una gran franja que cruza la parte superior de la página con un encabezado y/o un logo. Esta parte suele permanecer invariable mientras navegamos entre página y página dentro de un sitio web.

`<header>`

2. navigation bar (barra/menú de navegación)

Son los enlaces a las principales secciones del sitio web; normalmente está formado por un menú con botones, enlaces o pestañas. Al igual que el encabezado, este contenido normalmente permanece invariable en las diferentes páginas del sitio — tener un menú inconsistente en nuestra web, inducirá a los usuarios a confusión y frustración. Muchos diseñadores web consideran el menú de navegación como parte del encabezado en lugar de un componente individual, pero esto no es necesario.

`<nav>`

3. main content (contenido principal)

Es la parte ancha central de nuestra página y contiene el contenido único de la misma, por ejemplo el video que quieres ver, la narración que estás leyendo, el mapa que quieres consultar, los titulares de las noticias, etc. Esta parte es distinta de una página a otra dentro de nuestro sitio web.

Contendrá el contenido único de esta página. Utilizaremos <main> solamente una vez para cada página, y lo situaremos inmediatamente interior al elemento <body>. Mejor que no lo anidemos con otros elementos

`<main>`

- article

    <article> Encuadra un bloque de contenido que tiene sentido por sí mismo aparte del resto de la página (por ejemplo una entrada en un blog).

- section

    Es parecido al elemento <article>, pero se usa más para agrupar cada parte de la página que, por su funcionalidad, constituye una sección en sí misma (por ejemplo un mini-mapa, o un conjunto de titulares y resúmenes). Se considera una buena práctica comenzar cada una de estas secciones con un título heading; nótese que podemos subdividir artículos <article>s en distintas secciones <section>s, o también <section>s en distintos artículos <article>s, dependiendo del contexto.

- div & span

    elemento no semántico

- br & hr

    Elementos para el fin de línea y el salto de párrafo.


4. sidebar (menú/barra lateral)

Suele incluir algún tipo de información adicional, enlaces, citas, ads comerciales, etc. Normalmente está relacionado con el contenido principal de la página (por ejemplo en una página de noticias, la barra lateral podría contener la biografía del autor o enlaces a artículos relacionados) pero en otras ocasiones encontraremos elementos recurrentes como un menú de navegación secundario.

`<aside>`

5. footer (pie de página)

Parte inferior de la página que generalmente contiene la letra pequeña, el copyright o la información de contacto. Es el sitio donde colocar información común (al igual que en el encabezado) pero normalmente esta información no es tan importante o es secundaria para la propia página. El pie también se suele usar para propósitos SEO, incluyendo enlaces de acceso rápido al contenido más popular.

`<footer>`

##### Visitad sitios web que utilicéis con frecuencia y descubrid sus secciones. Utilizando la opción de ver el código fuente del navegador, comprobad si se utilizan las etiquetas apropiadas para el marcado de esas secciones.

**eldiario.es**

    - Utiliza `<header>` para la cabeza, donde incluye el banner, una barra de navegación y el login para socios y suscriptores.
    - Utiliza `<main>` para el contenido de las publicaciones de los artículos del periódico, organizado mediante un grid interno.
    - Utiliza `<footer>` para publicitar sus aplicaciones y los hipervínculos a las redes sociales.
    
**elpais.com**

    - `<main>` para el contenido de las publicaciones de los artículos del periódico, organizado mediante un grid interno.
    - `<aside>` para publicaciones publicitarias y titulares.
    - `<section>` para determinar bloques de contenido como actualidad, cuerpo, cierre y opinion.
    - `<footer>` que determina el pie donde encontramos los cŕeditos del grupo Prisa.
    
**elmundo.es**

    - Además de las anteres secciones y etiquetas, se utilizan:
        * div para elementos vacios de contenido, pero utilizados para el grid por ejemplo.

#### 5. Cuando tenemos problemas con HTML:

Este contenido os puede resultar muy útil cuando algo falle y tengáis dificultades para encontrar qué y cómo ha fallado exactamente.

[Documentación Mozilla - Debugging HTML](https://developer.mozilla.org/es/docs/Learn/HTML/Introduccion_a_HTML/Debugging_HTML)

Mediante el uso del servicio de validación de marcas del W3C (https://validator.w3.org/) comprobad si las páginas de inicio de la web de la UOC (http://www.uoc.edu), la de Mosaic (http://mosaic.uoc.edu) y otras tres páginas web de vuestra elección contienen errores. Comentad en el foro los resultados obtenidos.

* www.uoc.edu fallos:

    - Line 5, Column 69: end tag for "meta" omitted, but OMITTAG NO was specified
        
        `<meta http-equiv="content-type" content="text/html; charset=UTF-8">`
    
        El mensaje de error indica la solución: sustituir la terminación > por />. Se debería arreglar las otras metaetiquetas de la misma manera.

    - Line 17, Column 80: end tag for "link" omitted, but OMITTAG NO was specified
        `<link href="//www.uoc.edu/portal/ca/index.html" hreflang="ca" rel="alternate">`
        `<link href="//www.uoc.edu/portal/es/index.html" hreflang="es" rel="alternate">`
        `<link href="//www.uoc.edu/portal/en/index.html" hreflang="en" rel="alternate">`
        `<link href="//www.uoc.edu/portal/en/index.html" hreflang="x-default" rel="alternate">`
        
        El mensaje de error indica la solución: sustituir la terminación > por />

    - Line 81, Column 13: character "<" is the first character of a delimiter but occurred as data
    	`while (i < clen) {`

        Necesitamos envolver nuestro código (por ejemplop JS) con `<script type="text/javascript"> </script>`

    - Line 201, Column 5: end tag for "br" omitted, but OMITTAG NO was specified
        `<br><br>`

        El mensaje de error indica la solución: sustituir la terminación > por />

    - Line 208, Column 9: end tag for "tbody" which is not finished
    	`</tbody>`

        Este error le indica que el validador llegó al final de un elemento `<tbody>` y encontró que este elemento no contenía lo que se esperaba. Esto puede ocurrir si incluye inadvertidamente un elemento vacío que debería contener elementos hijo o si el marcado dentro del elemento no es válido.

* mosaic.uoc.edu

    - Errors:

        Error: A meta element with an http-equiv attribute whose value is X-UA-Compatible must have a content attribute with the value IE=edge.
	        `<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">`
    
            La etiqueta se utiliza para hacer que IE se comporte lo mejor que pueda, en modo "estándar", y  si el autor sabe lo que está haciendo (la página está   diseñada para trabajar en que), la etiqueta es útil, debido a las molestas características de IE 9.

            La validación es una herramienta, no un fin, y no hay ningún mérito en conseguir una "validación limpia" de una heurística experimental mal documentada,  comprobando contra un versión desconocida de algunos trabajos en curso (que es lo que es HTML5)

        Bad value //fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic|Oswald:300,400 for attribute href on element link: Illegal character in query: | is not allowed.
            
            `<link href='//fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic|Oswald:300,400' rel='stylesheet' type='text/css'>`

            URL codifica el caracter | (pipe caracteres) en el atributo href (%7C). Hay que reemplazar el carácter | por su correspondiente carácter UTF-8, lo que da como resultado

            `<link rel="stylesheet" type="text/css" href="family=Lora:400,700,400italic,700italic%7Oswald:300,400">`

        Bad value 2019-10-9 for attribute datetime on element time: The literal did not satisfy the time-datetime format.
            `<time class="datepub" datetime="2019-10-9">`

            El atributo datetime no tiene el formato correcto. La fecha indicada debería ser: 2019-10-09

        Element div not allowed as child of element small in this context. (Suppressing further errors from this subtree.)
            `<div class="license">`
            `<div class="legal">`
            `<ul class="corp-logos">`

            El elemento div no se permite como hijo de un elemento pequeño, por lo que habría que envolerlo por ejemplo en un <li> si estamos usando <ul>

  - Warnings:

        The type attribute is unnecessary for JavaScript resources.
            `<script type="text/javascript">`
            `<script type='text/javascript' src='http://mosaic.uoc.edu/wp-content/themes/mosaicuoc/library/js/libs/modernizr.custom.99715.js'>`
            `<script type="text/javascript">`
            `<script type="text/javascript" src="//www.uoc.edu/portal/system/modules/edu.uoc.portal.presentations/resources/js/cookiesUOC.js">`
            `<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js'>`
            `<script type='text/javascript' src='http://mosaic.uoc.edu/wp-content/themes/mosaicuoc/library/js/scripts-ck.js'>`
            `<script type='text/javascript' src='http://mosaic.uoc.edu/wp-includes/js/wp-embed.min.js'>`
            `<script type="text/javascript">`

            En estos casos el atributo type no es necesario para los recursos utilizados de JavaScript.
    
        The type attribute for the style element is not needed and should be omitted
            `<style type="text/css">`

            Igual que los casos anteriores el atributo type en style deberia de ser omitido.

        Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections.
            `<section class="articles inner">`

            La sección carece de un encabezamiento, por lo que se recomienda la utilización de las etiquetas h2 a h6 para identificar las secciones correspondientes.

        The navigation role is unnecessary for element nav
            `<nav class="main-nav" role="navigation" id="menu">`

            En este caso no es necesario agregar el navigation como tipo de atributo de role.

* www.un.org (Naciones Unidas)

    - Errors:

        Start tag seen without seeing a doctype first. Expected `<!DOCTYPE html>`
            `<html><head>`

        The element button must not appear as a descendant of the a element.
            `<button class="ar btn un-language-btn animated10 fadeInUp" lang="ar">`
            `<button class="zh btn un-language-btn animated11 fadeInUp" lang="zh">`
            `<button class="en btn un-language-btn animated12 fadeInUp" lang="en">`
            `<button class="fr btn un-language-btn animated13 fadeInUp" lang="fr">`
            `<button class="ru btn un-language-btn animated14 fadeInUp" lang="ru">`
            `<button class="es btn un-language-btn animated15 fadeInUp" lang="es">`
            `<div class="col-lg-8 col-md-7 col-sm-4 col-xs-1">`
   
    - Warnings:

        Consider adding a lang attribute to the html start tag to declare the language of this document.
            `<html><head>`

        The type attribute is unnecessary for JavaScript resources.
            `<script type="text/javascript" async="" src="https://ssl.google-analytics.com/ga.js">`
            `<script type="text/javascript">`

* www.nasa.gov

    - Errors:

        X-UA-Compatible HTTP header must have the value IE=edge, was IE=edge,chrome=1
            `<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />`

        Duplicate attribute class.
            `ics-menu" class="Array">`

    - Warnings:

        The language attribute on the script element is obsolete. You can safely omit it.
            `<script language="javascript" id="_fed_an_ua_tag" src="https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency=NASA&yt=true&dclink=true">`

        The type attribute is unnecessary for JavaScript resources.
            `<script type="text/javascript">`

        The banner role is unnecessary for element header
            `<header class="l-header container-fluid" role="banner">`

        The contentinfo role is unnecessary for element footer.
            `<footer class="l-footer container-fluid" role="contentinfo">`

* www.instagram.com

    - Errors:
        
        A link element with an as attribute must have a rel attribute that contains the value preload.
            `<link rel="prefetch" as="script" href="/static/bundles/metro/FeedPageContainer.js/328a1ba0f957.js" type="text/javascript" crossorigin="anonymous" />`
        
        Bad value stylesheet for attribute as on element link.
            `<link rel="prefetch" as="stylesheet" href="/static/bundles/metro/FeedPageContainer.css/3c72e515e33c.css" type="text/css" crossorigin="anonymous" />`
            
        A link element with an as attribute must have a rel attribute that contains the value preload.
            `<link rel="prefetch" as="stylesheet" href="/static/bundles/metro/FeedPageContainer.css/3c72e515e33c.css" type="text/css" crossorigin="anonymous" />`
    
    - Warnings:
    
        The type attribute is unnecessary for JavaScript resources.
            `<script type="text/javascript">`
            `<script type="text/javascript" src="/static/bundles/metro/Polyfills.js/7cabc91f583c.js" crossorigin="anonymous">`
            `<script type="text/javascript" src="/static/bundles/metro/ConsumerLibCommons.js/ba240dadeb8e.js" crossorigin="anonymous">`
        
        The charset attribute on the script element is obsolete.
            `<script type="text/javascript" src="/static/bundles/metro/Consumer.js/3bdefd9f6226.js" crossorigin="anonymous" charset="utf-8" async="">`
            `<script type="text/javascript" src="/static/bundles/metro/LandingPage.js/6926adde5791.js" crossorigin="anonymous" charset="utf-8" async="">`
            
#### 6. Cascada y herencia:

En este contenido veremos cómo funcionan la cascada y la herencia, dos de los mecanismos fundamentales de CSS (tanto como para ser "la C de CSS"), que controlan cómo se aplica el CSS a nuestro HTML.

También veremos el concepto de especifidad, de nuevo un mecanismo esencial a la hora de aplicar CSS a HTML. A estas alturas de curso el CSS con que trabajamos es todavía muy simple y la especifidad no nos planteará grandes problemas. Pero más adelante, cuando tengamos docenas, o centenares de clases y reglas CSS, la especificidad será "culpable" de múltiples dolores de cabeza. ¡Recordadlo!

[Documentación Mozilla - Cascada y herencia](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)

Responded a las siguientes preguntas:

##### ¿Es cierta la afirmación de que todas las propiedades CSS se heredan? Razonad vuestra respuesta con algún ejemplo.
##### Si en el código que ilustra el apartado sobre especificidad (Specificity), añadimos a la propiedad "color" del selector "h2" "!important", ¿qué ocurre con el aspecto de los diversos "h2"? ¿Por qué?
##### ¿Qué significa que el selector "#especial" es más específico que el selector ".especial"?

#### 7. Selectores CSS:

A la hora de elegir a qué partes de nuestro HTML queremos aplicar una regla CSS tenemos una gran variedad de selectores para elegir. En este contenido —estructurado en cinco pequeños artículos— veremos todos los selectores posibles en detalle.

[Documentación Mozilla - CSS Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors)

[Documentación Mozilla - Selectores de tipo, clase e ID](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)

[Documentación Mozilla - Selectores de atributo](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)

[Documentación Mozilla - Pseudoclases y pseudoelementos](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)

[Documentación Mozilla - Combinadores](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

##### Escoged un texto de pocas líneas y convertidlo en un documento HTML. Añadid estilos CSS haciendo uso de los diversos tipos de selectores que habéis aprendido en este apartado. Como mínimo deberíais hacer uso de 5 tipos de selectores diferentes. Enviad el resultado comentado al foro.


#### 8. Accesibilidad:

La accesibilidad es un concepto importante y debe ser tenido siempre en cuenta para garantizar que los sitios web puedan ser utilizados por el mayor número de personas posible,  independientemente de cuáles sean sus capacidades o del contexto en el que se realice su uso.

[Documentación Mozilla - Accesibilidad](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility)