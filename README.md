# 🏗️ Condisa Romero - Sitio Web Corporativo

![Condisa Romero Logo](img/logoCondisaRomeroV2_.png)

## 📋 Descripción del Proyecto

Sitio web corporativo desarrollado para **Condisa Romero Servicios Generales & Construcciones S.A.C.**, una empresa especializada en arquitectura e ingeniería. El proyecto presenta una interfaz moderna y responsiva que muestra los servicios, proyectos y información de contacto de la empresa.

## 🎯 Características Principales

- ✅ **Diseño Responsivo**: Adaptable a dispositivos móviles, tablets y desktop
- ✅ **Navegación Intuitiva**: Menú desplegable con todos los servicios
- ✅ **Animaciones Suaves**: Efectos visuales y transiciones CSS
- ✅ **Contador Dinámico**: Estadísticas animadas de la empresa
- ✅ **Optimización SEO**: Meta tags y estructura semántica
- ✅ **Integración Social**: Enlaces a redes sociales y WhatsApp
- ✅ **Portafolio Visual**: Galería de proyectos realizados

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos avanzados con Flexbox y Grid
- **JavaScript (Vanilla)**: Interactividad y animaciones
- **Google Fonts**: Tipografías Montserrat, Poppins, Roboto
- **Iconos**: Remix Icons, Boxicons, Font Awesome

### Herramientas y Servicios
- **Google Analytics**: Seguimiento de visitantes
- **CDN**: Librerías externas para optimización
- **Imágenes WebP**: Formato optimizado para web

## 📁 Estructura del Proyecto

```
website-condisa-romero/
├── 📄 index.html              # Página principal
├── 📄 about.html              # Página "Nosotros"
├── 📄 service.html            # Página de servicios
├── 📄 projects.html           # Portafolio de proyectos
├── 📄 blog.html               # Página del blog
├── 📄 customer.html           # Página de clientes
├── 📁 estilos/                # Archivos CSS
│   ├── styles.css             # Estilos principales
│   └── cssServices.css        # Estilos específicos de servicios
├── 📁 js/                     # Archivos JavaScript
│   ├── scripts.js             # Funcionalidades principales
│   └── jsServices.js          # JavaScript para servicios
├── 📁 img/                    # Imágenes y recursos
│   ├── img_projects/          # Imágenes de proyectos
│   ├── img_pages/             # Imágenes de páginas
│   ├── services_index/        # Imágenes de servicios
│   └── projects_interiores/   # Proyectos de interiorismo
├── 📁 paginas/                # Páginas de servicios específicos
│   ├── construccion.html
│   ├── diseno.html
│   ├── licencia.html
│   └── ... (más servicios)
└── 📁 blog/                   # Contenido del blog
    └── ia.html
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code, Sublime Text, etc.)
- Servidor web local (opcional para desarrollo)

### Pasos de Instalación

1. **Clonar o descargar el proyecto**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd website-condisa-romero
   ```

2. **Abrir el proyecto**
   - Abre `index.html` en tu navegador
   - O usa un servidor local para mejor rendimiento

3. **Servidor Local (Recomendado)**
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js (si tienes live-server instalado)
   npx live-server
   
   # Con PHP
   php -S localhost:8000
   ```

4. **Acceder al sitio**
   - Abre tu navegador en `http://localhost:8000`

## 🎨 Funcionalidades Implementadas

### Navegación
- **Menú Responsivo**: Se adapta a dispositivos móviles
- **Menú Desplegable**: Submenú para servicios
- **Navegación Suave**: Transiciones entre páginas

### Animaciones
- **Contador Animado**: Números que se incrementan al hacer scroll
- **Efectos Hover**: Interacciones visuales en botones y tarjetas
- **Transiciones CSS**: Animaciones suaves en elementos

### Responsive Design
- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: Adaptación a diferentes tamaños de pantalla
- **Flexbox/Grid**: Layouts modernos y flexibles

## 📱 Páginas Incluidas

### Páginas Principales
- **Inicio** (`index.html`): Landing page con servicios destacados
- **Nosotros** (`about.html`): Información de la empresa
- **Servicios** (`service.html`): Lista completa de servicios
- **Proyectos** (`projects.html`): Portafolio de trabajos realizados
- **Blog** (`blog.html`): Artículos y noticias

### Páginas de Servicios
- Diseño de Interiores
- Construcción en General
- Planos de Obra
- Licencia de Construcción
- Declaratoria de Fábrica
- Independización
- Sub División de Lotes
- Prescripción Adquisitiva
- Defensa Civil
- Tasación
- Planos Eléctricos
- Planos Perimétricos

## 🔧 Personalización

### Modificar Colores
Edita las variables CSS en `estilos/styles.css`:
```css
:root {
    --primary-color: #tu-color-principal;
    --secondary-color: #tu-color-secundario;
    --accent-color: #tu-color-acento;
}
```

### Agregar Nuevos Servicios
1. Crea una nueva página en `paginas/`
2. Agrega la entrada en el menú de `index.html`
3. Incluye la imagen correspondiente en `img/services_index/`

### Modificar Contenido
- **Textos**: Edita directamente en los archivos HTML
- **Imágenes**: Reemplaza archivos en `img/` manteniendo los nombres
- **Estilos**: Modifica `estilos/styles.css`

## 📊 Optimizaciones Implementadas

### Performance
- **Imágenes WebP**: Formato optimizado para web
- **CSS Minificado**: Estilos comprimidos
- **CDN**: Librerías cargadas desde CDN
- **Lazy Loading**: Carga diferida de imágenes

### SEO
- **Meta Tags**: Títulos y descripciones optimizadas
- **Estructura Semántica**: HTML5 semántico
- **Alt Text**: Descripciones en imágenes
- **Google Analytics**: Seguimiento de métricas

## 🌐 Integraciones

### Redes Sociales
- **Facebook**: Enlace directo al perfil
- **WhatsApp**: Botón de contacto directo
- **Google Analytics**: Seguimiento de visitantes

### Servicios Externos
- **Google Fonts**: Tipografías web
- **Remix Icons**: Iconografía moderna
- **Font Awesome**: Iconos adicionales

## 🐛 Solución de Problemas

### Problemas Comunes

**Las imágenes no cargan**
- Verifica que las rutas en `img/` sean correctas
- Asegúrate de que los archivos existan

**El menú no funciona en móvil**
- Verifica que `js/scripts.js` esté cargado
- Revisa la consola del navegador por errores

**Los estilos no se aplican**
- Confirma que `estilos/styles.css` esté vinculado
- Verifica la sintaxis CSS

## 📈 Próximas Mejoras

- [ ] Implementar modo oscuro
- [ ] Agregar formulario de contacto
- [ ] Optimizar para Core Web Vitals
- [ ] Implementar PWA (Progressive Web App)
- [ ] Agregar más animaciones
- [ ] Mejorar accesibilidad

## 👨‍💻 Desarrollador

**MiGaNg** - Desarrollador Frontend
- Proyecto desarrollado como primer sitio web corporativo
- Tecnologías: HTML5, CSS3, JavaScript Vanilla

## 📄 Licencia

Este proyecto es propiedad de **Condisa Romero Servicios Generales & Construcciones S.A.C.**

---

## 🎓 Lo que Aprendí en Este Proyecto

Como mi primer proyecto web, este sitio me permitió aprender:

### HTML
- Estructura semántica y accesible
- Meta tags para SEO
- Formularios y navegación

### CSS
- Flexbox y Grid Layout
- Animaciones y transiciones
- Responsive design
- Variables CSS

### JavaScript
- Manipulación del DOM
- Event listeners
- Animaciones dinámicas
- Navegación responsive

### Conceptos Generales
- Organización de archivos
- Optimización de imágenes
- Integración de servicios externos
- Mejores prácticas de desarrollo web

---

*¡Gracias por revisar mi primer proyecto web! 🚀*