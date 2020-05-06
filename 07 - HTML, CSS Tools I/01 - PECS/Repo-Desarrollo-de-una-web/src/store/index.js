import svg from "../assets/*.svg";
const svgImage = Object.values(svg);

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
              link:
                "https://developer.mozilla.org/es/docs/Learn/HTML/Introduccion_a_HTML",
            },
            {
              name: "Multimedia e incrustación - MDN",
              link:
                "https://wiki.developer.mozilla.org/es/docs/Learn/HTML/Multimedia_and_embedding",
            },
            {
              name: "Tablas HTML - MDN",
              link:
                "https://wiki.developer.mozilla.org/es/docs/Learn/HTML/Tables",
            },
            {
              name: "Formularios HTML - MDN",
              link:
                "https://wiki.developer.mozilla.org/es/docs/Learn/HTML/Forms",
            },
            {
              name: "Usa HTML para resolver problemas comunes - MDN",
              link:
                "https://wiki.developer.mozilla.org/es/docs/Learn/HTML/Howto",
            },
          ],
        },
        {
          id: 2,
          name: "CSS",
          slug: "css",
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
              link:
                "https://developer.mozilla.org/es/docs/Learn/CSS/Introduction_to_CSS",
            },
            {
              name: "Estilo de texto - MDN",
              link:
                "https://developer.mozilla.org/es/docs/Learn/CSS/Styling_text",
            },
            {
              name: "Estilo de cajas - MDN",
              link:
                "https://developer.mozilla.org/es/docs/Learn/CSS/Styling_boxes",
            },
            {
              name: "Diseño de CSS - MDN",
              link:
                "https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout",
            },
          ],
        },
        {
          id: 3,
          name: "Javascript",
          slug: "javascript",
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
              link:
                "https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps",
            },
            {
              name: "Elementos básicos de JavaScript - MDN",
              link:
                "https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks",
            },
            {
              name: "Introducción a los objetos JavaScript",
              link:
                "https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects",
            },
          ],
        },
        {
          id: 4,
          name: "Git",
          slug: "git",
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
              link: "https://github.com/",
            },
            {
              name: "Bitbucket",
              link: "https://bitbucket.org/",
            },
            {
              name: "Gitlab",
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
              link: "https://jestjs.io/",
            },
            {
              name: "Jasmine",
              link: "https://jasmine.github.io/",
            },
            {
              name: "Mocha",
              link: "https://mochajs.org/",
            },
            {
              name: "Karma",
              link: "https://karma-runner.github.io/2.0/index.html/",
            },
          ],
        },
        {
          id: 2,
          name: "Package Manager",
          slug: "package",
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
              link: "https://www.npmjs.com/",
            },
            {
              name: "Yarn",
              link: "https://yarnpkg.com/",
            },
          ],
        },
        {
          id: 3,
          name: "Module Bundler",
          slug: "bundler",
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
              link: "http://webpack.github.io/",
            },
            {
              name: "Parcel",
              link: "https://parceljs.org/",
            },
            {
              name: "Browserify",
              link: "http://browserify.org/",
            },
            {
              name: "Rollup",
              link: "http://rollupjs.org/",
            },
          ],
        },
        {
          id: 4,
          name: "Linter",
          slug: "linter",
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
              link: "https://eslint.org/",
            },
            {
              name: "Prettier",
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
              link: "https://angular.io/",
            },
          ],
        },
        {
          id: 2,
          name: "React",
          slug: "react",
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
              link: "https://es.reactjs.org/",
            },
            {
              name: "Next - The React Framework",
              link: "https://nextjs.org/"
            }
          ],
        },
        {
          id: 3,
          name: "Vue",
          slug: "vue",
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
              link: "https://vuejs.org/",
            },
            {
              name: "Nuxt - The Vue Framework",
              link: "https://nuxtjs.org/"
            }
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
  errorData: {
    img: svgImage[8],
  },
};
