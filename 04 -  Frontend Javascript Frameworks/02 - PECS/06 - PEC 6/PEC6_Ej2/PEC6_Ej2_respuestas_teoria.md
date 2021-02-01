# PEC6_Ej2_respuestas_teoria.

- Registra el servicio correctamente al nivel de módulo, crea un documento de
  texto PEC6_Ej2_respuestas_teoria y responde:

  - Cómo lo registrarías manualmente:

    para registrar un servicio manualmente creariamos en primer lugar el servicio.ts con esta estructura:

    ```
    import { Injectable } from "@angular/core";

    @Injectable({
      providedIn: "root"
    })
    export class MSGService {
      messages: string[] = [];

      add(message: string) {
        this.messages.push(message);
      }

      clear() {
        this.messages = [];
      }
    }
    ```

    después lo importariamos a nivel de modulo de la siguiente manera:

    ```
    @NgModule({
      imports: [
        CommonModule
      ],
      declarations: [Component],
      providers: [Service]
    })
    ```

    y para usarlo dentro del componente:

    `import { ServiceName } from "../serviceName.service";`

    A continuación lo inyectamos en el constructor del componente:

    `constructor(private service: ServiceName) { }`

  - Cómo lo harías usando AngularCLI:

    utilizamos el comando `ng generate service`, para poder usar este servicio es necesario que lo agregarlo a un módulo. Inmediatamente lo podremos usar en cualquiera de los componentes que pertenecen a este módulo. Lo haremos con el decorador del módulo (@NgModule), en el array de "providers". El decorador de un módulo con el array de providers podría quedar más o menos así:

    ```
    @NgModule({
      imports: [
        CommonModule
      ],
      declarations: [Component],
      providers: [Service]
    })
    ```
