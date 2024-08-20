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
$ ng --help
bash: ng: command not found
~~~

~~~
$ npm install -g @angular/cli@17
npm warn deprecated read-package-json@7.0.1: This package is no longer supported. Please use @npmcli/package-json instead.

changed 240 packages in 5m
~~~

~~~
~~~







$ ng new --help
ng new [name]

Creates a new Angular workspace.

Arguments:
  name  The name of the new workspace and initial project.

crear un proyecto
$ ng new primerProyectoAngular
? Would you like to enable autocompletion? This will set up your terminal so pressing TAB while typing Angular CLI commands will show

? Would you like to enable autocompletion? This will set up your terminal so pressing TAB while typing Angular CLI commands will show

? Would you like to enable autocompletion? This will set up your terminal so pressing TAB while typing Angular CLI commands will show

 possible options and autocomplete arguments. (Enabling autocompletion will modify configuration files in your home directory.) Yes
Appended `source <(ng completion script)` to `C:\Users\Prado\.bashrc`. Restart your terminal or run the following to autocomplete `ng
` commands:

    source <(ng completion script)
? Would you like to share pseudonymous usage data about this project with the Angular Team
at Google under Google's Privacy Policy at https://policies.google.com/privacy. For more
details and how to change this setting, see https://angular.io/analytics. No
Global setting: disabled
Local setting: No local workspace configuration file.
Effective status: disabled
? Which stylesheet format would you like to use? CSS             [ https://developer.mozilla.org/docs/Web/CSS                     ]
? Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? Yes
CREATE primerProyectoAngular/angular.json (2915 bytes)
CREATE primerProyectoAngular/package.json (1312 bytes)
CREATE primerProyectoAngular/README.md (1102 bytes)
CREATE primerProyectoAngular/tsconfig.json (889 bytes)
CREATE primerProyectoAngular/.editorconfig (290 bytes)
CREATE primerProyectoAngular/.gitignore (629 bytes)
CREATE primerProyectoAngular/tsconfig.app.json (342 bytes)
CREATE primerProyectoAngular/tsconfig.spec.json (287 bytes)
CREATE primerProyectoAngular/server.ts (1759 bytes)
CREATE primerProyectoAngular/.vscode/extensions.json (134 bytes)
CREATE primerProyectoAngular/.vscode/launch.json (490 bytes)
CREATE primerProyectoAngular/.vscode/tasks.json (980 bytes)
CREATE primerProyectoAngular/src/main.ts (256 bytes)
CREATE primerProyectoAngular/src/favicon.ico (15086 bytes)
CREATE primerProyectoAngular/src/index.html (320 bytes)
CREATE primerProyectoAngular/src/styles.css (81 bytes)
CREATE primerProyectoAngular/src/main.server.ts (271 bytes)
CREATE primerProyectoAngular/src/app/app.component.html (20239 bytes)
CREATE primerProyectoAngular/src/app/app.component.spec.ts (990 bytes)
CREATE primerProyectoAngular/src/app/app.component.ts (330 bytes)
CREATE primerProyectoAngular/src/app/app.component.css (0 bytes)
CREATE primerProyectoAngular/src/app/app.config.ts (330 bytes)
CREATE primerProyectoAngular/src/app/app.routes.ts (80 bytes)
CREATE primerProyectoAngular/src/app/app.config.server.ts (361 bytes)
CREATE primerProyectoAngular/src/assets/.gitkeep (0 bytes)
✔ Packages installed successfully.
    Directory is already under version control. Skipping initialization of git.



Entrar al proyecto
Prado@DESKTOP-72MFJHI MINGW64 ~/Desktop/Angular/Angular (main)
$ cd primerProyectoAngular/

iniciar servidor
Prado@DESKTOP-72MFJHI MINGW64 ~/Desktop/Angular/Angular/primerProyectoAngular (main)
$ ng serve -o
⠋ Building...

Prado@DESKTOP-72MFJHI MINGW64 ~/Desktop/Angular/Angular/primerProyectoAngular (main)
$ ng serve
Browser bundles
Initial chunk files     | Names               |  Raw size
polyfills.js            | polyfills           |  88.12 kB |
main.js                 | main                |  22.08 kB |
styles.css              | styles              |  95 bytes |

                        | Initial total       | 110.29 kB


Server bundles
Initial chunk files     | Names               |  Raw size
chunk-4XRH2YV3.mjs      | -                   |   1.70 MB |
polyfills.server.mjs    | polyfills.server    | 559.52 kB |
main.server.mjs         | main.server         | 216.23 kB |
chunk-VPSODEBW.mjs      | -                   |   2.51 kB |
render-utils.server.mjs | render-utils.server | 423 bytes |

Lazy chunk files        | Names               |  Raw size
chunk-OTT6LQ5K.mjs      | xhr2                |  39.10 kB |

Application bundle generation complete. [57.592 seconds]

Watch mode enabled. Watching for file changes...
  ➜  Local:   http://localhost:4200/
  ➜  press h + enter to show help