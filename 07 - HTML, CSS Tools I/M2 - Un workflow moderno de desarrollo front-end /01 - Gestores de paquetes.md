

     
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
