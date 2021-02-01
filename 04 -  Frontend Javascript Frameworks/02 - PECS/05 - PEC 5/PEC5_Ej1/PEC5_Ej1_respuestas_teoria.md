# PEC5_Ej1_respuestas_teoria.

Crea un documento de texto PEC5_Ej1_respuestas_teoria y responde a cada una de las siguientes preguntas:

1. ¿Cuáles son las principales diferencias entre formularios dirigidos por template y formularios reactivos?

   Los formularios dirigidos por plantillas usan FormsModule, mientras que los formularios reactivos usan ReactiveFormsModule.

   Los formularios controlados por plantillas son asíncronos, mientras que los formularios reactivos son sincrónicos.

   En los formularios controlados por plantillas, la mayor parte de la interacción se produce en la plantilla, mientras que en los formularios controlados por reactivos, la mayor parte de la interacción se produce en el componente.

1. ¿Qué son, para qué sirven y cómo se utilizan las directivas ngModel y ngModelChange?

- ngModel:

  - Se trata de un enlace, entre algo que tenemos en la definición del componente con un campo de formulario del template (vista) del componente.
  - Esta directiva nos permite tener un enlace unidireccional entre una propiedad de nuestra clase con el valor que se muestra un control de formulario HTML de tipo input, textarea etc.
  - Es un enlace en una única dirección: el valor de la propiedad de la clase se refleja en la interfaz visual. Si el operador cambia el contenido del control 'input' luego la propiedad de la clase sigue almacenando el valor anterior.

- ngModelChange:
  - Es un evento Angular. Se dispara cuando ngModel cambia.

2. ¿Que son, cuáles son y para qué sirven los estados en los formularios dirigidos por templates?

   La validación de los formularios dirigidos por template, se basa en la validación de la forma nativa del HTML. Angular hace el trabajo de integrar estos estados y validaciones con su propio modelo interno (ya sea ngModel o ngForm).

   El estado, nos permite echar un vistazo al estado del form control, sobre si el usuario lo ha visitado, si lo ha cambiado y, finalmente, si está en un estado válido.

   La validez, nos dice si un control de forma es válido o no, y si no es válido, la razón por la que el elemento del formulario es inválido.

   Son:

   - Visited: ng-touched / ng-untouched
   - Changed: ng-dirty / ng-pristine
   - Valid: ng-valid / ng-invalid

3. ¿Qué ventajas aportan los FormGroup en la composición de formularios?

    FormGroup es un cojunto de FormControls, el estado de este objeto depende del estado de todos sus objetos, es decir, si uno de los FormControl es inválido, el grupo entero es inválido. 

    Esto nos permite agrupar determiadas partes del formulario y validar por bloques el mismo, lo cual hace que la validación sea más consistente.
