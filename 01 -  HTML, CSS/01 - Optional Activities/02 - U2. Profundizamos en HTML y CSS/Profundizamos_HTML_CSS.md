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

[Documentación Mozilla - Img](https://developer.mozilla.org/es/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)

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

Mediante el uso del servicio de validación de marcas del W3C (https://validator.w3.org/) comprobad si las páginas de inicio de la web de la UOC (http://www.uoc.edu), la de Mosaic (http://mosaic.uoc.edu) y otras tres páginas web de vuestra elección contienen errores. Comentad en el foro los resultados obtenidos.
