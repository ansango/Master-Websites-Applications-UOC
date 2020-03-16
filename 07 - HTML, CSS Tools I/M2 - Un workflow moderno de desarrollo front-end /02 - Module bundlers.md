Ideas clave

    Un module bundler nos permite automatizar una serie de tareas así como gestionar los assets de las dependencias que hemos instalado con npm.

    Utilizaremos Parcel como module bundler. Otro module bundler muy conocido, y el más usado en la industria, es Webpack. Sin embargo, resulta más complicado de configurar.

    Las tareas que automatiza un module bundler pueden variar en función del entorno de destino de nuestra aplicación. Actualmente, los module bundlers realizan estas tareas de forma transparente al usuario, aunque permiten la configuración para casos especiales.

    En entorno de producción, un module bundler realizará tareas que compilen, concatenar y minifiquin las hojas de estilos y los scripts, además de otros procesos de optimización sobre imágenes y demás assets.

    En entorno de desarrollo, el objetivo del module bundler es ofrecer la mejor experiencia posible al desarrollador. Una de las principales funcionalidades en este entorno es lanzar un servidor de desarrollo y monitorizar los cambios en los archivos para refrescar el navegador automáticamente. En este entorno, el bundler no optimiza nuestros assets para ofrecernos una mayor velocidad de desarrollo.

Actividad 1

    Lee y entiende los conceptos básicos de Parcel.

    https://parceljs.org/getting_started.html

    Sigue los pasos hasta Multiple entry files (sin incluir este apartado). Al final, deberías haber podido lanzar un servidor de desarrollo. Fíjate que deberás usar varias herramientas, como npm, además de instalar Parcel y crear algunos archivos HTML y JavaScript.

    Sigue ahora las instrucciones del apartado Adding parcel to your project. ¿Qué cambios has introducido o han aparecido en el archivo package.json?