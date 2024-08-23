# Manual Angular 2024

## Instalación de CLI angular https://v17.angular.io/cli
* comandos para las versiones:
~~~
$ node -v
v20.16.0
~~~

~~~
$ npm -v
10.8.1
~~~
* verificar - instalar CLI (Intefaz de Linea de Comandos) 

~~~
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 17.3.8
Node: 20.16.0
Package Manager: npm 10.8.1
OS: win32 x64
~~~

**instalar una version actualizada y una  especifica**
~~~
$ npm install -g @angular/cli@17
~~~
* ver todas las opciones para crear un proyecto
~~~
$ ng new --help
~~~

## crear un proyecto
~~~
$ ng new primerProyectoAngular
~~~

## Entrar al proyecto
* ingresar al directorio del proyecto
~~~
Prado@DESKTOP-72MFJHI MINGW64 ~/Desktop/Angular/Angular (main)
$ cd primerProyectoAngular/
~~~

* Iniciar servidor ingresar al enlace
~~~
$ ng serve -o
⠋ Building...
Watch mode enabled. Watching for file changes...
  ➜  Local:   http://localhost:4200/
  ➜  press h + enter to show help
~~~



## Lección 1:  [Hola mundo](https://v17.angular.io/tutorial/first-app/first-app-lesson-01)

En el panel Terminal de su IDE:

1. navegue hasta el first-appdirectorio 
2. instalar las dependencias



## Lección 2: Crear componente Inicio  

* `selector`: para describir cómo Angular se refiere al componente en las plantillas.
* `standalone`: para describir si el componente requiere un archivo NgModule.
* `imports`: para describir las dependencias del componente.
* `template`: para describir el marcado y diseño HTML del componente.
* `styleUrls`: para enumerar las URL de los archivos CSS que utiliza el componente en una matriz
### Paso 1: Crea el HomeComponent , Usar Angular CLI para crear un componente:
- Ejecute este comando `ng generate component home --inline-template --skip-tests` y compilar con `ng serve`
~~~ bash
$ ng generate component HomeComponent --inline-template --skip-tests
CREATE src/app/home/home.component.ts (256 bytes)
...
~~~~
- otra forma de generar componente 
~~~ javascript
$ ng g c homeComponent
CREATE src/app/home-component/home-component.component.html (30 bytes)
CREATE src/app/home-component/home-component.component.spec.ts (669 bytes)
CREATE src/app/home-component/home-component.component.ts (277 bytes)
CREATE src/app/home-component/home-component.component.css (0 bytes)
~~~
### Eliminar un componente `ng g c demoComponent.`

    Crea una carpeta demoComponent.
    Genera archivos html, css, ts y  spec.
    También agrega una dependencia dentro del archivo app.module.ts para añadir ese componente a su proyecto.

- entonces hazlo en orden inverso

        Eliminar la dependencia de app.module.ts
        Eliminar esa carpeta de componente.

- al eliminar la dependencia tienes que hacer dos cosas.

        Eliminar la línea de importación del archivo app.module.ts.
        Eliminar la declaración del componente del array de declaraciones @NgModule en app.module.ts.


## Paso 2: agregue el nuevo componente al diseño de su aplicación


1. Abrir `app.component.ts` en el editor.

2. En `app.component.ts`, importe HomeComponent agregando esta línea a las importaciones a nivel de archivo.

~~~ javascript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

~~~


3. En `app.component.ts`, en , actualice la propiedad de la matriz y agregue `.@Component imports HomeComponent`
~~~ javascript
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , HomeComponent, ContadorComponent], ......
~~~
4. Editar `app.component.html` 
~~~ html
<h1>Hola Angular </h1>
<section class="content">
    <app-home></app-home>
    <app-contador></app-contador>
  </section>
~~~
##  Interpolacion
1. Sintaxis básica solo se puede hacer la llamada dentro de la vista del componente TypeScript
~~~ html
<p>{{ mensaje }}</p>
~~~
Supongamos que tienes un componente en Angular con la siguiente clase:
~~~ js
    export class EjemploComponent {
    titulo: string = 'Bienvenidos a Angular';
    descripcion: string = 'Este es un ejemplo de interpolación.';
    visitas: number = 42;
    }
~~~
`{{ titulo }}`: Muestra el valor de la propiedad titulo del componente. En este caso, sería "Bienvenidos a Angular".

## Event Binding o enlace de evento
Dentro de este componente, vamos a configurar el event binding
### HTML (contador.component.html)
~~~ html
<button (click)="mostrarMensaje()">Haz clic aquí</button>
<button (click)="contador=contador-1">-</button>
<span>{{contador}}</span>
<button (click)="contador = contador+1">+</button>
~~~
### TypeScript (ejemplo-event-binding.component.ts)
~~~ js
export class ContadorComponent {
contador = 8;
decremento (){
  this.contador = this.contador - 2;
}
incremento (){
  this.contador += 2;
}
~~~
En la vista de app.component.html agregar la etiqueta
~~~ html
 <app-contador></app-contador>
~~~
## Class Binding o enlace de clases
1. Crear un nuevo componente primera forma de uso
~~~ bash
$ ng g c botones
CREATE src/app/botones/botones.component.html (23 bytes)
CREATE src/app/botones/botones.component.spec.ts (626 bytes)
CREATE src/app/botones/botones.component.ts (250 bytes)
CREATE src/app/botones/botones.component.css (0 bytes)
~~~
- Ejemplo click en boton cambia el color a parrafo `botones.component.html`
~~~ html
<div>
    <button class="btn btn-danger">color rojo</button>
    <button class="btn btn-success mx-2">color azul</button>
    <button class="btn btn-primary">verde</button>
</div>
<p [class]="text_color">texto cambia de color</p>

~~~
- Importar las dependencias y crear la propiedad en `app.component.ts`
~~~ js
import { BotonesComponent } from './botones/botones.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , HomeComponent, ContadorComponent,BotonesComponent],
  ...
~~~
~~~ js
export class BotonesComponent {
  text_color: string = '';
}
~~~

- Utilizamos la etiqueta nueva en la vista de `app.component.html`
~~~ html
    <app-botones></app-botones>
~~~
2. ejemplo activar/desactivar botones en `botones.component.html` 
~~~ html
<div>
    <button [disabled]="button_disable" class="btn btn-danger" (click)="text_color = 'text-danger'">color rojo</button>
    <button [disabled]="button_disable" class="btn btn-success mx-2" (click)="text_color = 'text-success '">color azul</button>
    <button [disabled]="button_disable" class="btn btn-primary" (click)="text_color = 'text-primary'">verde</button>

</div>
<p [class]="text_color">texto cambia de color</p>
<button class="btn btn-danger" (click)="button_disable = !button_disable" >Activar/Desactivar</button>
~~~
- Crear una propiedad button_disable en `botones.component.ts`
~~~ js
export class BotonesComponent {
  text_color: string = '';
  button_disable:boolean = false;
}
~~~
3. asignar mas de una class 
~~~ html
 <button [class]="{
        'disabled': button_disable,
        'btn': true

    }" class="btn btn-danger" (click)="text_color = 'text-danger'">color rojo</button>
    <button  [class]="{
        'disabled': button_disable,
        'btn': true

    }"  class="btn btn-success mx-2" (click)="text_color = 'text-success '">color azul</button>
    <button  [class]="{
        'disabled': button_disable,
        'btn': true

    }"  class="btn btn-primary" (click)="text_color = 'text-primary'">verde</button>

~~~
