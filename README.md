# Near Space · NASA International Space Apps Challenge 2025

> Plataforma web para la exploración y predicción de exoplanetas desarrollada por el equipo **Near Space** durante el NASA International Space Apps Challenge 2025.

## 🛰️ Última actualización (2025)
- Integración de la **API ExoSeek** para estimar la probabilidad de confirmación de exoplanetas mediante IA.
- Rediseño de la experiencia de usuario con fondos dinámicos, navegación transparente y modales globales para información del equipo y de cada planeta.
- Optimización del flujo de validación de formularios, mensajes de error y estados de carga para mantener la consistencia visual del entorno inmersivo.

## 🌌 Descripción general
Near Space es una aplicación interactiva que acerca los hallazgos más recientes de la NASA a comunidades educativas y científicas. Reúne visualizaciones, datos curados y un asistente predictivo que combina parámetros orbitales y estelares para estimar la viabilidad de nuevos mundos. Todo el contenido está disponible en un entorno web responsivo construido con React + Vite.

## ✨ Características principales
- **Exploración de exoplanetas**: listado interactivo con filtros básicos y fichas detalladas en modales emergentes.
- **Predicción asistida por IA**: formulario inteligente que valida unidades físicas clave y consulta el servicio ExoSeek para derivar parámetros orbitales.
- **Experiencia inmersiva**: efectos de campo estelar, navegación translucida y componentes reutilizables diseñados con Tailwind CSS.
- **Equipo en foco**: modal dedicado que presenta el propósito, roles y contacto del equipo Near Space.

## 🏗️ Arquitectura técnica
- **Frontend**: React 18, React Router y Vite para empaquetado ultrarrápido.
- **Estilos**: Tailwind CSS con utilidades personalizadas, glassmorphism y animaciones.
- **Servicios**: `fetch` hacia `https://exoseek.onrender.com/predict-one?strict=true` para predicciones basadas en misiones Kepler, K2 y TESS.
- **Gestión de estado**: hooks de React (`useState`, `useCallback`) y elevación de estado para compartir información entre modales.

## 📁 Estructura de carpetas
```
├── public/              # Assets estáticos y recursos compartidos
├── src/
│   ├── components/      # UI modular (Navbar, modales, listados, formularios)
│   ├── hooks/           # Hooks reutilizables para datos y efectos
│   ├── services/        # Conectores a APIs externas y utilidades de datos
│   ├── styles/          # Configuración global de estilos y tokens
│   ├── App.jsx          # Orquestación de rutas y modales globales
│   └── main.jsx         # Punto de entrada y montaje del árbol React
└── README.md
```

## 🚀 Puesta en marcha
1. **Requisitos**
   - Node.js >= 18
   - npm >= 9
2. **Instalación**
   ```bash
   npm install
   ```
3. **Entorno de desarrollo**
   ```bash
   npm run dev
   ```
   El servidor quedará disponible en `http://localhost:5173`.
4. **Build de producción**
   ```bash
   npm run build
   ```
5. **Previsualización del build**
   ```bash
   npm run preview
   ```

## 🧪 Buenas prácticas de contribución
- Mantener componentes accesibles (uso de `aria-*`, focus states y etiquetas semánticas).
- Validar unidades físicas y rangos en los formularios antes de consultar servicios externos.
- Acompañar cada aporte con un breve resumen del impacto y capturas cuando haya cambios visuales significativos.

## 🗺️ Hoja de ruta sugerida
- [ ] Incorporar filtrado avanzado por misiones y métodos de detección.
- [ ] Añadir comparativas visuales de parámetros orbitales entre planetas seleccionados.
- [ ] Integrar autenticación ligera para guardar favoritos e historiales de predicción.
- [ ] Localización completa en español/inglés y soporte para modo alto contraste.

## 👩‍🚀 Equipo Near Space
- Kevin Urrea
- Keitlyn Peralta
- Esteban Padilla
- Jose Rodriguez
- Adrian Acuña
- Cristian Padilla

## 📄 Licencia
Proyecto desarrollado con fines educativos y de divulgación científica. El contenido puede reutilizarse citando a **Near Space** y la NASA International Space Apps Challenge 2025.
