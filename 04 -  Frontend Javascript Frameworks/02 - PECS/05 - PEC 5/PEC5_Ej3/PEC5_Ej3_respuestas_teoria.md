# PEC5_Ej3_respuestas_teoria.

Crea un documento de texto PEC5_Ej3_respuestas_teoria y responde a cada uno de los siguientes puntos:

1. ¿Qué son, para qué sirven y cómo se utilizan FormControl, FormGroup y FormBuilder?

   - FormControl:

     El core de cualquier formulario reactivo es FormControl, que representa directamente un elemento de forma individual en el template.

     Cualquier formulario reactivo no es más que un conjunto de FormControl agrupados.

     Es en el nivel FormControl donde también asignamos valores iniciales y validadores (tanto de sincronización como de sincronización).

     El formulario se define como un grupo de controles. Cada control tendrá un nombre y una configuración. Esa definición permite establecer un valor inicial al control.

   - FormGroup:

     Sirve para agrupar campos relevantes que pertenecen al mismo conjunto semánticamente o logicamente. Esto nos permite comprobar el valor del formulario en su conjunto.

   - FormBuilder:

     Nos permite crear elementos FormGroup y FormControl sin llamar de nuevo a cada uno. El formulario reactivo depende de esos elementos por debajo para funcionar y FormBuilder no los elimina.

     Es un servicio del que han de depender los componentes que quieran desacoplar el modelo de la vista. Se usa para construir un formulario creando un FormGroup, (un grupo de controles) que realiza un seguimiento del valor y estado de cambio y validez de los datos.

2. Busca en la página oficial de Angular (o utiliza un recurso de O’Reilly) en el que se especifiquen todos los validadores que incluye Angular para ser utilizados en los formularios reactivos. Construye una tabla de resumen de estos.

   - min(min: number): requiere que el valor del control sea mayor o igual al número proporcionado.
   - max(max: number): requiere que el valor del control sea menor o igual al número proporcionado.
   - required(control: AbstractControl): requiere que el control tenga un valor no vacío.
   - requiredTrue(control: AbstractControl): requiere que el valor del control sea verdadero. Este validador se usa comúnmente para las casillas de verificación requeridas.
   - email(control: AbstractControl): requiere que el valor del control pase una prueba de validación de correo electrónico.
   - minLength(minLength: number): requiere que la longitud del valor del control sea mayor o igual que la longitud mínima proporcionada.
   - maxLength(maxLength: number): requiere que la longitud del valor del control sea menor o igual que la longitud mínima proporcionada.
   - pattern(pattern: string | RegExp): requiere que el valor del control coincida con un patrón regex.
   - nullValidator(control: AbstractControl): Validador que no realiza ninguna operación.
   - compose(validators: ValidatorFn[]): Componer varios validadores en una sola función que devuelva la unión de los mapas de error individuales para el control proporcionado.
   - composeAsync(validators: AsyncValidatorFn[]): Componer múltiples validadores asíncronos en una sola función que devuelva la unión de los objetos de error individuales para el control proporcionado.

3. ¿Que son, cuáles son y para qué sirven los estados en los formularios reactivos?

    Los estados, nos permite controlar el estado actual de validacion del formulario es decir, nos permite saber la forma en la cual se interactua con el formulario, si el usuario lo ha visitado, si lo ha cambiado y, finalmente, si está en un estado válido.

     Son:

   - Visited: ng-touched / ng-untouched
   - Changed: ng-dirty / ng-pristine
   - Valid: ng-valid / ng-invalid
