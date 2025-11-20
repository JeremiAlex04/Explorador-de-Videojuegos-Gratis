# Buscador de Juegos

Este proyecto es una aplicación web desarrollada con **React** y **Vite** que permite buscar y explorar videojuegos. Utiliza **Bootstrap** para el diseño de la interfaz, ofreciendo una experiencia de usuario moderna y responsiva.

## Características

-   Búsqueda de videojuegos.
-   Interfaz amigable y responsiva.
-   Rápido rendimiento gracias a Vite.

## Tecnologías Utilizadas

-   [React](https://react.dev/) - Biblioteca de JavaScript para construir interfaces de usuario.
-   [Vite](https://vitejs.dev/) - Herramienta de construcción frontend de próxima generación.
-   [Bootstrap](https://getbootstrap.com/) - Framework CSS para desarrollo rápido y responsivo.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

-   [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
-   [npm](https://www.npmjs.com/) (normalmente viene instalado con Node.js)

## Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

1.  **Clonar el repositorio:**

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd buscadorjuegos
    ```

2.  **Instalar dependencias:**

    Ejecuta el siguiente comando para instalar todas las librerías necesarias:

    ```bash
    npm install
    ```

## Ejecución en Desarrollo

Para iniciar el servidor de desarrollo y ver la aplicación en tu navegador:

```bash
npm run dev
```

Esto iniciará el servidor en `http://localhost:5173/` (o un puerto similar si ese está ocupado).

## Construcción y Despliegue

Para preparar la aplicación para producción (publicación en GitHub Pages, Vercel, Netlify, etc.):

1.  **Construir el proyecto:**

    Este comando generará una carpeta `dist` con los archivos optimizados para producción.

    ```bash
    npm run build
    ```

2.  **Previsualizar la construcción (Opcional):**

    Para asegurarte de que la versión de producción funciona correctamente antes de desplegar:

    ```bash
    npm run preview
    ```

### Despliegue en GitHub Pages (Ejemplo)

Si deseas desplegar en GitHub Pages, necesitarás configurar el `base` en `vite.config.js` si tu repositorio no es la raíz de tu usuario/organización.

1.  Asegúrate de que `vite.config.js` tenga la configuración base correcta (ej. `base: '/nombre-del-repo/'`).
2.  Puedes usar el paquete `gh-pages` para facilitar el despliegue:

    ```bash
    npm install gh-pages --save-dev
    ```

3.  Añade los scripts de despliegue en `package.json`:

    ```json
    "scripts": {
      // ... otros scripts
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    }
    ```

4.  Ejecuta el comando de despliegue:

    ```bash
    npm run deploy
    ```

## Estructura del Proyecto

-   `src/`: Contiene el código fuente de la aplicación (componentes, estilos, etc.).
-   `public/`: Archivos estáticos públicos.
-   `index.html`: Punto de entrada HTML.
-   `vite.config.js`: Configuración de Vite.
-   `package.json`: Dependencias y scripts del proyecto.
