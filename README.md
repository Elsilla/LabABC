ABC’s Through Pictures!

Proyecto colaborativo – HTML, CSS, JavaScript y GitHub

📌 Descripción del Proyecto

Este proyecto consiste en crear un sitio web que presenta el abecedario (A–Z) ilustrado con imágenes reales, tomadas por los integrantes del equipo. Cada letra muestra:

Un título grande con la letra correspondiente

Una palabra asociada

Una imagen representativa

Un sistema interactivo que cambia los colores de los nombres del equipo al hacer clic (verde → azul → rojo)

Además, se implementaron prácticas básicas de HTML, CSS, JavaScript y Git/GitHub, siguiendo un flujo de trabajo colaborativo con ramas, issues y tablero de proyecto.

🧩 Estructura del Proyecto


<img width="230" height="271" alt="image" src="https://github.com/user-attachments/assets/177c2c70-7006-491d-840f-545d865d5d27" />


🚀 Funcionalidades Principales

✔ HTML

Página principal estructurada con Bootstrap 5.

Todas las letras del alfabeto (A–Z) con:

- Título < h1 >

- Descripción < h3 >

- Imagen con clase img-thumbnail

Nombres del equipo listados en etiquetas <h5>.

✔ CSS

Fondo gris.
Color verde aplicado globalmente a < h3 >.
Tres clases adicionales:

-  .h3_azul → azul

-  .h3_rojo → rojo

-  h5 → cursor tipo "pointer"

Archivo correctamente vinculado al HTML.


✔ JavaScript


- Captura todos los elementos < h5 >.

- Cada clic cambia su color alternando:

Verde
Azul
Rojo


Cada etiqueta < h5 > tiene su propio contador, independiente de los demás.


<img width="371" height="36" alt="image" src="https://github.com/user-attachments/assets/af41abfc-5cf7-4503-ade5-a2d8504e98bf" />


🧠 Objetivos de Aprendizaje

Practicar HTML semántico y Bootstrap Grid.

Reforzar estilos con CSS externos.

Manipular elementos del DOM con JavaScript.

Colaborar usando GitHub:

ramas
issues
proyecto Kanban
pull requests
Seguir un flujo Scrum básico dentro del equipo.



🔧 Instalación y Uso

1.- Clona el repositorio:


<img width="246" height="36" alt="image" src="https://github.com/user-attachments/assets/d5e81997-4d80-4537-a2ad-cd1158f258f7" />


2.- Abre el proyecto en tu editor (VS Code, Replit, etc.)

3.- Asegúrate de mantener la carpeta Pictures/ en la misma ruta.

4.- Abre index.html en tu navegador.


🖼 Funcionalidad Interactiva

Al hacer clic en cualquier nombre del equipo (<h5>):

El color cambia cíclicamente → verde → azul → rojo → (repite).

Cada nombre tiene su propio ciclo independiente.

Esto se logró mediante:


<img width="400" height="128" alt="image" src="https://github.com/user-attachments/assets/bbd88d0c-aa05-4728-a519-2ef498c6556b" />


🏗 Flujo de Trabajo en Git y GitHub
✔ Ramas utilizadas

Cada integrante creó una rama por grupo de letras asignadas, siguiendo el formato:

- letterA-B
- letterC-F
- letterG-I
- etc.

✔ Comandos útiles

<img width="365" height="120" alt="image" src="https://github.com/user-attachments/assets/535b5c5f-9711-48dd-abac-b201d090aa05" />


✔ Subir rama a GitHub
<img width="250" height="156" alt="image" src="https://github.com/user-attachments/assets/3d4a22ce-1bb3-4230-aa6d-65eafa444c85" />


✔ Proyecto Kanban

Se creó un tablero con:

To Do (tareas del proyecto)

In Progress

Review

Done

Cada letra o sección tenía su propia issue o tarjeta.

👥 Integrantes del Equipo

Francis Osses
Belén Almendros
Tiago Alcazar
Brahim Gonzalez
Héctor Chacon
Diego Villagran

📚 Archivos Incluidos

- index.html
Estructura completa del sitio, Bootstrap, contenedor principal e imágenes del ABC.

- style.css
Contiene los estilos personalizados: fondo gris, colores de <h3> y clases específicas.

- script.js
Script de interacción para cambiar colores al hacer clic sobre los nombres del equipo.

- lessonplan.md
Documento original con instrucciones de la actividad.


🏁 Resultado Final

Un sitio completamente funcional que muestra el abecedario en imágenes, con estilos personalizados, interacción JavaScript y un flujo de trabajo colaborativo profesional usando GitHub.
