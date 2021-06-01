# Teoria

## 1. Implementar una PWA

Una vez implementada la funcionalidad de PWA con Angular Cli y configurado el service worker, generamos el informe de LightHouse para comprobar que funciona. En este caso se adjuntan dos informes, uno en nuestro entorno de desarrollo y otro del despliegue mediante Netlify.

En ambos observamos los datos generados acerca de nuestro sitio.

A modo de resumen enumeraremos dichos datos relevantes:

- Performance
- Accesibilidad
- Buenas prácticas
- SEO
- PWA

Nos aparecen multitud de recomendaciones a mejorar para que nuestra puntuación mejore dentro de este informe. Pero en este caso solo hablaremos acerca del punto que nos ocupa, PWA:

- Se detecta que es instalable y tiene los requisitos para ello, como el web manifest y la configuración del service worker.
- PWA optimizada, se registra un service worker que controla la página y la url de inicio.
- Se redirecciona por HTTPS, es un requisito imprescindible para que esta tecnología funcione.
- Tenemos configurado el custom splash screen.
- Se setea un color para la barra de direcciones.
- Se nos recuerda que no tenemos un apple touch icon valido para dispositivos ios, que tendríamos que configurar a posterior.

## 2. Configurar Angular Universal usando un schematics

Utilizamos el comando de schematics "ng add @nguniversal/express-engine" para poder configurar nuestra aplicación como Angular Universal. A modo de resumen y comparativa si no utilizásemos este comando tendríamos que:

- Instalar nuevas dependencias
- Editar el fichero main.ts:
- Editar el fichero app.module.ts
- Editar el fichero angular.json
- Crear el fichero src/app/app.server.module.ts
- Crear el fichero src/main.server.ts
- Crear el fichero server.ts
- Crear el fichero tsconfig.server.json
- Crear el fichero webpack.server.config.js
- Editar el fichero angular.json
- Editar el fichero package.json

- src/main.ts:

  ```javascript
  import { enableProdMode } from '@angular/core';
  import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
  import { AppModule } from './app/app.module';
  import { environment } from './environments/environment';
  if (environment.production) {
  enableProdMode();
  }
  // Se añade el evento de la carga del contenido del DOM
  document.addEventListener('DOMContentLoaded', () => { <==== ESTO SE AÑADE
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err)); <====== ESTO SE AÑADE
  });
  ```

- Fichero app.module.ts:

  ```javascript
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  ```

- angular.json file:

  ```javascript
  "builder": "@angular-devkit/build-angular:browser",
  "options": {
  "outputPath": "dist/ssr-medium/browser",
  "index": "src/index.html",
  "main": "src/main.ts",
  "polyfills": "src/polyfills.ts",
  "tsConfig": "tsconfig.app.json",
  "aot": true,
  "assets": [ "src/favicon.ico", "src/assets" ],
  "styles": [ "src/styles.css" ], "scripts": []
  },
  ```

- Se crea el fichero app.server.module.ts:

  ```javascript
  import { NgModule } from "@angular/core";
  import { ServerModule } from "@angular/platform-server";
  import { AppModule } from "./app.module";
  import { AppComponent } from "./app.component";
  @NgModule({
    imports: [AppModule, ServerModule],
    bootstrap: [AppComponent],
  })
  export class AppServerModule {}
  ```

- Se crea el fichero main.server.ts (configuraciones para el server):
  ```javascript
  import { enableProdMode } from "@angular/core";
  import { environment } from "./environments/environment";
  if (environment.production) {
    enableProdMode();
  }
  export { AppServerModule } from "./app/app.server.module";
  export { renderModule, renderModuleFactory } from "@angular/platform-server";
  ```
- Se crea el fichero server.ts. Se crea el fichero donde vamos a inicializar nuestra aplicación de Angular:
- Se crea el fichero de configuración de typescript para el server:

  ```javascript
  "extends": "./tsconfig.app.json",
  "compilerOptions": {
    "outDir": "./out-tsc/app-server",
    "module": "commonjs",
    "types": [
      "node"
    ]
  },
  "files": [
    "src/main.server.ts",
    "server.ts"
  ],
  "angularCompilerOptions": {
    "entryModule": "./src/app/app.server.module#AppServerModule"
  }
  ```

- Editará el package.json con nuevos scripts:

  ```javascript
    "dev:ssr": "ng run ng-brew:serve-ssr",
    "serve:ssr": "node dist/ng-brew/server/main.js",
    "build:ssr": "ng build --prod && ng run ng-brew:server:production",
    "prerender": "ng run ng-brew:prerender"
  ```

## 3. Desplegar una aplicación Angular en GitHub

Dado que hemos tenido numerosos problemas para poder desplegar nuestra aplicación en GitHub Pages correctamente, hemos optado por utilizar el servicio de Netlify.

Para ello hemos registrado el repositorio en la cuenta de Netlify:

https://github.com/ansango/ng-brew

Hemos configurado el comando de despliegue "ng build --prod"

Y le hemos indicado a Netlify que la dependencia pública es dist/ng-brew

Podemos comprobar el correcto despliegue en:

https://ng-brew.netlify.app/

Y comprobar el también, correcto funcionamiento de la implementación de PWA.
