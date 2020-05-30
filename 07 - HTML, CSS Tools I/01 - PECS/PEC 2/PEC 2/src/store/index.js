import svg from "../assets/*.svg";
import png from "../assets/roadmap/*.png";
import jpg from "../assets/influence/*.jpg";
const svgImage = Object.values(svg);
const pngImage = Object.values(png);
const jpgImage = Object.values(jpg);

export default {
  roadmap: [
    {
      id: 1,
      name: "Basics",
      slug: "basics",
      image: svgImage[4],
      resume:
        "Aprende HTML, CSS, Javascript y Git, para organizar tu contenido web, servirlo, maquetarlo, programarlo. Haz que cada página sea única con unas líneas de código.",
      faqs: [
        {
          id: 1,
          question: "¿Qué es HTML?",
          answer:
            "Es la pieza más básica para la construcción de la web y se usa para definir el sentido y estructura del contenido en una página web.",
        },
        {
          id: 2,
          question: "¿Qué es CSS?",
          answer:
            "Es el lenguaje utilizado para describir la presentación de documentos HTML",
        },
        {
          id: 3,
          question: "¿Qué es Javascript?",
          answer:
            "Es un lenguaje script multi-paradigma, basado en prototipos, dinámico, soporta estilos de programación funcional, orientada a objetos e imperativa.",
        },
        {
          id: 4,
          question: "¿Qué es Git?",
          answer:
            "Es un software de control de versiones diseñado por Linus Torvalds",
        },
      ],
      tools: [
        {
          id: 1,
          name: "HTML",
          slug: "html",
          image: pngImage[0],
          video: "https://www.youtube.com/embed/pQN-pnXPaVg",
          icon: "fab fa-html5",
          url: "https://developer.mozilla.org/es/docs/web/html",
          text: [
            {
              id: 1,
              title: "Algo sobre HTML",
              paragraph1:
                "HTML, que significa Lenguaje de Marcado de Hipertextos (HyperText Markup Language), es la pieza más básica para la construcción de la web y se usa para definir el sentido y estructura del contenido en una página web. Otras tecnologías además de HTML son usadas generalmente para describir la apariencia/presentación de una página web (CSS) o su funcionalidad (JavaScript).",
              paragraph2:
                "Hipertexto, se refiere a los enlaces que conectan las páginas web entre sí, ya sea dentro de un mismo sitio web o entre diferentes sitios web. los vínculos son un aspecto fundamental de la web. Al subir contenido a Internet y vincularlo a páginas creadas por otras personas, te haces participante activo en la red mundial (World Wide Web).",
              paragraph3:
                "Un elemento HTML se separa de otro texto en un documento por medio de etiquetas, las cuales consisten en elementos rodeados por El nombre de un elemento dentro de una etiqueta no es sensible a mayúsculas. Esto es, puede ser escrito en mayúsculas, minúsculas o una combinación.",
            },
          ],
          options: [
            {
              name: "Introducción a HTML - MDN",
              description:
                "En su corazón, HTML es un lenguaje muy sencillo compuesto de elementos, que pueden ser aplicados a piezas de texto para darles un significado diferente en un documento (¿Esto es un párrafo? ¿Esto es una lista con viñetas? ¿Esto es parte de una tabla?), estructura un documento en secciones lógicas (¿Tiene una cabecera? ¿Tres columnas de contenido? ¿Un menú de navegación?) e incrusta contenido como imágenes y vídeos en una página. Este módulo introducirá los dos primeros de estos, e introduce conceptos fundamentales y la sintaxis que necesitas para entender HTML.",
              link:
                "https://developer.mozilla.org/es/docs/Learn/HTML/Introduccion_a_HTML",
            },
            {
              name: "Multimedia e incrustación - MDN",
              description:
                "Empezemos a aprender como hacer que la web se sienta viva, con mucho más contenido interesante! Este módulo enseña como incluir multimedia a tus páginas web, incluyendo cómo añadir imágenes de diferentes maneras, y cómo insertar un video, audio, e incluso otras páginas enteras.",
              link:
                "https://wiki.developer.mozilla.org/es/docs/Learn/HTML/Multimedia_and_embedding",
            },
            {
              name: "Tablas HTML - MDN",
              description:
                "Una tarea muy común en HTML es la estructuración de datos, y para esto hay múltiples elementos y atributos. Esto unido a un poco de CSS, hace que en HTML sea sencillo mostrar tablas con información sobre tu horario escolar, los horarios de una piscina local o las estadisticas de tu equipo de dinosaurios o fútbol preferido. Este módulo te guiará en todo lo que necesitas saber sobre la estructuración tabular de datos en HTML.",
              link:
                "https://wiki.developer.mozilla.org/es/docs/Learn/HTML/Tables",
            },
            {
              name: "Formularios HTML - MDN",
              description:
                "Esta guía está constituida por una serie de artículos que te ayudarán a dominar los formularios en HTML.   El formulario HTML  es una herramienta  cuya finalidad es interactuar con el usuario; sin embargo, debido a razones históricas y técnicas, no siempre resulta obvio como explotar su enorme potencial. En esta guía, cubriremos todos los aspectos de los formularios HTML, desde su estructura hasta su estilo, desde la manipulación de sus datos hasta los widgets personalizados. ¡Aprenderás a disfrutar de las grandes prestaciones que nos brindan!",
              link:
                "https://wiki.developer.mozilla.org/es/docs/Learn/HTML/Forms",
            },
            {
              name: "Usa HTML para resolver problemas comunes - MDN",
              description:
                "En el siguiente enlace encontrarás, link que brindan soluciones puntuales a los problemas más comunes a los que te enfrentarás a diario en HTML.",
              link:
                "https://wiki.developer.mozilla.org/es/docs/Learn/HTML/Howto",
            },
          ],
        },
        {
          id: 2,
          name: "CSS",
          slug: "css",
          image: pngImage[1],
          video: "https://www.youtube.com/embed/1Rs2ND1ryYc",
          icon: "fab fa-css3",
          url: "https://developer.mozilla.org/es/docs/web/css",
          text: [
            {
              id: 1,
              title: "¿Sabías que CSS...?",
              paragraph1:
                "Hojas de Estilo en Cascada (del inglés Cascading Style Sheets) o CSS es el lenguaje utilizado para describir la presentación de documentos HTML o XML, esto incluye varios lenguajes basados en XML como son XHTML o SVG. CSS describe como debe ser renderizado el elemento estructurado en pantalla, en papel, hablado o en otros medios.",
              paragraph2:
                "CSS es uno de los lenguajes base de la Open Web y posee una especificación estandarizada por parte del W3C. Desarrollado en niveles, CSS1 es ahora obsoleto, CSS2.1 es una recomendación y CSS3, ahora dividido en módulos más pequeños, está progresando en camino al estándar.",
              paragraph3:
                "CSS está diseñado principalmente para marcar la separación del contenido del documento y la forma de presentación de este, características tales como las capas o layouts, los colores y las fuentes.4​ Esta separación busca mejorar la accesibilidad del documento, proveer más flexibilidad y control en la especificación de características presentacionales, permitir que varios documentos HTML compartan un mismo estilo usando una sola hoja de estilos separada en un archivo .css, y reducir la complejidad y la repetición de código en la estructura del documento.",
            },
          ],
          options: [
            {
              name: "Primeros pasos con CSS - MDN",
              description:
                "Las hojas de estilo en cascada (CSS) se utilizan para dar estilo y diseño a las páginas web, por ejemplo, para alterar la fuente, el color, el tamaño y el espaciado de su contenido, dividirlo en varias columnas o añadir animaciones y otras características decorativas. Este módulo proporciona un comienzo suave en tu camino hacia el dominio de CSS con los fundamentos de cómo funciona, cómo se ve la sintaxis y cómo puedes empezar a usarlo para agregarle estilo al HTML.",
              link:
                "https://developer.mozilla.org/es/docs/Learn/CSS/Introduction_to_CSS",
            },
            {
              name: "Estilo de texto - MDN",
              description:
                "Con los conceptos básicos del lenguaje CSS cubiertos, el siguiente tema de CSS para concentrarse es estilizar texto — una de las cosas más comunes que hará con CSS. Aquí observamos los fundamentos para estilizar texto, incluyendo la configuración de fuente, negrita, cursiva, linea y espacios entre letras, sombras paralelas y otras funciones de texto. Completamos el módulo observando la aplicación de fuentes personalizadas en su página, y el diseño de listas y enlaces.",
              link:
                "https://developer.mozilla.org/es/docs/Learn/CSS/Styling_text",
            },
            {
              name: "Estilo de cajas - MDN",
              description:
                "Este módulo continúa donde dejaron los primeros pasos del CSS - ahora has ganado familiaridad con el lenguaje y su sintaxis, y tienes algo de experiencia básica en su uso, es hora de sumergirte un poco más. Este módulo mira la cascada y la herencia, todos los tipos de selector que tenemos disponibles, unidades, tamaño, estilo de fondos y bordes, depuración, y mucho más.",
              link:
                "https://developer.mozilla.org/es/docs/Learn/CSS/Styling_boxes",
            },
            {
              name: "Diseño de CSS - MDN",
              description:
                "Llegó el momento de explorar cómo colocar tus cajas en el lugar que elijas con respecto a la ventana principal y el resto de cajas. Hemos cubierto ya los prerrequisitos necesarios, así que vamos a sumergirnos en la maquetación CSS, fijándonos en diferentes configuraciones de visualización, métodos de maquetación tradicionales que implican floats y posicionamiento, así como a nuevas herramientas de maquetación en voga, como flexbox.",
              link:
                "https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout",
            },
          ],
        },
        {
          id: 3,
          name: "Javascript",
          slug: "javascript",
          image: pngImage[2],
          video: "https://www.youtube.com/embed/PkZNo7MFNFg",
          icon: "fab fa-js",
          url: "https://developer.mozilla.org/es/docs/web/javascript",
          text: [
            {
              id: 1,
              title: "¿Será cosa de mágia?",
              paragraph1:
                "JavaScript (JS) es un lenguaje ligero e interpretado, orientado a objetos con funciones de primera clase, más conocido como el lenguaje de script para páginas web, pero también usado en muchos entornos sin navegador, tales como node.js, Apache CouchDB y Adobe Acrobat. Es un lenguaje script multi-paradigma, basado en prototipos, dinámico, soporta estilos de programación funcional, orientada a objetos e imperativa. Leer más sobre JavaScript.",
              paragraph2:
                "El estándar de JavaScript es ECMAScript. Desde el 2012, todos los navegadores modernos soportan completamente ECMAScript 5.1. Los navegadores más antiguos soportan por lo menos ECMAScript 3. El 17 de Julio de 2015, ECMA International publicó la sexta versión de ECMAScript, la cual es oficialmente llamada ECMAScript 2015, y fue inicialmente nombrada como ECMAScript 6 o ES6. Desde entonces, los estándares ECMAScript están en ciclos de lanzamiento anuales. Esta documentación se refiere a la última versión del borrador, que actualmente es ECMAScript 2019.",
              paragraph3:
                "JavaScript no debe ser confundido con el lenguaje de programación Java. Ambos Java y Javascript son marcas registradas de Oracle en Estados Unidos y otros países. Sin embargo, los dos lenguajes de programación tienen muchas diferencias en las sintaxis, semántica y usos.",
            },
          ],
          options: [
            {
              name: "Primeros pasos con JavaScript - MDN",
              description:
                "En nuestro primer módulo de JavaScript, responderemos algunas preguntas fundamentales tales como: ¿Qué es JavaScript?, ¿Cómo se ve? y ¿Qué me permite hacer?, antes de empezar con tu primera experiencia práctica escribiendo en JavaScript. Luego de eso, comentaremos algunos bloques de código a detalle, tales como variables, cadenas, números y arreglos.",
              link:
                "https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps",
            },
            {
              name: "Elementos básicos de JavaScript - MDN",
              description:
                "En este modulo, continuamos nuestra cobertura de todas las características clave de JavaScript, tornando nuestra atención a tipos de código comúnmente encontrados tales como enunciados condicionales, bucles (loops), funciones, y eventos. Ya has visto estas cosas en este curso, pero solo de pasada aquí lo hablaremos mas explícitamente.",
              link:
                "https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks",
            },
            {
              name: "Introducción a los objetos JavaScript",
              description:
                "En JavaScript la mayoría de las cosas son objetos, desde características del núcleo de JavaScript como strings o arrays hasta las APIs del navegador hechas en JavaScript. Incluso puedes crear tus propios objetos para encapsular funciones y variables relacionadas en paquetes de manera eficiente, actuando como prácticos contenedores de datos. Si quieres avanzar en tu conocimiento del lenguaje es importante entender la naturaleza basada en objetos de JavaScript. Para esto hemos desarrollado este módulo. Primero te enseñaremos teoría de objetos y sintaxis en detalle, a continuación veremos como crear tus propios objetos.",
              link:
                "https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects",
            },
          ],
        },
        {
          id: 4,
          name: "Git",
          slug: "git",
          image: pngImage[3],
          video: "https://www.youtube.com/embed/bbanTh2CoAY",
          icon: "fab fa-git",
          url: "https://git-scm.com",
          text: [
            {
              id: 1,
              title: "Ooops, lo borré!",
              paragraph1:
                "Git es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia y la confiabilidad del mantenimiento de versiones de aplicaciones cuando éstas tienen un gran número de archivos de código fuente. Su propósito es llevar registro de los cambios en archivos de computadora y coordinar el trabajo que varias personas realizan sobre archivos compartidos.",
              paragraph2:
                "Al principio, Git se pensó como un motor de bajo nivel sobre el cual otros pudieran escribir la interfaz de usuario o front end como Cogito o StGIT. 3​Sin embargo, Git se ha convertido desde entonces en un sistema de control de versiones con funcionalidad plena. 4​Hay algunos proyectos de mucha relevancia que ya usan Git, en particular, el grupo de programación del núcleo Linux.",
              paragraph3:
                "El mantenimiento del software Git está actualmente (2009) supervisado por Junio Hamano, quien recibe contribuciones al código de alrededor de 280 programadores. En cuanto a derechos de autor Git es un software libre distribuible bajo los términos de la versión 2 de la Licencia Pública General de GNU.",
            },
          ],
          options: [
            {
              name: "Github",
              description:
                " Es una plataforma de desarrollo colaborativo, para alojar proyectos utilizando el sistema de control de versiones Git. Se utiliza principalmente para la creación de código fuente de programas de ordenador. El software que opera GitHub fue escrito en Ruby on Rails. Desde enero de 2010, GitHub opera bajo el nombre de GitHub, Inc. Anteriormente era conocida como Logical Awesome LLC. El código de los proyectos alojados en GitHub se almacena típicamente de forma pública, aunque utilizando una cuenta de pago, también permite hospedar repositorios privados.",
              link: "https://github.com/",
            },
            {
              name: "Bitbucket",
              description:
                "Es un servicio de alojamiento basado en web, para los proyectos que utilizan el sistema de control de versiones Mercurial y Git. Bitbucket ofrece planes comerciales y gratuitos. Se ofrece cuentas gratuitas con un número ilimitado de repositorios privados (que puede tener hasta cinco usuarios en el caso de cuentas gratuitas) desde septiembre de 2010,1​ los repositorios privados no se muestran en las páginas de perfil.",
              link: "https://bitbucket.org/",
            },
            {
              name: "Gitlab",
              description:
                "Es un servicio web de control de versiones y desarrollo de software colaborativo basado en Git. Además de gestor de repositorios, el servicio ofrece también alojamiento de wikis y un sistema de seguimiento de errores, todo ello publicado bajo una Licencia de código abierto. Además de ser un GIT, GitLab es una suite completa que permite gestionar, administrar, crear y conectar los repositorios con diferentes aplicaciones y hacer todo tipo de integraciones con ellas, ofreciendo un ambiente y una plataforma en cual se puede realizar las varias etapas de su SDLC/ADLC y DevOps.",
              link: "https://gitlab.com/",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Tooling",
      slug: "tooling",
      image: svgImage[5],
      resume:
        "Empaqueta tus apicaciones web. Convierte todos tus proyectos en un cohete que llegue rápidamente a todo el mundo y con la mitad de esfuerzo.",
      faqs: [
        {
          id: 1,
          question: "¿Qué es Testing?",
          answer:
            "Consiste en descomponer la base de código en partes más pequeñas (o unidades) y probarlas de forma aislada.",
        },
        {
          id: 2,
          question: "¿Qué es Pacakge Manager?",
          answer:
            "Es un software que te permite gestionar las dependencias (código externo escrito por ti o por otra persona) que tu proyecto necesita para funcionar correctamente.",
        },
        {
          id: 3,
          question: "¿Qué es Module Bundler?",
          answer:
            "Es una herramienta que toma trozos de JavaScript y sus dependencias y los agrupa en un solo archivo, generalmente para su uso en el navegador.",
        },
        {
          id: 4,
          question: "¿Qué es Linter?",
          answer:
            "Es una herramienta que analiza el código fuente para señalar errores de programación, fallos, errores de estilo y construcciones sospechosas.",
        },
      ],
      tools: [
        {
          id: 1,
          name: "Testing",
          slug: "test",
          image: pngImage[4],
          video: "https://www.youtube.com/embed/Bs68k6xfR3E",
          icon: "fas fa-vial",
          url:
            "https://guide.freecodecamp.org/software-engineering/unit-tests/",
          text: [
            {
              id: 1,
              title: "Test, test y test!",
              paragraph1:
                "Unit testing es un tipo de prueba que se encuentra en la parte inferior de la pirámide de pruebas de software. Consiste en descomponer la base de código en partes más pequeñas (o unidades) y probarlas de forma aislada. Dependiendo del tipo de lenguaje de programación (o paradigma) estos pueden ser contra cualquier cosa que se defina como unidad, aunque la práctica más común es contra las funciones.",
              paragraph2:
                "Las pruebas unitarias son una característica fundamental del enfoque de desarrollo basado en pruebas (TDD) para el desarrollo de programas informáticos. En este enfoque, el código para características o funciones específicas se escribe mediante el uso repetido de un ciclo muy corto. ",
              paragraph3:
                "En primer lugar, el desarrollador escribe un conjunto de pruebas unitarias automatizadas y se asegura de que fallen inicialmente. A continuación, el desarrollador implementa la mínima cantidad de código necesaria para superar los casos de prueba. Una vez que se ha validado que el código se está comportando como se esperaba, el desarrollador entonces regresa y refactoriza el código para adherirse a cualquier estándar de codificación relevante.",
            },
          ],
          options: [
            {
              name: "Jest",
              description:
                "Es un framework de JavaScript mantenido por Facebook, Inc. con un enfoque en la simplicidad. Funciona con proyectos que usan: Babel, TypeScript, Node.js, React, Angular y Vue.js. Su objetivo es trabajar fuera de la caja y configurarlo libremente.",
              link: "https://jestjs.io/",
            },
            {
              name: "Jasmine",
              description:
                "Jasmine es un framework de código abierto para JavaScript. Su objetivo es funcionar en cualquier plataforma habilitada para JavaScript, no interferir en la aplicación ni en el IDE, y tener una sintaxis fácil de leer. Está fuertemente influenciado por otros marcos de pruebas unitarias, como ScrewUnit, JSSpec, JSpec, y RSpec.",
              link: "https://jasmine.github.io/",
            },
            {
              name: "Mocha",
              description:
                "Mocha es un framework de JavaScript para los programas Node.js, con soporte para el navegador, pruebas asincrónicas, informes de cobertura de pruebas y uso de cualquier biblioteca de aserciones.",
              link: "https://mochajs.org/",
            },
            {
              name: "Karma",
              description:
                "Karma es un framework de JavaScript. Se encarga de ejecutar los test de Javascript según se vayan construyendo, de tal forma que ante cualquier fallo el desarrollador se dará cuenta de inmediato.",
              link: "https://karma-runner.github.io/2.0/index.html/",
            },
          ],
        },
        {
          id: 2,
          name: "Package Manager",
          slug: "package",
          image: pngImage[5],
          video: "https://www.youtube.com/embed/2V1UUhBJ62Y",
          icon: "fas fa-cube",
          url:
            "https://www.freecodecamp.org/news/javascript-package-managers-101-9afd926add0a/",
          text: [
            {
              id: 1,
              title: "Nos mudamos! Empaquetalo todo!",
              paragraph1:
                "Un paquete es una pieza de software reutilizable que puede ser descargada de un registro global en el entorno local de un desarrollador. Cada paquete puede o no depender de otros paquetes.",
              paragraph2:
                "En pocas palabras: un gestor de paquetes es un software que te permite gestionar las dependencias (código externo escrito por ti o por otra persona) que tu proyecto necesita para funcionar correctamente.",
              paragraph3:
                "El software normalmente se pone a disposición de los usuarios en los repositorios, con el fin de proporcionar a los usuarios de un sencillo control sobre los diferentes tipos de software que van a instalar en su sistema y, en ocasiones, debido a razones legales o conveniencias por parte de los distribuidores.",
            },
          ],
          options: [
            {
              name: "Npm",
              description:
                "npm es el sistema de gestión de paquetes por defecto para Node.js, un entorno de ejecución para JavaScript, bajo Artistic License 2.0.",
              link: "https://www.npmjs.com/",
            },
            {
              name: "Yarn",
              description:
                "Yarn es un nuevo tipo de instalador de paquetes JavaScript y gestor de dependencias lanzado por la empresa Facebook en colaboración con otros desarrolladores como Google donde introduce cambios en esa gestión de dependencias, en la ejecución de tareas y algunas mejoras de rendimiento, también en el cambio de enfoque en la descarga e instalación de los paquetes y en su gestión de las dependencias, por ejemplo, con Yarn el programador podrá gestionar nuestras dependencias con mayor fiabilidad.​",
              link: "https://yarnpkg.com/",
            },
          ],
        },
        {
          id: 3,
          name: "Module Bundler",
          slug: "bundler",
          image: pngImage[6],
          video: "https://www.youtube.com/embed/hCxvp3_o0gM",
          icon: "fas fa-cubes",
          url:
            "https://www.freecodecamp.org/news/lets-learn-how-module-bundlers-work-and-then-write-one-ourselves-b2e3fe6c88ae/",
          text: [
            {
              id: 1,
              title: "¿Todas esas cajas?... Llama al camión!",
              paragraph1:
                "Un paquete de módulos es una herramienta que toma trozos de JavaScript y sus dependencias y los agrupa en un solo archivo, generalmente para su uso en el navegador. Puede que hayas usado herramientas como Browserify, Webpack, Rollup o una de muchas otras.",
              paragraph2:
                "Por lo general, comienza con un archivo de entrada, y a partir de ahí agrupa todo el código necesario para ese archivo de entrada.",
              paragraph3:
                "Partiendo de un punto de entrada el objetivo de la resolución de dependencias es buscar todas las dependencias de su código (otras piezas de código que necesita para funcionar) y construir un gráfico (llamado gráfico de dependencias).",
            },
          ],
          options: [
            {
              name: "Webpack",
              description:
                "Webpack es un paquete de módulos de JavaScript de código abierto. Es un paquete de módulos principalmente para JavaScript, pero puede transformar activos de front-end como HTML, CSS, e imágenes si se incluyen los cargadores correspondientes. Webpack toma módulos con dependencias y genera activos estáticos que representan esos módulos.",
              link: "http://webpack.github.io/",
            },
            {
              name: "Parcel",
              description:
                "Parcel es un sistema de gestión de dependencias para recursos JS, CSS y AJAX. Aunque es una biblioteca independiente JS, también puede ser usado como un plugin de jQuery. Básicamente es un DSL que permite declarar las dependencias entre artefactos y cargarlos perezosamente cuando su sistema los necesite.",
              link: "https://parceljs.org/",
            },
            {
              name: "Browserify",
              description:
                "Browserify es una herramienta JavaScript de código abierto que permite a los desarrolladores escribir módulos del estilo Node.js que compilan para su uso en el navegador. Permite usar require en el navegador, de la misma manera que lo harías en Node. No es sólo azúcar sintáctico para cargar los scripts en el cliente. Es una herramienta que lleva todos los recursos del ecosistema del NPM fuera del servidor, y dentro del cliente.",
              link: "http://browserify.org/",
            },
            {
              name: "Rollup",
              description:
                "Rollup es un paquete de módulos para JavaScript que compila pequeñas piezas de código en algo más grande y complejo, como una biblioteca o una aplicación. Utiliza el nuevo formato estandarizado para los módulos de código incluidos en la revisión ES6 de JavaScript, en lugar de las anteriores soluciones idiosincrásicas como CommonJS y AMD. Los módulos ES le permiten combinar libremente y sin problemas las funciones individuales más útiles de sus bibliotecas favoritas. Esto eventualmente será posible de forma nativa en todas partes, pero Rollup te permite hacerlo hoy.",
              link: "http://rollupjs.org/",
            },
          ],
        },
        {
          id: 4,
          name: "Linter",
          slug: "linter",
          image: pngImage[7],
          video: "https://www.youtube.com/embed/qhuFviJn-es",
          icon: "fas fa-exclamation",
          url:
            "https://www.freecodecamp.org/news/what-is-linting-and-how-can-it-save-you-time/",
          text: [
            {
              id: 1,
              title: "Progración extrema: programar sin debuggear",
              paragraph1:
                "En pocas palabras, un linter es una herramienta que escanea programáticamente tu código con el objetivo de encontrar problemas que pueden conducir a errores o inconsistencias en la salud y el estilo del código. Algunos incluso pueden ayudar a solucionarlos por ti!",
              paragraph2:
                "Las construcciones sospechosas que se suelen buscar son usos de variables antes de ser inicializadas o creadas, condiciones que no varían bajo ninguna circunstancia (Son siempre verdaderas o siempre falsas) y cálculos cuyos resultados probablemente caigan fuera del rango permitido por las variables utilizadas.",
              paragraph3:
                "En la actualidad, se utiliza este término para designar a herramientas que realizan estas tareas de comprobación en cualquier lenguaje de programación. Las herramientas de tipo lint generalmente funcionan realizando un análisis estático del código fuente.",
            },
          ],
          options: [
            {
              name: "ESlint",
              description:
                "ESLint es una herramienta de análisis de código estático para identificar patrones problemáticos encontrados en el código JavaScript. Fue creado por Nicholas C. Zakas en 2013. Las reglas en ESLint son configurables, y las reglas personalizadas pueden ser definidas y cargadas. ESLint cubre tanto la calidad del código como los problemas de estilo de codificación. ESLint soporta los estándares actuales de ECMAScript, y la sintaxis experimental de los borradores para futuros estándares. El código que utiliza JSX o TypeScript también puede ser procesado cuando se utiliza un plugin o transpilador.",
              link: "https://eslint.org/",
            },
            {
              name: "Prettier",
              description:
                "Prettier es un formateador de código obstinado con soporte para: JavaScript, incluyendo ES2017, JSX, Angular, Vue, Flow, TypeScript, CSS, Less, y SCSS, HTML, JSON, GraphQL, Markdown, incluyendo GFM y MDX, YAML. Elimina todo el estilo original y asegura que todo el código de salida se ajusta a un estilo consistente. Prettier toma su código y lo reimprime desde cero teniendo en cuenta la longitud de la línea.",
              link: "https://prettier.io/",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Frameworks",
      slug: "frameworks",
      image: svgImage[6],
      resume:
        "Elimina todo ese esfuerzo y líneas que no te hacen falta y te impiden organizar tus proyectos con claridad. Aprende Angular, React o Vue.",
      faqs: [
        {
          id: 1,
          question: "¿Qué es Angular?",
          answer:
            "Es un framework de JavaScript de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página.",
        },
        {
          id: 2,
          question: "¿Qué es React?",
          answer:
            "Es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenida por Facebook.",
        },
        {
          id: 3,
          question: "¿Qué es Module Vue?",
          answer:
            "Es un framework de código abierto de JavaScript Model-view-viewmodel para construir interfaces de usuario y aplicaciones de una sola página. Creada y mantenida por Evan You",
        },
      ],
      tools: [
        {
          id: 1,
          name: "Angular",
          slug: "angular",
          image: pngImage[8],
          video: "https://www.youtube.com/embed/2OHbjep_WjQ",
          icon: "fab fa-angular",
          url: "https://angular.io/",
          text: [
            {
              id: 1,
              title: "Gracias Google!",
              paragraph1:
                "Angular (comúnmente llamado Angular 2+ o Angular 2) es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página. Su objetivo es aumentar las aplicaciones basadas en navegador con capacidad de Modelo Vista Controlador (MVC), en un esfuerzo para hacer que el desarrollo y las pruebas sean más fáciles.",
              paragraph2:
                "La biblioteca lee el HTML que contiene atributos de las etiquetas personalizadas adicionales, entonces obedece a las directivas de los atributos personalizados, y une las piezas de entrada o salida de la página a un modelo representado por las variables estándar de JavaScript.",
              paragraph3:
                "Angular se basa en clases tipo Componentes, cuyas propiedades son las usadas para hacer el binding de los datos. En dichas clases tenemos propiedades (variables) y métodos (funciones a llamar). Angular es la evolución de AngularJS aunque incompatible con su predecesor.",
            },
          ],
          options: [
            {
              name: "Angular",
              description:
                "Aprende una forma de construir aplicaciones con Angular y reutiliza tu código y tus habilidades para construir aplicaciones para cualquier objetivo de despliegue. Para web, web móvil, móvil nativo y escritorio nativo.",
              link: "https://angular.io/",
            },
          ],
        },
        {
          id: 2,
          name: "React",
          slug: "react",
          image: pngImage[9],
          video: "https://www.youtube.com/embed/DLX62G4lc44",
          icon: "fab fa-react",
          url: "https://reactjs.org/",
          text: [
            {
              id: 1,
              title: "Gracias Facebook!",
              paragraph1:
                "React (también llamada React.js o ReactJS) es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. Han participado en el proyecto más de mil desarrolladores diferentes.",
              paragraph2:
                "React intenta ayudar a los desarrolladores a construir aplicaciones que usan datos que cambian todo el tiempo. Su objetivo es ser sencillo, declarativo y fácil de combinar. React sólo maneja la interfaz de usuario en una aplicación; React es la Vista en un contexto en el que se use el patrón MVC (Modelo-Vista-Controlador) o MVVM (Modelo-vista-modelo de vista). También puede ser utilizado con las extensiones de React-based que se encargan de las partes no-UI (que no forman parte de la interfaz de usuario) de una aplicación web.",
              paragraph3:
                "Según el servicio de análisis Javascript (javascript analytics service), Libscore, React actualmente está siendo utilizado en las páginas principales de Imgur, Bleacher Informe, Feedly, Airbnb, SeatGeek, HelloSign, y otras.",
            },
          ],
          options: [
            {
              name: "React",
              description:
                "React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien.",
              link: "https://es.reactjs.org/",
            },
            {
              name: "Next - The React Framework",
              description:
                "Next.js es un marco de trabajo de JavaScript creado por Zeit. Te permite construir aplicaciones web estáticas y de renderizado del lado del servidor usando React. Es una gran herramienta para construir tu próximo sitio web. Tiene muchas grandes características y ventajas, que pueden hacer de Nextjs tu primera opción para construir tu próxima aplicación web.",
              link: "https://nextjs.org/",
            },
          ],
        },
        {
          id: 3,
          name: "Vue",
          slug: "vue",
          image: pngImage[10],
          video: "https://www.youtube.com/embed/4deVCNJq3qc",
          icon: "fab fa-vuejs",
          url: "https://vuejs.org/",
          text: [
            {
              id: 1,
              title: "Gracias Evan!",
              paragraph1:
                "Vue.js presenta una arquitectura adoptable incrementalmente que se centra en la representación declarativa y la composición de componentes. Las características avanzadas necesarias para aplicaciones complejas como el enrutamiento, la gestión de estados y las herramientas de construcción se ofrecen a través de librerías y paquetes de apoyo mantenidos oficialmente, siendo Nuxt.js una de las soluciones más populares.",
              paragraph2:
                "Vue.js permite extender el HTML con atributos HTML llamados directivas. Las directivas ofrecen funcionalidad a las aplicaciones HTML, y vienen como directivas incorporadas o definidas por el usuario.",
              paragraph3:
                "Fue creado por Evan You después de trabajar para Google usando AngularJS en varios proyectos. Más tarde resumió su proceso de pensamiento: Pensé, que tal si pudiera extraer la parte que realmente me gustaba de Angular y construir algo realmente liviano. El primer código fuente comprometido con el proyecto fue fechado en Julio de 2013, y Vue fue liberado por primera vez en Febrero siguiente, en 2014",
            },
          ],
          options: [
            {
              name: "Vue",
              description:
                "Vue (pronunciado /vjuː/, como view) es un framework progresivo para construir interfaces de usuario. A diferencia de otros frameworks monolíticos, Vue está diseñado desde cero para ser utilizado incrementalmente. La librería central está enfocada solo en la capa de visualización, y es fácil de utilizar e integrar con otras librerías o proyectos existentes. Por otro lado, Vue también es perfectamente capaz de impulsar sofisticadas Single-Page Applications cuando se utiliza en combinación con herramientas modernas y librerías de apoyo.",
              link: "https://vuejs.org/",
            },
            {
              name: "Nuxt - The Vue Framework",
              description:
                "Nuxt es un marco progresivo basado en Vue.js para crear aplicaciones web modernas. Está basado en las bibliotecas oficiales de Vue.js (vue, vue-router y vuex) y en potentes herramientas de desarrollo (webpack, Babel y PostCSS). El objetivo de Nuxt es hacer que el desarrollo web sea potente y eficiente teniendo en cuenta la experiencia del desarrollador.",
              link: "https://nuxtjs.org/",
            },
          ],
        },
      ],
    },
  ],
  homeData: {
    hero: [
      {
        id: 1,
        title: "Un pequeño cohete",
        subtitle:
          "Conoce las principales herramientas para desarrollar aplicaciones web a la velocidad de la luz.",
        image: svgImage[0],
        button: "Empezar",
      },
    ],

    info: [
      {
        id: 1,
        title: "Crea proyectos y aplicaciones modernas",
        paragrapgh:
          "Cada año aparecen herramientas que nos facilitan el desarrollo de aplicaciones web, adaptadas a las últimas tendencias y respondiendo a la demanda creciente del usuario medio. ¿Serás el último en utilizarlas?",
        image: svgImage[1],
      },
      {
        id: 2,
        title: "No te pierdas en este mapa extenso",
        paragrapgh:
          "Aprender herramientas tecnológicas puede ser abrumador. Sobre todo en el amplio abanico del desarrollo web. Aquí verás una selección para que no te sientas perdido y siempre tengas ganas de experimentar y ampliar tus conocimientos",
        image: svgImage[2],
      },
      {
        id: 3,
        title: "Primero móvil!",
        paragrapgh:
          "First mobile, ya es un concepto de diseño estándar. Pero no nos quedemos atrás, existen muchas maneras de crear patrones de maquetación pensando en los dispositivos más pequeños. Aplica siempre el que más te convenga según el tipo de proyecto.",
        image: svgImage[3],
      },
    ],
  },
  influenceData: {
    hero: [
      {
        id: 1,
        title: "Influences",
        subtitle:
          "En esta sección, os contaremos algunos datos de tres personas muy influyentes dentro del desarrollo, tanto de software como web en particular. No es ni mucho menos un top ten global, pero si mi top tres personal que me sirve de inspiración",
      },
    ],
    info: [
      {
        id: 1,
        icon: "fab fa-linux",
        author: "Linus Torvalds",
        avatar: jpgImage[0],
        biography: {
          paragraph1:
            "Linus Benedict Torvalds es un ingeniero de software finlandés-estadounidense, conocido por iniciar y mantener el desarrollo del kernel Linux, basándose en el sistema operativo libre Minix creado por Andrew S. Tanenbaum y en algunas herramientas, varias utilidades y los compiladores desarrollados por el proyecto GNU.  Es una de las piezas fundamentales que completan el rompecabezas de grandes personalidades del Software Libre, y de la informática en general, pero su figura ha sido ciertamente sobrevaluada.",
          paragraph2:
            "Él llevó adelante la programación de un Kernel (núcleo central de un sistema operativo) cuando el proyecto del sistema operativo libre GNU iniciado por Richard Stallman estaba aún lejos de obtener el núcleo: a principios de los años 90 algunas personas tomaron el Kernel Linux de Linus Benedict Torvalds y lo pusieron junto a otras piezas que venían siendo desarrolladas por Free Software Foundation, y así nació GNU/Linux.",
        },
        project: ["Linux", "Git"],
        gallery: {
          image1: jpgImage[1],
          image2: jpgImage[2],
          image3: jpgImage[3],
        },
      },
      {
        id: 2,
        icon: "fab fa-js",
        author: "Kyle Simpson",
        avatar: jpgImage[4],
        biography: {
          paragraph1:
            "Kyle Simpson es uno de los ponentes más reputados y conocidos de JavaScript, autor de la famosa serie de libros You don’t know JavaScript!. Nacio y creció en Oklahoma City, se mudó a Austin Texas en la universidad, donde vive actualmente con su esposa.",
          paragraph2:
            "Ha escrito 8 libros publicados por O'Reilly, incluyendo seis libros de la serie You Don't Know JS. Es un orador público, y contribuye al mundo de la OSS. Kyle es un clásico viviente de JavaScript, la verdadera encarnación del espíritu del código abierto. En su conversación con JSNation, comparte su sabiduría y conocimiento de todas las cosas de JavaScript: las cosas más controvertidas y fascinantes del lenguaje y su viaje per aspera ad astra para enamorarse de JS.",
        },
        project: ["You don't know JS"],
        gallery: {
          image1: jpgImage[5],
          image2: jpgImage[6],
          image3: jpgImage[7],
        },
      },
      {
        id: 3,
        icon: "fab fa-vuejs",
        author: "Evan You",
        avatar: jpgImage[8],
        biography: {
          paragraph1:
            "Evan Yu nació en Wuxi, China. Es una ciudad de tamaño medio, que está justo al lado de Shanghai. Estudió en Shanghai la escuela secundaria y durante tres años iba y volvía. Después de la escuela secundaria se fue EE.UU. para la universidad. Según relata: 'Me atrajo el JavaScript por la capacidad de construir algo y compartirlo instantáneamente con el mundo. Lo pones en la web, y obtienes una URL, puedes enviarlo a cualquiera con un navegador. Esa fue la parte que me atrajo a la web y al Javascript.'",
          paragraph2:
            "Vue fue creado por Evan You después de trabajar para Google usando AngularJS en varios proyectos. Más tarde resumió su proceso de pensamiento: 'Pensé, que tal si pudiera extraer la parte que realmente me gustaba de Angular y construir algo realmente liviano'. El primer código fuente comprometido con el proyecto fue fechado en Julio de 2013, y Vue fue liberado por primera vez en Febrero siguiente, en 2014.",
        },
        project: ["Vue JS"],
        gallery: {
          image1: jpgImage[9],
          image2: jpgImage[10],
          image3: jpgImage[11],
        },
      },
    ],
  },
  errorData: {
    img: svgImage[8],
  },
};
