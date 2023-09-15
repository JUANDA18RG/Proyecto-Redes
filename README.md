# Reproductor de Video MP4 en 3D

Este es un proyecto que implementa un reproductor de video MP4 en un entorno 3D utilizando React, TypeScript y Three.js. El objetivo principal de esta aplicación es permitir a los usuarios reproducir videos en una pantalla de computadora virtual con capacidades de visualización en 360 grados. A continuación, se explica el funcionamiento básico del código y las tecnologías utilizadas en este proyecto.

## Funcionamiento Básico

El proyecto consta de dos secciones principales: la barra de navegación y la pantalla principal con el reproductor de video 3D.

### Barra de Navegación

La barra de navegación contiene tres elementos de menú:

1. **Inicio:** Al hacer clic en "Inicio", los usuarios son redirigidos a la página principal. Además, se muestra una descripción de la página y su funcionalidad en 3D.
2. **Videos:** Esta opción permite a los usuarios obtener información sobre cómo funciona el reproductor de video en 3D. Se muestra una descripción detallada sobre la implementación técnica.
3. **Acerca De...:** En esta sección, los usuarios pueden obtener información sobre los miembros del equipo detrás del proyecto, incluyendo sus roles.

### Pantalla Principal

La pantalla principal consta de los siguientes elementos:

- **Marca y Submarca:** Muestra el nombre del reproductor de video, en este caso "MP4", y una breve descripción adicional.
- **Texto de Marca:** Invita a los usuarios a ingresar un enlace de video para su reproducción.
- **Logo:** Se muestra el logo del proyecto, que puede ser personalizado según las necesidades del usuario.

### Reproductor de Video 3D

El reproductor de video 3D se encuentra en el centro de la pantalla principal y utiliza la biblioteca Three.js para su implementación. Las características clave incluyen:

- **Visualización en 360 grados:** Los videos se proyectan en una pantalla de computadora virtual que permite la visualización en 360 grados.
- **Reproducción Automática:** Los videos se reproducen automáticamente cuando se carga la pantalla.
- **Integración de Videos en 3D:** Los videos se utilizan como textura en el plano 3D, lo que permite su integración efectiva en una escena 3D.

## Tecnologías Utilizadas

Este proyecto utiliza las siguientes tecnologías:

- **React:** El marco de trabajo principal para construir la interfaz de usuario y gestionar los componentes.
- **TypeScript:** Se utiliza para proporcionar tipos estáticos a JavaScript, lo que mejora la seguridad y la escalabilidad del código.
- **Three.js:** Una biblioteca de JavaScript que se utiliza para crear y renderizar gráficos 3D en el navegador.
- **@react-three/fiber:** Una librería que facilita la integración de Three.js con React para la creación de aplicaciones 3D.

## Instrucciones de Uso

Para utilizar la aplicación, simplemente siga estos pasos:

1. Haga clic en "Inicio" en la barra de navegación para volver a la pantalla principal.
2. Ingrese un enlace de video en la sección "Pon un link de cualquier video y lo reproducimos".
3. El video se reproducirá automáticamente en la pantalla de computadora virtual en 3D.
4. Explore la visualización en 360 grados del video utilizando el entorno 3D.

¡Disfrute de la experiencia de visualización de video en 3D!

## Contribución

Este proyecto ha sido desarrollado por el equipo compuesto por:

- Nicolas Arturo Valencia: Diseñador
- Santiago Garcia Gil: Encargado de la documentación
- Juan David Ramirez Grismaldo: Desarrollador

Si desea contribuir o realizar mejoras en este proyecto, no dude en ponerse en contacto con nuestro equipo.

¡Gracias por utilizar nuestro reproductor de video 3D MP4!
