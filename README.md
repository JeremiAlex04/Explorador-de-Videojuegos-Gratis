# 🎮 Buscador de Juegos

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

**Una aplicación web moderna y eficiente para descubrir y explorar el universo de los videojuegos**

[Demo en Vivo](#) • [Características](#-características-principales) • [Instalación](#-inicio-rápido) • [Documentación](#-documentación)

</div>

---

## 📖 Sobre el Proyecto

Buscador de Juegos es una aplicación web interactiva diseñada para facilitar la exploración del vasto mundo de los videojuegos. Con una interfaz intuitiva y rendimiento optimizado, permite a los usuarios descubrir títulos de forma rápida y eficiente.

### 🎯 ¿Por qué usar esta aplicación?

- Interfaz limpia y fácil de usar que prioriza la experiencia del usuario
- Optimización para todos los dispositivos, desde móviles hasta escritorio
- Arquitectura moderna que garantiza mantenibilidad y escalabilidad
- Código bien estructurado ideal para aprender o contribuir

---

## ✨ Características Principales

| Característica | Descripción |
|---------------|-------------|
| 🔍 **Búsqueda Avanzada** | Sistema de búsqueda inteligente con filtros y sugerencias en tiempo real |
| 📱 **100% Responsivo** | Diseño adaptable que funciona perfectamente en cualquier dispositivo |
| ⚡ **Alto Rendimiento** | Carga ultrarrápida gracias a Vite y optimizaciones modernas |
| 🎨 **UI/UX Moderna** | Interfaz atractiva con componentes de Bootstrap 5 personalizados |
| 🌐 **SEO Optimizado** | Estructura pensada para mejorar la visibilidad en buscadores |
| ♿ **Accesible** | Cumple con estándares WCAG para inclusividad |

---

## 🛠️ Stack Tecnológico

<table>
<tr>
<td align="center" width="250">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="60" height="60" alt="React"/>
<br/><br/>
<strong>React 19</strong>
<br/>
<sub>Biblioteca líder para construir interfaces de usuario componetizadas y reactivas con el último sistema de hooks</sub>
</td>
<td align="center" width="250">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" width="60" height="60" alt="Vite"/>
<br/><br/>
<strong>Vite 5</strong>
<br/>
<sub>Build tool de próxima generación con HMR instantáneo y optimización automática de dependencias</sub>
</td>
<td align="center" width="250">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" width="60" height="60" alt="Bootstrap"/>
<br/><br/>
<strong>Bootstrap 5</strong>
<br/>
<sub>Framework CSS responsive con sistema de grid flexible y componentes preconfigurados</sub>
</td>
</tr>
</table>

### Dependencias Adicionales

- **React Router** - Navegación declarativa entre vistas
- **Axios** - Cliente HTTP para peticiones a APIs
- **PropTypes** - Validación de props en tiempo de desarrollo

---

## 🚀 Inicio Rápido

### Prerrequisitos

Asegúrate de tener instaladas las siguientes herramientas:

| Herramienta | Versión Requerida | Verificar Instalación |
|-------------|-------------------|-----------------------|
| 🟢 Node.js | ≥ 18.0.0 | `node --version` |
| 📦 npm | ≥ 9.0.0 | `npm --version` |
| 🔧 Git | Última | `git --version` |

> 💡 **Recomendación:** Usa [nvm](https://github.com/nvm-sh/nvm) para gestionar múltiples versiones de Node.js

### Instalación

**Paso 1: Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/buscadorjuegos.git
cd buscadorjuegos
```

**Paso 2: Instalar dependencias**
```bash
npm install
```

**Paso 3: Configurar variables de entorno (opcional)**
```bash
cp .env.example .env
# Edita .env con tus configuraciones
```

**Paso 4: Iniciar el servidor de desarrollo**
```bash
npm run dev
```

¡Listo! Abre tu navegador en `http://localhost:5173` 🎉

---

## 💻 Desarrollo

### Servidor de Desarrollo

```bash
npm run dev
```

**Características del modo desarrollo:**

- 🔥 **Hot Module Replacement (HMR)** - Cambios reflejados instantáneamente
- 🐛 **Source Maps detallados** - Debugging simplificado
- ⚡ **Inicio en < 1 segundo** - Gracias a ESBuild
- 🔍 **Error Overlay** - Errores mostrados directamente en el navegador

### Comandos Útiles

```bash
# Ejecutar linter
npm run lint

# Formatear código con Prettier
npm run format

# Ejecutar tests (si están configurados)
npm run test

# Analizar bundle size
npm run analyze
```

---

## 📦 Build y Producción

### Crear Build de Producción

```bash
npm run build
```

**Optimizaciones automáticas:**
- ✅ Minificación de JavaScript y CSS
- 📦 Code splitting inteligente
- 🗜️ Compresión de assets
- 🌳 Tree shaking para eliminar código muerto
- 🖼️ Optimización de imágenes

**Salida:** Los archivos optimizados se generan en `/dist`

### Vista Previa del Build

```bash
npm run preview
```

Sirve el build de producción en `http://localhost:4173` para testing final.

---

## 🌐 Despliegue

### GitHub Pages

**1. Configurar `vite.config.js`:**
```javascript
export default {
  base: '/buscadorjuegos/', // Nombre de tu repositorio
  build: {
    outDir: 'dist',
  }
}
```

**2. Instalar gh-pages:**
```bash
npm install -D gh-pages
```

**3. Agregar scripts en `package.json`:**
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

**4. Desplegar:**
```bash
npm run deploy
```

Tu app estará en: `https://tu-usuario.github.io/buscadorjuegos/`

---

### Otras Plataformas

<details>
<summary><strong>🔷 Vercel (Recomendado)</strong></summary>

1. Conecta tu repositorio en [vercel.com](https://vercel.com)
2. Configura el comando de build: `npm run build`
3. Directorio de salida: `dist`
4. Deploy automático ✨

</details>

<details>
<summary><strong>🔶 Netlify</strong></summary>

1. Conecta tu repo en [netlify.com](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy con CI/CD integrado

</details>

<details>
<summary><strong>🔸 Cloudflare Pages</strong></summary>

1. Conecta tu repositorio
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

</details>

---

## 📂 Estructura del Proyecto

```
buscadorjuegos/
│
├── 📁 public/                  # Assets estáticos
│   ├── favicon.ico
│   └── images/
│
├── 📁 src/                     # Código fuente
│   ├── 📁 components/          # Componentes React
│   │   ├── Header/
│   │   ├── SearchBar/
│   │   ├── GameCard/
│   │   └── Footer/
│   │
│   ├── 📁 pages/               # Vistas principales
│   │   ├── Home.jsx
│   │   ├── GameDetails.jsx
│   │   └── NotFound.jsx
│   │
│   ├── 📁 hooks/               # Custom hooks
│   │   ├── useGames.js
│   │   └── useDebounce.js
│   │
│   ├── 📁 services/            # API y servicios
│   │   └── gameService.js
│   │
│   ├── 📁 utils/               # Funciones auxiliares
│   │   ├── constants.js
│   │   └── helpers.js
│   │
│   ├── 📁 styles/              # Estilos globales
│   │   ├── global.css
│   │   └── variables.css
│   │
│   ├── App.jsx                 # Componente raíz
│   ├── main.jsx                # Entry point
│   └── router.jsx              # Configuración de rutas
│
├── .env.example                # Variables de entorno ejemplo
├── .gitignore                  # Archivos ignorados por Git
├── index.html                  # HTML principal
├── package.json                # Dependencias y scripts
├── vite.config.js              # Configuración de Vite
└── README.md                   # Este archivo
```

---

## 🧪 Testing

```bash
# Ejecutar tests unitarios
npm run test

# Tests con coverage
npm run test:coverage

# Tests en modo watch
npm run test:watch
```

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Sigue estos pasos:

### Proceso de Contribución

1. **Fork** el proyecto
2. **Crea** una rama para tu feature
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit** tus cambios
   ```bash
   git commit -m 'Add: Nueva característica increíble'
   ```
4. **Push** a la rama
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Abre** un Pull Request

### Guías de Estilo

- Sigue las convenciones de código del proyecto (ESLint + Prettier)
- Escribe mensajes de commit descriptivos siguiendo [Conventional Commits](https://www.conventionalcommits.org/)
- Documenta funciones complejas con JSDoc
- Añade tests para nuevas funcionalidades

---

## 📋 Roadmap

- [ ] Implementar sistema de favoritos con persistencia local
- [ ] Agregar modo oscuro/claro
- [ ] Integración con API de videojuegos (RAWG, IGDB)
- [ ] Sistema de filtros avanzados
- [ ] Página de comparación de juegos
- [ ] PWA con soporte offline
- [ ] Internacionalización (i18n)

---

## 🐛 Reporte de Bugs

¿Encontraste un problema? [Abre un issue](../../issues/new) con:

- Descripción detallada del problema
- Pasos para reproducirlo
- Comportamiento esperado vs actual
- Screenshots si aplica
- Información del navegador/sistema

---

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

**En resumen:** Puedes usar, modificar y distribuir este proyecto libremente, siempre que mantengas el aviso de copyright original.

---

## 👥 Autores

- **Tu Nombre** - *Desarrollo inicial* - [@tu-usuario](https://github.com/tu-usuario)

Ver la lista completa de [contribuidores](../../contributors) que participaron en este proyecto.

---

## 🙏 Agradecimientos

- **[React Team](https://react.dev/)** - Por revolucionar el desarrollo frontend
- **[Evan You](https://github.com/yyx990803)** - Creador de Vite
- **[Bootstrap Team](https://getbootstrap.com/)** - Por el framework CSS
- **Comunidad Open Source** - Por el feedback y contribuciones

---

## 📞 Contacto y Soporte

- 📧 Email: tu-email@ejemplo.com
- 🐦 Twitter: [@tu_handle](https://twitter.com/tu_handle)
- 💼 LinkedIn: [Tu Nombre](https://linkedin.com/in/tu-perfil)
- 🌐 Portfolio: [tuportfolio.com](https://tuportfolio.com)

---

<div align="center">

### ⭐ Si este proyecto te resultó útil, considera darle una estrella

**Hecho con ❤️ usando React + Vite**

[⬆ Volver arriba](#-buscador-de-juegos)

</div>
