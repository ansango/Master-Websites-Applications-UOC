## U2. Profundizamos en HTML y CSS

#### 1.  Hipervínculos.

Los hipervínculos (o hiperenlaces, o simplemente enlaces) son lo que hace que la web sea la web. Veremos qué son exactamente, la sintaxis que debemos usar para crearlos, qué es una URL y las mejores prácticas para crearlos.

En el material se plantean dos actividades bajo el epígrafe "Aprendizaje activo" (Active learning). Resolvedlas y plantead en el foro los posibles problemas con los que os hayáis encontrado y explicad lo que hayáis aprendido.

[Documentación Mozilla - Links HTML](https://developer.mozilla.org/es/docs/Learn/HTML/Introduccion_a_HTML/Creating_hyperlinks)

##### Aprendizaje activo: crea tu propio ejemplo de link

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

##### Aprendizaje activo: creando un menú de navegación

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

#### 2. Más marcado de texto

[Documentación Mozilla - Advanced Text Formatting](https://developer.mozilla.org/es/docs/Learn/HTML/Introduccion_a_HTML/Advanced_text_formatting)

En la primera unidad vimos las maneras básicas de etiquetar texto, pero hay muchas más. En este artículo veremos listas de descripciones, citas, abreviaturas, cómo marcar los detalles de un contacto o cómo mostrar código informático, entre otros.

Realizad las actividades que se proponen en los apartados"Citas" (Quotations) y "Abreviaturas"  (Abbreviations) de este artículo. ¿Qué etiquetas habéis usado en cada caso? Preparad una lista de descripción con cada una de ellas y enviad el código al foro (como fichero adjunto, o como enlace a un servicio de pruebas de código).

##### Aprendizaje activo: Marcar un conjunto de definiciones

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

#### 3. Imágenes


[Documentación Mozilla - Img](https://developer.mozilla.org/es/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)

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

```html
   <ol>
      <li>Drive to the end of the road</li>
      <li>Turn right</li>
      <li>Go straight across the first two roundabouts</li>
      <li>Turn left at the third roundabout</li>
      <li>The school is on your right, 300 meters up the road</li>
   </ol>
```
   

#### Aprendizaje activo: Marcando nuestra página de receta

```html
   <h1>Quick hummous recipe</h1>

      <p>This recipe makes quick, tasty humous, with no messing. It has been adapted from a number of different recipes that I have read over the years.</p>
      <p>Humous is a delicious thick paste used heavily in Greek and Middle Eastern dishes. It is very tasty with salad, grilled meats and pitta breads.</p>

   <h2>Ingredients</h2>

      <ul>
         <li>1 can (400g) of chick peas (garbanzo beans)</li>
         <li>175g of tahini</li>
         <li>6 sundried tomatoes</li>
         <li>Half a red pepper</li>
         <li>A pinch of cayenne pepper</li>
         <li>1 clove of garlic</li>
         <li>A dash of olive oil</li>
      </ul>

   <h2>Instructions</h2>

      <ol>
         <li>Remove the skin from the garlic, and chop coarsely.</li>
         <li>Remove all the seeds and stalk from the pepper, and chop coarsely.</li>
         <li>Add all the ingredients into a food processor.</li>
         <li>Process all the ingredients into a paste.</li>
         <li>If you want a coarse "chunky" humous, process it for a short time.</li>
         <li>If you want a smooth humous, process it for a longer time.</li>
      </ol>

   <p>For a different flavour, you could try blending in a small measure of lemon and coriander, chili pepper, lime and chipotle, harissa and mint, or spinach and feta cheese. Experiment and see what works for you.</p>

   <h2>Storage</h2>

   <p>Refrigerate the finished humous in a sealed container. You should be able to use it for about a week after you've made it. If it starts to become fizzy, you should definitely discard it.</p>

   <p>Humous is suitable for freezing; you should thaw it and use it within a couple of months.</p>
```

#### 4. Primeros pasos con CSS. Escoged un texto de pocas líneas y convertidlo en un documento HTML; cambiad su aspecto mediante CSS con las técnicas que se explican en el material.

[Codepen - First Steps CSS](https://codepen.io/ansango/pen/gOYEZvX)

#### 5. Cómo se estructura el CSS. Responded a las siguientes preguntas:

   - ¿Tenéis claro qué es una regla CSS? Describid su sintaxis.

      CSS es un conjunto de instrucciones al navegador sobre cómo mostrar un elemento concreto. Estas reglas dicen qué elementos de html deben tener estilos. La sintáxis se conforma de la siguiente manera:
      
      selector {
         propiedad: valor;
      }

      * selector: identifica los elementos HTML a los que se aplica la regla.
      * llaves contienen a:
         * propiedades: definen lo que se quiere hacer con los elementos seleccionados.
         * valores: son los que cambian cada una de las propiedades de los elementos.

      ```css
      h2 { 
         font-size: 1.5em; 
         color: red;
         }
      ```
   - En la actividad del apartado anterior, ¿qué método habéis usado para aplicar estilos al HTML? ¿Qué otros métodos podríais haber utilizado?

      En este caso el css ha sido creado en un archivo externo ```styles.css``` que es añadido en la cabecera del html (index.html), mediante la etiqueta siguiente:
      ```html
         <link rel="stylesheet" href="styles.css">
      ```

      Otras formas de añadir estilos a nuestro html son:

      * Introducir las etiquetas ```<style></style>`` en el documento html.

      * Introducir los estilos dentro de las etiquetas (no es recomendable porque dificultará el mantenimiento de los estilos).

   - ¿Habéis entendido en qué consiste la especificidad? Preparad un ejemplo donde se muestre el funcionamiento de este mecanismo de resolución de conflictos.

     * La especificidad hace referencia a la relevancia que tiene un estilo concreto de CSS sobre un elemento de la página al cual le están afectando varios estilos de CSS al mismo tiempo. Es decir, hace referencia al grado de importancia de un estilo sobre otro.

     * Cuanto mayor sea la especificidad que le estemos dando a un estilo, mayor será la probabilidad de que ese estilo sea el aplicado finalmente. Para ello, las reglas de CSS siguen un orden de prioridad.

     * El orden de prioridad va de la siguiente manera, de menor a mayor especificidad:

         * Selectores de título (p.ej: p) y pseudo-elementos (p.ej: :before)
         * Selectores de clase (p.ej: .ejemplo), selectores de atributos (p.ej: [type="text"] y pseudo-clases (p.ej: :focus)
         * Selectores ID (p.ej: #ejemplo)

      Sin embargo, además de todas estas especificidades, si utilizamos estilos inline estos sobrescribirán cualquier estilo de las páginas externas de CSS. Se podría decir que los estilos inline son los que tienen una mayor especificidad, por lo tanto, nunca debemos utilizar estilos inline en nuestra página.

      [Codepen - Especificidad CSS](https://codepen.io/ansango/pen/BaBbvmY)

      ```html
         <p id="parrafo" class="parrafo">Esto es una prueba</p>
         <p id="parrafo2" style="color: red">Esto es una prueba</p>
      ```
      ```css
        #parrafo{
          color: green;
         }

        #parrafo2{
          color: green;
         }

        .parrafo{
          color: red;
         }
      ```
