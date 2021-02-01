# PEC7_Ej1_respuestas teoria

1. ¿Qué es y cómo funciona el elemento `<RouterOutlet>`?

   `<RouterOutlet>` es una etiqueta especial en Angular que sirve para mostrar los componentes hijos de un componente. Por defecto todos los componentes son hijos del componente AppComponent, por lo que si incluímos esta etiqueta dentro de la vista de AppComponent, se renderizará cada uno de los componentes del routing dependiendo de la página en la que nos encontremos.

   Se imprimirá por consola el valor que aparece en la ruta, es decir, si navegamos a la ruta /items, se sustituirá la etiqueta router-outlet por el componente que esté asignado en el archivo de rutas para ese componente.

2. ¿Para qué se utilizan las directivas routerLink y routerLinkActive? ¿Existen más directivas relacionadas con el router?

   - routerLink: Cuando se aplica a un elemento en una plantilla, hace que ese elemento sea un enlace que inicia la navegación a una ruta. La navegación abre uno o más componentes enrutados en una o más ubicaciones de `<router-outlet>` en la página.

   - roterLinkActive: Utilizamos esta directiva para crear una distinción visual de los elementos asociados a una ruta activa.

   - routerLinkWithHref: Nos permite enlazar con rutas específicas de nuestra aplicación.

   - routerOutlet: Actúa como un marcador de posición que Angular rellena dinámicamente basándose en el estado actual del router.

3. ¿Qué diferencias hay entre los servicios Router y ActivatedRoute? ¿Qué funcionalidades tiene cada uno de estos servicios? Describe algunos de los métodos más importantes por los que están compuestos.

   - Router proporciona navegación entre vistas y capacidades de manipulación de URL. Metodos:

     - initialNavigation(): Configura el receptor de cambios de ubicación y realiza la navegación inicial.
     - setUpLocationChangeListener(): Establece el escuchador de cambios de ubicación. Este oyente detecta las navegaciones desencadenadas desde fuera del router (los botones de retroceso/adelanto del navegador, por ejemplo) y programa la correspondiente navegación del router para que se desencadenen los eventos, guardias, etc. correctos.
     - getCurrentNavigation(): Obtiene el objeto de navegación actual, si existe.
     - resetConfig(): Restablece la configuración de la ruta utilizada para la navegación y la generación de enlaces.
     - dispose(): Se deshace del router.
     - createUrlTree(): Añade segmentos de URL al árbol de URL actual para crear un nuevo árbol de URL.
     - navigateByUrl(): Navega a una vista utilizando una ruta absoluta.
     - navigate(): Navega basándose en la matriz de comandos proporcionada y en un punto de partida. Si no se proporciona una ruta de inicio, la navegación es absoluta.
     - serializeUrl(): Serializa un UrlTree en una cadena.
     - parseUrl(): Convierte una cadena en un UrlTree.
     - isActive(): Devuelve si la url está activada.

   - ActivatedRoute proporciona acceso a la información sobre una ruta asociada a un componente cargado en una salida. Se utiliza para recorrer el árbol RouterState y extraer información de los nodos. Inyectamos lo que llamamos una ActivatedRoute en el constructor. El ActivatedRoute es un servicio específico del contexto que contiene la información sobre la ruta actualmente activada, y sabe cómo analizar y recuperar información de ella. Utilizamos ActivatedRoute para leer el código de la URL. Metodos:

     - toString(): convierte a cadena.

4. ¿Qué son las Route Guards? ¿Cómo se usan las guardas en Angular? Describe todas las guardas que existen en Angular (consulta para ello la documentación oficial de Angular).

   Los guards son métodos que nos permiten acceder a cierta rutas, dependiendo de la condición que nosotros queramos, también se podrían utilizar para evitar cargar modulos, etc. Allí podemos hacer validaciones, llamar al backend o cualquier cosa que necesitemos. Dentro de todo lo que son los guards, existen 5 tipos:

   - CanActivate: Según una condición, que nosotros queramos, ingresamos a la ruta o página.

   - CanActivateChild: Funciona de la misma manera que CanActivate, la única diferencia es que se utiliza para rutas hijas (lazy loading).

   - CanDeactivate: Es lo opuesto a CanActivate, según una condición, nos permite salir de una ruta o una página. Se puede utilizar por ejemplo, cuando tenemos un formulario y queremos preguntar si desea descartar los cambios del mismo.

   - CanLoad: Lo podemos utilizar para evitar al usuario cargar módulos innecesarios.

   - Resolve: Podríamos utilizarlo para retrasar la representación de un componente deseado hasta que se hayan obtenido los resultados necesarios.

5. ¿Qué es la carga Lazy de los módulos de Angular? ¿Cómo se configura en Angular la carga Lazy? ( https://angular.io/guide/lazy-loading-ngmodules).

   Lazy Load es un patrón de diseño que consiste en retrasar la carga o inicialización de un objeto hasta el momento de su utilización.

   Obtiene los datos o procesa los objetos solamente cuando se necesitan, no antes. Esto se debe a que si se obtiene todos los datos antes de usarlos puede tener como resultado una mala experiencia de usuario, esto es muy importante del lado del frontend, porque sabemos que toda la carga es del lado del cliente, modularizar y diferir cargas ayuda a la aplicación a enfocarse en un código en especifico.

   Una mala práctica es que por cada componente que creamos se carga en el app.module.ts y se llama a cada componente en el app-routing.module.ts

   La mejor forma de revertir esto es aplicando Lazy Loading, para esto debemos crear un module y un router.module por cada componente que queremos utilizar.

   En nuestro caso se configuraria de esta manera:

   - app.module.ts: limipiamos las importaciones que vamos a delegar a cada modulo propio:

     ```
      imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutesModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        ],

     ```

   - app.routes.module.ts: limipamos los hijos y los delegamos a los modulos propios de user y wine:

     ```
     const appRoutes: Routes = [
       { path: '', redirectTo: 'user/login', pathMatch: 'full' },
       {
         path: 'user',
         loadChildren: async () =>
           (await import('../app/user/user.module')).UserModule,
       },
       {
         path: 'wine',
         loadChildren: async () =>
           (await import('../app/wine/wine.module')).WineModule,
       },
       { path: '**', redirectTo: 'user/register' },
     ];

     ```

   - user.module.ts: importamos los modulos correspondientes:

     ```
           @NgModule({
         imports: [
           CommonModule,
           FormsModule,
           UserRoutingModule,
           ReactiveFormsModule,
           MatToolbarModule,
           MatButtonModule,
           MatCardModule,
           MatSelectModule,
           MatFormFieldModule,
           MatInputModule,
           MatCheckboxModule,
         ],
         declarations: [LoginComponent, RegisterComponent],
       })
       export class UserModule {}

     ```

   - user-routing.modules.ts: creamos las rutas hijo:

     ```
     const routes: Routes = [
         { path: 'login', component: LoginComponent },
         { path: 'register', component: RegisterComponent },
     ];
     @NgModule({
         imports: [RouterModule.forChild(routes)],
         exports: [RouterModule],
     })
       export class UserRoutingModule {}
     ```

6. ¿Qué es/para qué son útiles los middlewares en el contexto de node.js? ¿Dónde estás usando middlewares en nuestra aplicación?

   Un middleware es una función que se puede ejecutar antes o después del manejo de una ruta. Esta función tiene acceso al objeto Request, Response y la función next(), por lo tanto, puede ejecutarse antes o después de llegar al controlador.

   Las funciones middleware suelen ser utilizadas como mecanismo para verificar niveles de acceso antes de entrar en una ruta, manejo de errores, validación de datos, etc.La razón de utilizar middlewares es que los controladores no pueden hacer ni tener todo, existe lógica que debe realizarse mucho antes o después para en multiples.

   En nuestro caso, en Angular utilizariamos un concepto de middleware mediante los interceptors. Un interceptor inspecciona/modifica las peticiones, osea, lo que va de nuestra aplicación al servidor y tambien lo que viene del servidor a nuestra aplicación.

   Hay que recordar que los interceptors se ejecutan en cada petición que se realiza al servidor, siempre y cuando sean registrados. Para registrar un interceptor se tiene que proveer en el array de providers: [] en nuestro módulo raíz, por lo general AppModule. Importamos HTTP_INTERCEPTORS y HttpClientModule, luego proveémos nuestro interceptor.
