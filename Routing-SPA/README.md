# RoutingSPA

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.10.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# Aplicación de Página única (SPA) (Router)
1. Crear un nuevo proyecto Angular ```ng new Routing-SPA```
2. Crear dos componentes con ```ng g c crisis-list``` y ```ng g c heroes-list```
3. Definición de ruta 
```bash
{path: 'crisis-list', component: CrisisListComponent},
{path: 'heroes-list', component: HeroesListComponent}
```
4. Importar ````provideRouter```` esta función de proveedor de ```@angular/router``` del archivo ```app.config.ts``` .
5. Actualice su componente con ```router-outlet```
```html
<app-crisis-list></app-crisis-list>
<app-heroes-list></app-heroes-list>
```
```html
<router-outlet></router-outlet>
```
6. Añadir ```RouterOutlet``` de las importaciones en ```app.component.ts```
7. Agregar dos enlaces, que los usuarios pueden hacer clic para navegar entre la ```heroes-list``` y ```crisis-list```
```html
<nav>
  <a class="button" routerLink="/crisis-list">Crisis Center</a> |
  <a class="button" routerLink="/heroes-list">Heroes</a>
</nav>
```