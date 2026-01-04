# 🎮 Buscador de Juegos

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

Una aplicación web moderna para buscar y explorar tus videojuegos favoritos.

[Características](#-características) • [Instalación](#-instalación) • [Despliegue](#-construcción-y-despliegue)

---

</div>

## 📖 Acerca del Proyecto

**Buscador de Juegos** es una aplicación web interactiva que te permite explorar el mundo de los videojuegos de manera rápida y eficiente. Desarrollada con las últimas tecnologías de frontend, ofrece una experiencia de usuario fluida y moderna.

---

## ✨ Características

- 🔍 **Búsqueda Inteligente** - Encuentra videojuegos de manera rápida y precisa
- 📱 **Diseño Responsivo** - Experiencia optimizada en todos los dispositivos
- ⚡ **Rendimiento Ultra Rápido** - Gracias a la optimización de Vite
- 🎨 **Interfaz Moderna** - UI atractiva construida con Bootstrap
- 🚀 **Navegación Fluida** - Experiencia de usuario sin interrupciones

---

## 🛠️ Tecnologías Utilizadas

<table>
<tr>
<td align="center" width="250">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="60" height="60" alt="React"/>
<br/><br/>
<strong>React</strong>
<br/>
<sub>Biblioteca de JavaScript para construir interfaces de usuario interactivas y componentes reutilizables</sub>
</td>
<td align="center" width="250">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" width="60" height="60" alt="Vite"/>
<br/><br/>
<strong>Vite</strong>
<br/>
<sub>Herramienta de construcción frontend de próxima generación con HMR instantáneo</sub>
</td>
<td align="center" width="250">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" width="60" height="60" alt="Bootstrap"/>
<br/><br/>
<strong>Bootstrap 5</strong>
<br/>
<sub>Framework CSS para desarrollo rápido y responsivo con componentes prediseñados</sub>
</td>
</tr>
</table>

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

| Herramienta | Versión Mínima | Link de Descarga |
|-------------|----------------|------------------|
| 🟢 Node.js | 18.x o superior | [Descargar](https://nodejs.org/) |
| 📦 npm | 9.x o superior | Incluido con Node.js |

> 💡 **Tip:** Verifica tu versión con `node -v` y `npm -v`

---

## 🚀 Instalación

### Configuración Local

**1️⃣ Clonar el repositorio:**
```bash
git clone <URL_DEL_REPOSITORIO>
cd buscadorjuegos
```

**2️⃣ Instalar dependencias:**
```bash
npm install
```

Este comando instalará todas las librerías necesarias definidas en `package.json`.

---

## 💻 Ejecución en Desarrollo

**Iniciar el servidor de desarrollo:**
```bash
npm run dev
```

La aplicación estará disponible en:
```
🌐 Local: http://localhost:5173/
```

> 📝 **Nota:** Si el puerto 5173 está ocupado, Vite asignará automáticamente otro puerto disponible.

### Características del Modo Desarrollo

- 🔥 Hot Module Replacement (HMR) - Cambios instantáneos sin recargar
- 🐛 Source Maps - Depuración facilitada
- ⚡ Inicio ultra rápido

---

## 📦 Construcción y Despliegue

### Build de Producción

**1️⃣ Construir el proyecto:**
```bash
npm run build
```

Este comando:
- ✅ Compila y optimiza el código
- 📦 Genera la carpeta `dist/` con archivos listos para producción
- 🗜️ Minifica y comprime los recursos

**2️⃣ Previsualizar la construcción (Opcional):**
```bash
npm run preview
```

Esto te permite verificar la versión de producción localmente antes del despliegue.

---

### 🌐 Despliegue en GitHub Pages

#### Configuración Inicial

**1️⃣ Configurar el base path:**

Edita `vite.config.js`:
```javascript
export default {
  base: '/nombre-del-repo/', // Reemplaza con el nombre de tu repositorio
}
```

> ⚠️ **Importante:** Si tu repositorio es `usuario.github.io`, usa `base: '/'`

**2️⃣ Instalar gh-pages:**
```bash
npm install gh-pages --save-dev
```

**3️⃣ Agregar scripts de despliegue:**

Añade en `package.json`:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

**4️⃣ Desplegar:**
```bash
npm run deploy
```

Tu aplicación estará disponible en:
```
https://tu-usuario.github.io/nombre-del-repo/
```

---

### 🚀 Otras Opciones de Despliegue

<table>
<tr>
<td align="center" width="200">
<strong>Vercel</strong><br/>
Despliegue automático desde Git
<br/><br/>
<a href="https://vercel.com">Ir a Vercel →</a>
</td>
<td align="center" width="200">
<strong>Netlify</strong><br/>
Hosting con CI/CD integrado
<br/><br/>
<a href="https://netlify.com">Ir a Netlify →</a>
</td>
<td align="center" width="200">
<strong>Cloudflare Pages</strong><br/>
Edge deployment global
<br/><br/>
<a href="https://pages.cloudflare.com">Ir a CF Pages →</a>
</td>
</tr>
</table>

---

## 📂 Estructura del Proyecto
```
buscadorjuegos/
│
├── 📁 src/                    # Código fuente de la aplicación
│   ├── 📁 components/         # Componentes React reutilizables
│   ├── 📁 pages/              # Páginas de la aplicación
│   ├── 📁 services/           # Servicios y API calls
│   ├── 📁 styles/             # Estilos personalizados
│   ├── 📁 utils/              # Funciones de utilidad
│   ├── App.jsx                # Componente principal
│   └── main.jsx               # Punto de entrada de React
│
├── 📁 public/                 # Archivos estáticos públicos
│   └── assets/                # Imágenes, iconos, etc.
│
├── 📄 index.html              # Punto de entrada HTML
├── 📄 vite.config.js          # Configuración de Vite
├── 📄 package.json            # Dependencias y scripts
└── 📄 README.md               # Este archivo
```

---

## 🛠️ Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Crea el build de producción |
| `npm run preview` | Previsualiza el build de producción |
| `npm run deploy` | Despliega a GitHub Pages |
| `npm run lint` | Ejecuta el linter (si está configurado) |

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas y apreciadas. Para contribuir:

1. 🍴 Fork el proyecto
2. 🌿 Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. 💾 Commit tus cambios (`git commit -m 'Add: Nueva característica'`)
4. 📤 Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. 🔀 Abre un Pull Request

---

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 📧 Soporte

¿Encontraste un bug o tienes una sugerencia?

- 🐛 [Reportar un problema](../../issues)
- 💡 [Solicitar una característica](../../issues)
- 📧 Contactar al equipo de desarrollo

---

## 🙏 Agradecimientos

- **React Team** - Por la increíble biblioteca
- **Vite Team** - Por la herramienta de build más rápida
- **Bootstrap** - Por los componentes de UI

---

<div align="center">

**Desarrollado con 💙 y ☕ por la comunidad**

⭐ Si te gusta este proyecto, ¡considera darle una estrella!

---

[⬆ Volver arriba](#-buscador-de-juegos)

</div>
