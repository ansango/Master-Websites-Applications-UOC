Ideas clave

    Un gestor de paquetes nos sirve para instalar y gestionar dependencias externas a nuestro proyecto. Puede tratarse de una dependencia necesaria para el desarrollo, tales como un optimizador de imágenes, o de una librería que utilicéis en el front-end, como por ejemplo Vue, React o Angular.

    Utilizaremos npm, un gestor de paquetes muy popular. Una alternativa compatible con npm, aunque con pequeñas diferencias en el funcionamiento, es Yarn.


Actividad 1

Comprueba si tienes instalado npm en tu ordenador. Para hacerlo, ejecuta la orden npm -v al terminal. Si te sale un número de versión, es que ya tienes npm instalado y por lo tanto puedes ir a la siguiente actividad. Si no, te saldrá un error.

Si no tienes npm instalado, es necesario que lo instales. Para hacerlo, ve a la página de descargas de Node.js e instala la versión adecuada para tu sistema operativo. Atención: si eres usuario de Windows NO debes instalar la versión para Windows, sino la versión adecuada a la distribución de Linux que hayas instalado, según las instrucciones de esta página.

Por ejemplo, si has instalado Ubuntu, es necesario que ejecutes las órdenes:
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
el terminal del subsistema de Linux.

Una vez finalizada la instalación, comprueba que se ha realizado correctamente ejecutando la orden npm -v.


Actividad (PEC)
Actividad no evaluable
marzo 2020
abril 2020
mayo 2020
junio 2020
julio 2020
agosto 2020
24
2
9
16
23
30
6
13
20
27
4
11
18
25
1
8
15
22
29
6
13
20
27
3
10
17
24
Actividad (PEC)
Actividad no evaluable
M2. Un workflow moderno de desarrollo front-end

    Descargar en PDF
    Imprimir
    ¡Completada!

    Inicio:
    02/03/20
    Fin:
    13/04/20

    Presentación

    En este segundo módulo de la asignatura Herramientas HTML y CSS I empezaremos a tocar código y nos familiarizaremos con un conjunto de herramientas moderno que permite que el desarrollo sea más eficiente.

    Si alguna vez ha desarrollado el front-end de una página web habréis trabajado con un editor de texto editando ficheros HTML, CSS y JavaScript. Actualmente los desarrolladores web utilizamos herramientas algo más complejas que el simple editor de texto. Si bien de entrada puede parecer complicar un proceso que es relativamente sencillo, el uso de herramientas avanzadas facilita a la larga el desarrollo, ya que permite la gestión de dependencias, la automatización de ciertas tareas, y el uso de lenguajes y utilidades más avanzadas.

    En primer lugar, será necesario que os familiaricéis con el uso del terminal si no sois usuarios habituales. Hará falta que sepáis navegar por la estructura de directorios y ejecutar órdenes desde el terminal.

    A continuación nos plantearemos qué flujo de trabajo (o workflow) necesita un proyecto en función de sus características. Una vez ya conozcáis su funcionamiento básico, empezaremos a ver algunas de las herramientas básicas para el desarrollo front-end, como los gestores de paquetes como npm y los module bundlers como Parcel.

    Finalmente, desarrollaremos el workflow diseñado, y crearemos un boilerplate con Parcel desde cero, que nos servirá para desarrollar futuras aplicaciones. Un boilerplate es una plantilla de estructura de ficheros y conjunto de herramientas a partir del cual se puede empezar un desarrollo con facilidad. Se convertirá, pues, en el punto de inicio desde donde se realizarán las PECs de este curso.

    Como el producto de esta asignatura será una página web, durante este módulo la publicaremos a internet.

    Como siempre, los materiales de aprendizaje, disponibles en la sección Recursos básicos, y en la sección Contenidos y actividades encontraréis diferentes ideas y propuestas de actividades sencillas para consolidar los conocimientos adquiridos con los recursos propuestos. Si tenéis  cualquier duda sobre alguna de las actividades propuestas o no sabéis la respuesta a alguna de las preguntas, abrid un hilo en el foro para hablar de ello.
    Objetivos de aprendizaje
        Familiarizarse con el uso del terminal.
        Conocer el funcionamiento y la utilidad de los gestores de paquetes como npm.
        Conocer el funcionamiento y la utilidad de los module bundlers como Parcel.
        Conocer las diferencias entre entornos de desarrollo y de producción.
        Crear un boilerplate basado en Parcel que permita desarrollar proyectos web basados en un workflow moderno.
        Publicar una web a internet.
    Recursos básicos

    En este módulo empezaremos a trabajar con código HTML, CSS y JavaScript. Para editarlo, deberéis disponer de un buen editor de texto, como Visual Studio Code, Sublime Text, Atom o cualquier otro que uséis habitualmente y que tenga características similares.

    Los usuarios de Windows necesitaréis, en primer lugar, instalar el subsistema de Linux para Windows, siguiendo estas instrucciones. Si sois usuario de MacOS o Linux, ya disponéis de las herramientas necesarias para comenzar.

    Las lecturas que le llevarán a alcanzar los objetivos de aprendizaje de este módulo son las siguientes:

    Introducción al uso del terminal: https://medium.com/@grace.m.nolan/terminal-for-beginners-e492ba10902a
    Introducción a los gestores de paquetes: http://codylindley.com/techpro/2013_04_12__package-managers-an-introducto/
    Sobre las herramientas de desarrollo front-end: https://medium.freecodecamp.org/making-sense-of-front-end-build-tools-3a1b3a87043b

    Las documentaciones de:
    npm: https://docs.npmjs.com/
    Parcel: https://parceljs.org/getting_started.html

    Atención: las documentaciones técnicas de los lenguajes y herramientas que figuran aquí encima son muy extensas y contienen mucha más información de la necesaria para alcanzar los objetivos de aprendizaje de este módulo. Las documentaciones las ha de usar como referencia y no como lectura secuencial obligatoria, y sólo será necesario que entendáis y aprendáis lo necesario para este curso. Por estos motivos, se recomienda la lectura de estos documentos y la realización de las actividades de acuerdo con las pautas propuestas en la sección Contenidos y actividades. Os animamos a que, además, leáis y aprendáis todo lo que os vaya interesando más y que complemente los contenidos de este curso.
    Contenidos y actividades
    Uso del terminal
    Ideas clave

    El terminal es la herramienta que nos permitirá ejecutar todas las otras herramientas de este módulo. Por lo tanto es necesario que os habituéis y conozcáis el funcionamiento básico.

    Actividad

    Si eres usuario de Windows y no lo has hecho todavía, instala el subsistema de Linux para Windows, siguiendo estas instrucciones. Cada vez que nos referimos en el terminal, en el caso de Windows, querrá decir acceder al subsistema de Linux en modo terminal.

    Lee el documento Introducción al uso del terminal y realiza los ejemplos que allí se proponen. En la parte superior está la sección TL;DR con un resumen de las órdenes más importantes que deberías conocer.

    En guide.bash.academy encontrarás mucha más información sobre el uso del terminal.

     
    Sobre los gestores de paquetes
    Ideas clave
        Un gestor de paquetes nos sirve para instalar y gestionar dependencias externas a nuestro proyecto. Puede tratarse de una dependencia necesaria para el desarrollo, tales como un optimizador de imágenes, o de una librería que utilicéis en el front-end, como por ejemplo Vue, React o Angular.
        Utilizaremos npm, un gestor de paquetes muy popular. Una alternativa compatible con npm, aunque con pequeñas diferencias en el funcionamiento, es Yarn.

     
Actividad 1

    Comprueba si tienes instalado npm en tu ordenador. Para hacerlo, ejecuta la orden npm -v al terminal. Si te sale un número de versión, es que ya tienes npm instalado y por lo tanto puedes ir a la siguiente actividad. Si no, te saldrá un error.

    Si no tienes npm instalado, es necesario que lo instales. Para hacerlo, ve a la página de descargas de Node.js e instala la versión adecuada para tu sistema operativo. Atención: si eres usuario de Windows NO debes instalar la versión para Windows, sino la versión adecuada a la distribución de Linux que hayas instalado, según las instrucciones de esta página.

    Por ejemplo, si has instalado Ubuntu, es necesario que ejecutes las órdenes:
    curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
    sudo apt-get install -y nodejs
    el terminal del subsistema de Linux.

    Una vez finalizada la instalación, comprueba que se ha realizado correctamente ejecutando la orden npm -v.



Actividad 2

    https://medium.freecodecamp.org/making-sense-of-front-end-build-tools-3a1b3a87043b

    Como lectura introductoria, lee el artículo I finally made sense of front end build tools. You can, too. Esta lectura presenta los tipos de herramientas que utilizaremos en este curso y también mucha de la terminología que usaremos, por lo tanto es importante que lo leas con atención.

Actividad 3

Lee las siguientes secciones de la documentación de npm:

    About npm

    https://docs.npmjs.com/about-npm/index.html

    Packages and modules > About packages and modules

    https://docs.npmjs.com/about-packages-and-modules


    Packages and modules > Creating a package.json file

    https://docs.npmjs.com/creating-a-package-json-file

    Packages and modules > Downloading and installing packages locally

    https://docs.npmjs.com/downloading-and-installing-packages-locally

    Packages and modules > Uninstalling packages and dependencies

    https://docs.npmjs.com/uninstalling-packages-and-dependencies

    Packages and modules > Updating packages downloaded from the registry

    https://docs.npmjs.com/updating-packages-downloaded-from-the-registry


Ten a mano la documentación de la sección Resolving EACCES permissions errors when installing packages globally por si tienes problemas más adelante.

https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally

También te recomendamos las secciones relativas al concepto de gestores de paquetes y sobre npm del documento Package Managers: An Introductory Guide For The Uninitiated Front-End Developer.

http://codylindley.com/techpro/2013_04_12__package-managers-an-introducto/
