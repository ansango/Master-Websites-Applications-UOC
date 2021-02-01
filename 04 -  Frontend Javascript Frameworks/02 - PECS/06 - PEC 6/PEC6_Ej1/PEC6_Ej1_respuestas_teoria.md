# PEC6_Ej1_respuestas_teoria.

Crea un documento de texto PEC6_Ej1_respuestas_teoria y responde a cada
una de las siguientes preguntas:

1. ¿Cuál es la función de los componentes y servicios? (i.e. cuándo se debe utilizar cada uno de ellos)

   - Componentes: tienen como finalidad decidir qué datos mostramos y cómo mostrarlos en la Interfaz. Se relacionan los datos con la Interfaz, se enlazan los eventos a los métodos y se permite la interacción del usuario con nuestra aplicación. Se encuentran en la capa de presentación, y sólo deben centrarse en aspectos relacionados con la presentación de los datos.

   - Servicios: forman la capa que es común a toda la aplicación, es decir, los servicios pueden ser usados en varios componentes. Los usos de los servicios serían; recuperar o enviar datos al servidor, encapsular la lógica de la aplicación que no pertenece a un componente, comaprtir datos entre componentes que pueden o no estar relacionados entre sí.

2. ¿Qué es la <<inyección de dependencias>>? ¿Para qué sirve el decorador @Injectable?

   El concepto de la inyección de dependencias es que, si tenemos un componente que depende de un servicio, no creamos ese servicio (en el componente ) si no que en el constructor lo solicitas y Angular te lo trae.

   De esta forma, el codigo esta desacoplado, ya que el que el servicio se encarga de lo que debe, y el componente solamente lo consume.

   La inyección de dependencias tiene dos partes:

   - Registro de providers: Cómo y dónde debe crearse un objeto
   - Inyectar dependencias: De qué depende un objeto.

   Y todo lo que un objeto depende (servicios, directivas y elementos) se inyecta en su constructor. Para hacer este trabajo Angular construye un árbol de inyectores.

   En primer lugar, cada elemento DOM con un componente o una directiva en él recibe un inyector. Este inyector contiene la instancia de componente, todos los proveedores registrados por el componente y algunos objetos "locales" (por ejemplo, el elemento).

   En segundo lugar, al iniciar un `NgModule`, Angular crea un inyector usando el módulo y los proveedores definidos allí.

   - @Injectable indica que el servicio puede ser inyectado mediante inyección de dependencias. primero tenemos que importar el servicio en el componente. A continuación lo inyectamos en el constructor del componente y ya podemos usar los métodos del servicio en el componente. En el caso de un servicio tenemos:

     ```
     import { Injectable } from "@angular/core";

     @Injectable({
       providedIn: "root"
     })

     export class MessageService {
        messages: string[] = [];

        add(message: string) {
           this.messages.push(message);
        }

        clear() {
           this.messages = [];
        }
     }
     ```

     Y para importar el servicio de los mensajes dentro del componente tendríamos:

     ```
     import { Component, OnInit } from "@angular/core";
     import { MessageService } from "../message.service";

     @Component({
        selector: "app-messages",
        templateUrl: "./messages.component.html",
        styleUrls: ["./messages.component.css"]
     })

     export class MessagesComponent implements OnInit {
        constructor(public messageService: MessageService) {}
        ngOnInit() {
           this.messageService.add("prueba");
        }
     }

     ```

3. Explica los siguientes conceptos de la programación reactiva que se usan en RxJS:

   - Observable: es un objeto con un método subscribe que toma como parámetro un observador y nos retorna una suscripción. El observador se suscribe al observable y cada vez que el observable emite un valor, el observador es notificado. La suscripción que nos retorna el método subscribe, posee un método llamado unsubscribe que podemos llamar cuando deseamos terminar la relación entre observable y observador.

     Ejemplo:

     ```
     interface Observable {
        subscribe(observer: Observer): Subscription
     }

     interface Observer {
         next(v: any): void;
         error(e: Error): void;
         complete(): void;
     }

     interface Subscription {
         unsubscribe(): void;
     }
     ```

   - Subscription: un Observable no se ejecuta mientras no tenga un Observer suscrito. Una Subscription es un objeto que representa un recurso disponible, generalmente la ejecución de un Observable. Una suscripción tiene un método importante, unsubscribe, que no requiere ningún argumento y sólo dispone del recurso que posee la suscripción.

     ```
      import { interval } from 'rxjs';

      const observable = interval(1000);
      const subscription = observable.subscribe(x => console.log(x));
      // Later:
      // This cancels the ongoing Observable execution which
      // was started by calling subscribe with an Observer.
      subscription.unsubscribe();
     ```

   - Operators: son funciones que nos permiten transformar el data que nuestros observables emiten. Estos operadores se pasan como parámetro al método pipe de la siguiente forma:

     ```
     import { fromEvent } from 'rxjs';
     import { map } from 'rxjs/operators';

     const click$ = fromEvent(document, 'click');
     const coord$ = click$.pipe(
        map(event => ({ x: event.x, y: event.y }))
     );

     coord$.subscribe(coords => {
        console.log(`Click on x: "${coords.x}" and y: "${coords.y}"`);
     });
     ```

   - Subject: es un tipo especial de Observable que permite que los valores sean difundidos a muchos Observadores. Mientras que los Observables simples son monodifusión (cada Observador suscrito posee una ejecución independiente del Observable), los Subject son multidifusión.

     ```
     const subject = new Rx.Subject();// creamos nuestro subject

     // Subscripción 1 al Subject que es un Observable
     subject.subscribe((data) => {
         console.log(data); // 0.799234057357979
     });

     // Subscripción 2 al Subject que es un Observable
     subject.subscribe((data) => {
         console.log(data); // 0.799234057357979
     });

     subject.next(Math.random());// El subject usa el método next para emitir valores ya que también es un Observer.

     ```

   - Schedulers: controla cuándo comienza una suscripción y cuándo se envían las notificaciones.

     - Es una estructura de datos. Sabe cómo almacenar y poner en cola las tareas en función de la prioridad u otros criterios.
     - Es un contexto de ejecución. Denota dónde y cuándo se ejecuta la tarea (por ejemplo, inmediatamente, o en otro mecanismo de devolución de llamada como setTimeout o process.nextTick, o el marco de la animación).
     - Tiene un reloj (virtual). Proporciona una noción de "tiempo" mediante un método getter now() en el scheduler. Las tareas que se programen en un planificador en particular se adherirán sólo a la hora indicada por ese reloj.

     ```
     import { Observable, asyncScheduler } from 'rxjs';
     import { observeOn } from 'rxjs/operators';

     const observable = new Observable((observer) => {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.complete();
     }).pipe(
        observeOn(asyncScheduler)
     );

     console.log('just before subscribe');
     observable.subscribe({
        next(x) {
           console.log('got value ' + x)
        },
        error(err) {
           console.error('something wrong occurred: ' + err);
        },
        complete() {
           console.log('done');
        }
     });
     console.log('just after subscribe');
     ```

4. ¿Cuál es la diferencia entre promesas y observables?

   Las promesas y los observables se ejecutan de forma asíncrona, la principal diferencia entre ambos es que mientras las promesas devuelven un único resultado, los Observables nos permiten definir una secuencia a partir de todos los métodos que nos ofrecen.

   Esto no siempre será lo mejor, si únicamente necesitamos acceder al valor retornado por la petición, la promesa será suficiente.

   - Ejemplo de promesa:

     ```
        export class User {
        	userPromise() {
        		return new Promise((resolve, reject) => {
        			if(1 === 1) {
        				return resolve([{name: 'Iparra'}])
        			}
        			return reject({msg: 'error'});
        		})
        	}
        }

        let user = new User();
        let promise = user.getUserPromise();

        promise.then(user => {
        	console.log(user[0]); //{name: 'Iparra'}
        }).catch(error => {
        	console.log(error); //Uncaught {msg: "error"}
        });
     ```

     Una promesa resuelve o rechaza, si todo ha ido bien al ejecutar then tendremos el valor esperado, en otro lugar, dentro del catch tendremos el error que hemos devuelto, en este caso con reject, así de simple.

   - Ejemplo de observable:

     ```
      import { Observable } from 'rxjs/Observable';
      import 'rxjs/add/operator/map';
      import 'rxjs/add/operator/catch';
      import 'rxjs/add/observable/of';

      class User {
      	userObservable() {
      		return Observable.of([{name: 'Iparra'}])
      			.map(user => user[0])
      			.catch(error => Observable.throw(err));
      	}
      }

      let user = new User();
      let userObservable = user.userObservable();
      userObservable.subscribe(
      	result => {
      		console.log(result); //[{name: 'Iparra'}]
      	},
      	error => {
      		console.log(error);
      	}
      );

     ```

5. ¿Cuál es la función de la tubería (pipe) async?

Async pipe se suscribe a un Observable o Promesa y devuelve el último valor que ha emitido. Cuando se emite un nuevo valor, la tubería marca el componente que se debe comprobar para ver si hay cambios. Cuando el componente se destruye, el tubo async se desinscribe automáticamente para evitar posibles fugas de memoria.