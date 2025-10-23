# Portafolio Juan Rafael Calzada González

Un portafolio profesional moderno y responsive desarrollado con React, TypeScript y Tailwind CSS.

## 🚀 Características

- **Arquitectura Modular**: Componentes reutilizables y bien organizados
- **TypeScript**: Tipado estático para mayor robustez
- **Tailwind CSS**: Estilos modernos y responsive
- **Temas Dinámicos**: Múltiples temas de color (claro, oscuro, azul, verde, púrpura)
- **Responsive Design**: Optimizado para todos los dispositivos
- **Navegación Suave**: Scroll automático entre secciones
- **Formulario de Contacto**: Interfaz de contacto funcional
- **SEO Optimizado**: Meta tags y estructura semántica

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Página principal
├── components/
│   ├── Header/
│   │   ├── Header.tsx      # Componente del header
│   │   ├── Navigation.tsx  # Navegación
│   │   ├── ThemeSelector.tsx # Selector de temas
│   │   └── index.ts        # Exportaciones
│   └── sections/
│       ├── HeroSection.tsx     # Sección hero
│       ├── CVSection.tsx       # Sección CV
│       ├── AboutSection.tsx    # Sección sobre mí
│       ├── ProjectsSection.tsx # Sección proyectos
│       ├── TestimonialsSection.tsx # Testimonios
│       ├── ExperienceSection.tsx   # Experiencia
│       ├── SkillsSection.tsx       # Habilidades
│       ├── ServicesSection.tsx     # Servicios
│       ├── ContactSection.tsx      # Contacto
│       ├── Footer.tsx              # Footer
│       └── index.ts                # Exportaciones
├── hooks/
│   ├── useTheme.ts         # Hook para manejo de temas
│   └── useActiveSection.ts # Hook para navegación
├── types/
│   └── index.ts            # Definiciones de tipos TypeScript
├── data/
│   └── constants.ts        # Datos y constantes
└── styles/
    └── globals.css         # Estilos globales y variables CSS
```

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS v4** - Framework de CSS
- **Lucide React** - Iconos
- **ESLint** - Linter de código

## 🎨 Sistema de Diseño

### Temas Disponibles
- **Claro**: Tema por defecto con colores claros
- **Oscuro**: Tema oscuro para mejor experiencia nocturna
- **Azul**: Tema con paleta de colores azules
- **Verde**: Tema con paleta de colores verdes
- **Púrpura**: Tema con paleta de colores púrpuras

### Componentes Reutilizables
- **Botones**: `btn-primary`, `btn-secondary`
- **Tarjetas**: `card`
- **Inputs**: `input`
- **Badges**: `badge-primary`, `badge-secondary`
- **Enlaces Sociales**: `social-link`

## 🚀 Instalación y Uso

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/rafael5678/portfolio.git
   cd portfolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

5. **Iniciar servidor de producción**
   ```bash
   npm start
   ```

## 📱 Responsive Design

El portafolio está optimizado para:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎯 Funcionalidades

### Navegación
- Menú responsive con hamburguesa en móvil
- Scroll suave entre secciones
- Indicador de sección activa
- Navegación por teclado

### Temas
- Cambio dinámico de temas
- Persistencia del tema seleccionado
- Transiciones suaves entre temas

### Formulario de Contacto
- Validación de campos requeridos
- Estados de carga y éxito
- Integración con redes sociales

### Proyectos
- Tarjetas interactivas
- Filtros por estado y tipo
- Enlaces a código y demo

## 🔧 Configuración

### Variables de Entorno
Crear archivo `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
NEXT_PUBLIC_EMAIL=tu-email@ejemplo.com
```

### Personalización
1. **Datos Personales**: Editar `src/data/constants.ts`
2. **Colores**: Modificar variables CSS en `src/styles/globals.css`
3. **Temas**: Ajustar colores en `tailwind.config.js`

## 📈 Mejoras Futuras

- [ ] Integración con CMS (Strapi/Sanity)
- [ ] Blog personal
- [ ] Animaciones con Framer Motion
- [ ] Modo offline con PWA
- [ ] Tests unitarios con Jest
- [ ] Analytics y métricas
- [ ] Internacionalización (i18n)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👨‍💻 Autor

**Juan Rafael Calzada González**
- GitHub: [@rafael5678](https://github.com/rafael5678)
- LinkedIn: [Juan Rafael Calzada](https://www.linkedin.com/in/juan-rafael-calzada-65566a387)
- Email: juanrafaelcalzada1087@gmail.com

---

⭐ Si te gusta este proyecto, ¡dale una estrella!