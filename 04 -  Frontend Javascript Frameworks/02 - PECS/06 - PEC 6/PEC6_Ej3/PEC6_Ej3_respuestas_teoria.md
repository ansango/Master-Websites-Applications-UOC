# PEC6_Ej3_respuestas_teoria.

Crea un documento de texto PEC6_Ej3_respuestas_teoria y responde a cada
uno de los siguientes puntos:

1. ¿Qué son los interceptores?

  Los interceptores interceptan y manejan una HttpRequest o HttpResponse.

  La mayoría de los interceptores transforman la solicitud saliente antes de pasarla al siguiente interceptor de la cadena, llamando a next.handle(transformedReq). Un interceptor puede transformar también el flujo de eventos de respuesta, aplicando operadores RxJS adicionales en el flujo devuelto por next.handle().

  Un interceptor puede manejar la solicitud por completo, y componer un nuevo flujo de eventos en lugar de invocar next.handle().

  Un interceptor puede devolver múltiples respuestas en el flujo de eventos para una sola solicitud.

  Basicamente un interceptor captura la petición HTTP, la modifica (si se requiere) y entonces continua su camino,


2. Analiza la siguiente cadena de operadores de RxJS, explica cada uno de los pasos que se están desarrollando y explica en qué caso usarías este código:
   
  ``` 
    this.wines$ = this.searchSubject
      .startWith(this.searchTerm)
      .debounceTime(300)
      .distinctUntilChanged()
      .merge(this.reloadProductsList)
      .switchMap((query) => 
    this.wineService.getWine(this.searchTerm));
  
  ```

  - La variable searchSubject, es un Sujeto. Un Sujeto es un tipo especial en RxJS que actúa tanto como un observador como un observable. Es decir, es capaz tanto de emitir eventos como de suscribirse a uno. Usaremos este sujeto de búsqueda para desencadenar un evento cada vez que el usuario teclee en nuestro cuadro de búsqueda.


  - - Si lo dejamos así, nuestra cadena sólo comenzará en el primer momento en que el usuario empiece a escribir en el cuadro de búsqueda, y resultará en una lista vacía de existencias cuando la página se cargue. Resolveremos esto usando startWith, que establece el valor inicial con el que la cadena observable debe ser activada. Lo iniciamos con una cadena vacía, lo que asegura que cuando la página se carga, vemos nuestra lista original de existencias.
  
  - Como no queremos ejecutar la llamada al servidor cada vez que el usuario introduce algo usamos el operador debounceTime() en la cadena. Aquí, le decimos al stream que se mantenga hasta que no haya más eventos nuevos durante un período de 300 milisegundos. Esto asegura que sólo enviamos una llamada una vez que el usuario deja de escribir durante 300 milisegundos.
  
  - Lo siguiente que queremos hacer es evitar llamadas innecesarias, como si el usuario introduce un término de búsqueda (digamos, "prueba").Utilizamos otro operador observable llamado distinctUntilChanged(). Esto asegura que el evento sólo se emita si el nuevo valor es diferente del valor anterior, ahorrando así unas cuantas llamadas de red más.
  
  - El switchMap convierte un tipo de observable a otro, y tiene la capacidad de cancelar viejas suscripciones en vuelo. Esto ayuda a resolver el problema de respuesta fuera de servicio de una manera limpia.
  
  

